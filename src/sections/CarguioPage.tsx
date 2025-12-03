"use client";
import { useState, useMemo, useEffect } from 'react';
import CarguioInputs from '../components/forms/CarguioInputs';
import CarguioResults from '../components/results/CarguioResults';
import { calcularCarguio, defaultCarguioValues } from '../scripts/carguioCalculations';
import { useCalculations } from '../context/CalculationContext';

export default function CarguioPage() {
  const { requerimientoPerforadoraInputs, setCarguioInputs, setCarguioResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultCarguioValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem('carguioInputsValues');
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('carguioInputsValues', JSON.stringify(inputValues));
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

  const resultados = useMemo(() => calcularCarguio(inputValues), [inputValues]);

  // Guardar densidadRotaMaterial en el contexto
  useEffect(() => {
    setCarguioInputs({
      densidadRotaMaterial: inputValues.densidadRotaMaterial
    });
  }, [inputValues.densidadRotaMaterial, setCarguioInputs]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setCarguioResults(resultados);
  }, [resultados, setCarguioResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CarguioInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<CarguioResults resultados={resultados} />}
          isAutoFilled={!!requerimientoPerforadoraInputs?.produccionMina}
        />
      </div>
    </div>
  );
}
