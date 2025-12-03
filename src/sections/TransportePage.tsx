"use client";
import { useState, useMemo, useEffect } from 'react';
import TransporteInputs from '../components/forms/TransporteInputs';
import TransporteResults from '../components/results/TransporteResults';
import { calcularTransporte, defaultTransporteValues } from '../scripts/transporteCalculations';
import { useCalculations } from '../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../constants/storageKeys';

export default function TransportePage() {
  const { setTransporteResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultTransporteValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.TRANSPORTE_INPUTS);
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    // Cargar dirty fields
    const savedDirtyFields = loadDirtyFields(STORAGE_KEYS.TRANSPORTE_DIRTY);
    setDirtyFields(savedDirtyFields);
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEYS.TRANSPORTE_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.TRANSPORTE_DIRTY, newSet);
      return newSet;
    });
    setInputValues(prev => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularTransporte(inputValues), [inputValues]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setTransporteResults(resultados);
  }, [resultados, setTransporteResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <TransporteInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<TransporteResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
