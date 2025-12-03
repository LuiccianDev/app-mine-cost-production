"use client";
import { useState, useMemo, useEffect } from 'react';
import RellenoCementadoInputs from '../components/forms/RellenoCementadoInputs';
import RellenoCementadoResults from '../components/results/RellenoCementadoResults';
import { calcularRellenoCementado, defaultRellenoCementadoValues } from '../scripts/rellenoCementadoCalculations';
import { useCalculations } from '../context/CalculationContext';

export default function RellenoCementadoPage() {
  const { requerimientoPerforadoraInputs, setRellenoCementadoResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultRellenoCementadoValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem('rellenoCementadoInputsValues');
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('rellenoCementadoInputsValues', JSON.stringify(inputValues));
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

  const resultados = useMemo(() => calcularRellenoCementado(inputValues), [inputValues]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setRellenoCementadoResults(resultados);
  }, [resultados, setRellenoCementadoResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoCementadoInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RellenoCementadoResults resultados={resultados} />}
          isAutoFilled={!!requerimientoPerforadoraInputs?.produccionMina}
        />
      </div>
    </div>
  );
}
