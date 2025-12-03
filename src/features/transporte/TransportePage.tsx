"use client";
import { useState, useMemo, useEffect } from 'react';
import TransporteInputs from './TransporteInputs';
import TransporteResults from './TransporteResults';
import { calcularTransporte, defaultTransporteValues } from './transporteCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function TransportePage() {
  const { setTransporteResults } = useCalculations();
  
  // Lazy initialization: cargar desde localStorage solo una vez
  const [inputValues, setInputValues] = useState(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.TRANSPORTE_INPUTS);
    if (savedInputs) {
      return JSON.parse(savedInputs);
    }
    return defaultTransporteValues;
  });
  // se removio para no dar el error _dirtyFields 
  const [, setDirtyFields] = useState<Set<string>>(() => {
    return loadDirtyFields(STORAGE_KEYS.TRANSPORTE_DIRTY);
  });

  const [showResults, setShowResults] = useState(false);

  // Guardar inputs en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TRANSPORTE_INPUTS, JSON.stringify(inputValues));
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.TRANSPORTE_DIRTY, newSet);
      return newSet;
    });
    setInputValues((prev: typeof defaultTransporteValues) => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
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
