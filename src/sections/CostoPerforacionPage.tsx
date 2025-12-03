"use client";
import { useState, useMemo, useEffect } from 'react';
import CostoPerforacionInputs from '../components/forms/CostoPerforacionInputs';
import CostoPerforacionResults from '../components/results/CostoPerforacionResults';
import { calcularCostoPerforacion, defaultCostoPerforacionValues } from '../scripts/costoPerforacionCalculations';
import { useCalculations } from '../context/CalculationContext';

export default function CostoPerforacionPage() {
  const [inputValues, setInputValues] = useState(defaultCostoPerforacionValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const { mallaResults, setCostoPerforacionResults } = useCalculations();

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem('costoPerforacionInputs');
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('costoPerforacionInputs', JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  // Auto-actualizar solo los campos del contexto cuando cambian
  useEffect(() => {
    if (isInitialized && mallaResults) {
      setInputValues((prev) => ({
        ...prev,
        ...(mallaResults.tonelaje && {
          tonelaje: parseFloat(mallaResults.tonelaje.toFixed(2)),
        }),
        ...(mallaResults.alturaBanco && {
          alturaBanco: parseFloat(mallaResults.alturaBanco.toFixed(2)),
        }),
      }));
    }
  }, [mallaResults?.tonelaje, mallaResults?.alturaBanco, isInitialized]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularCostoPerforacion(inputValues), [inputValues]);

  // Guardar resultados en el context
  useEffect(() => {
    setCostoPerforacionResults(resultados);
  }, [resultados, setCostoPerforacionResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoPerforacionInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<CostoPerforacionResults resultados={resultados} />}
          isAutoFilled={!!(mallaResults?.tonelaje && mallaResults?.alturaBanco)}
        />
      </div>
    </div>
  );
}
