"use client";
import { useState, useMemo, useEffect } from 'react';
import MallaForm from '../components/forms/MallaInputs';
import MallaResultados from '../components/results/MallaResults';
import { calcularMalla, defaultMallaValues } from '../scripts/mallaCalculations';
import { useCalculations } from '../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../constants/storageKeys';

export default function MallaSection() {
  const [inputValues, setInputValues] = useState(defaultMallaValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());
  const { setMallaResults } = useCalculations();

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.MALLA_INPUTS);
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    // Cargar dirty fields
    const savedDirtyFields = loadDirtyFields(STORAGE_KEYS.MALLA_DIRTY);
    setDirtyFields(savedDirtyFields);
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEYS.MALLA_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.MALLA_DIRTY, newSet);
      return newSet;
    });
    setInputValues(prev => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularMalla(inputValues), [inputValues]);

  // Guardar resultados en el context cada vez que cambien
  useEffect(() => {
    setMallaResults(resultados);
  }, [resultados, setMallaResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <MallaForm 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<MallaResultados resultados={resultados} />}
        />
      </div>
    </div>
  );
}
