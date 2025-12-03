"use client";
import { useState, useMemo, useEffect } from 'react';
import LimpiezaInputs from '../components/forms/LimpiezaInputs';
import LimpiezaResults from '../components/results/LimpiezaResults';
import { calcularLimpieza, defaultLimpiezaValues } from '../scripts/limpiezaCalculations';
import { useCalculations } from '../context/CalculationContext';

export default function LimpiezaPage() {
  const { carguioInputs, requerimientoPerforadoraInputs, setLimpiezaResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultLimpiezaValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem('limpiezaInputsValues');
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('limpiezaInputsValues', JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  // Auto-actualizar solo densidadRotaMaterial cuando cambia en el contexto
  useEffect(() => {
    if (isInitialized && carguioInputs?.densidadRotaMaterial) {
      setInputValues(prev => ({
        ...prev,
        densidadRotaMaterial: parseFloat(carguioInputs.densidadRotaMaterial.toFixed(2))
      }));
    }
  }, [carguioInputs?.densidadRotaMaterial, isInitialized]);

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

  const resultados = useMemo(() => calcularLimpieza(inputValues), [inputValues]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setLimpiezaResults(resultados);
  }, [resultados, setLimpiezaResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <LimpiezaInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<LimpiezaResults resultados={resultados} />}
          isAutoFilledDensidad={!!carguioInputs?.densidadRotaMaterial}
          isAutoFilledProduccion={!!requerimientoPerforadoraInputs?.produccionMina}
        />
      </div>
    </div>
  );
}
