"use client";
import { useState, useMemo, useEffect } from 'react';
import RellenoDetriticoInputs from '../components/forms/RellenoDetriticoInputs';
import RellenoDetriticoResults from '../components/results/RellenoDetriticoResults';
import { calcularRellenoDetritico, defaultRellenoDetriticoValues } from '../scripts/rellenoDetriticoCalculations';
import { useCalculations } from '../context/CalculationContext';

export default function RellenoDetriticoPage() {
  const { requerimientoPerforadoraInputs, setRellenoDetriticoResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultRellenoDetriticoValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem('rellenoDetriticoInputsValues');
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('rellenoDetriticoInputsValues', JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  // Auto-actualizar solo produccionMineral cuando cambia en el contexto
  useEffect(() => {
    if (isInitialized && requerimientoPerforadoraInputs?.produccionMina) {
      setInputValues(prev => ({
        ...prev,
        produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2))
      }));
    }
  }, [requerimientoPerforadoraInputs?.produccionMina, isInitialized]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularRellenoDetritico(inputValues), [inputValues]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setRellenoDetriticoResults(resultados);
  }, [resultados, setRellenoDetriticoResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoDetriticoInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RellenoDetriticoResults resultados={resultados} />}
          isAutoFilled={!!requerimientoPerforadoraInputs?.produccionMina}
        />
      </div>
    </div>
  );
}
