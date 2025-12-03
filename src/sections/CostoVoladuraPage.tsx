"use client";
import { useState, useMemo, useEffect } from 'react';
import CostoVoladuraInputs from '../components/forms/CostoVoladuraInputs';
import CostoVoladuraResults from '../components/results/CostoVoladuraResults';
import { calculateCostoVoladura, defaultCostoVoladuraValues } from '../scripts/costoVoladuraCalculations';
import { useCalculations } from '../context/CalculationContext';

export default function CostoVoladuraPage() {
  const { mallaResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultCostoVoladuraValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem('costoVoladuraInputs');
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('costoVoladuraInputs', JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  // Auto-actualizar solo tonelajePorTaladro cuando cambia en el contexto
  useEffect(() => {
    if (isInitialized && mallaResults?.tonelaje) {
      setInputValues(prev => ({
        ...prev,
        tonelajePorTaladro: parseFloat(mallaResults.tonelaje.toFixed(2))
      }));
    }
  }, [mallaResults?.tonelaje, isInitialized]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calculateCostoVoladura(inputValues), [inputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoVoladuraInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<CostoVoladuraResults resultados={resultados} />}
          isAutoFilled={!!mallaResults?.tonelaje}
        />
      </div>
    </div>
  );
}
