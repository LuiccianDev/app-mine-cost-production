"use client";
import { useState, useMemo, useEffect } from 'react';
import RequerimientoPerforadoraInputs from '../components/forms/RequerimientoPerforadoraInputs';
import RequerimientoPerforadoraResults from '../components/results/RequerimientoPerforadoraResults';
import { calcularRequerimientoPerforadora, defaultRequerimientoPerforadoraValues } from '../scripts/requerimientoPerforadoraCalculations';
import { useCalculations } from '../context/CalculationContext';

export default function RequerimientoPerforadoraPage() {
  const [inputValues, setInputValues] = useState(defaultRequerimientoPerforadoraValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const { mallaResults, setRequerimientoPerforadoraInputs } = useCalculations();

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem('requerimientoPerforadoraInputsValues');
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('requerimientoPerforadoraInputsValues', JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  // Auto-actualizar solo los campos del contexto cuando cambian
  useEffect(() => {
    if (isInitialized && mallaResults) {
      setInputValues((prev) => ({
        ...prev,
        ...(mallaResults.alturaBanco && {
          alturaBanco: parseFloat(mallaResults.alturaBanco.toFixed(2)),
        }),
        ...(mallaResults.tonelaje && {
          tonelajePorTaladro: parseFloat(mallaResults.tonelaje.toFixed(2)),
        }),
      }));
    }
  }, [mallaResults?.alturaBanco, mallaResults?.tonelaje, isInitialized]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularRequerimientoPerforadora(inputValues), [inputValues]);

  // Guardar produccionMina en el contexto
  useEffect(() => {
    setRequerimientoPerforadoraInputs({
      produccionMina: inputValues.produccionMina
    });
  }, [inputValues.produccionMina, setRequerimientoPerforadoraInputs]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RequerimientoPerforadoraInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RequerimientoPerforadoraResults resultados={resultados} />}
          isAutoFilled={!!(mallaResults?.alturaBanco && mallaResults?.tonelaje)}
        />
      </div>
    </div>
  );
}
