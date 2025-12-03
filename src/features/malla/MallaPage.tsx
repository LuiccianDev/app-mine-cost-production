"use client";
import { useState, useMemo, useEffect } from 'react';
import MallaForm from './MallaInputs';
import MallaResultados from './MallaResults';
import { calcularMalla, defaultMallaValues } from './mallaCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function MallaSection() {
  // Lazy initialization: cargar desde localStorage solo una vez
  const [inputValues, setInputValues] = useState(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.MALLA_INPUTS);
    if (savedInputs) {
      return JSON.parse(savedInputs);
    }
    return defaultMallaValues;
  });
  // se removio para no dar el error _dirtyFields 
  const [, setDirtyFields] = useState<Set<string>>(() => {
    return loadDirtyFields(STORAGE_KEYS.MALLA_DIRTY);
  });

  const [showResults, setShowResults] = useState(false);
  const { setMallaResults } = useCalculations();

  // Guardar inputs en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MALLA_INPUTS, JSON.stringify(inputValues));
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.MALLA_DIRTY, newSet);
      return newSet;
    });
    setInputValues((prev: typeof defaultMallaValues) => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
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
