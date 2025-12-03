"use client";
import { useState, useMemo } from 'react';
import MallaForm from './MallaInputs';
import MallaResultados from './MallaResults';
import { calcularMalla, defaultMallaValues } from './mallaCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS } from '../../lib/storageKeys';
import { usePersistedState } from '../../lib/hooks/usePersistedState';
import { useDirtyFields } from '../../lib/hooks/useDirtyFields';
import { useSyncToContext } from '../../lib/hooks/useSyncToContext';

export default function MallaSection() {
  const { setMallaResults } = useCalculations();
  
  // Use custom hooks for state management
  const [inputValues, setInputValues] = usePersistedState(
    STORAGE_KEYS.MALLA_INPUTS,
    defaultMallaValues
  );

  const { dirtyFields, markDirty } = useDirtyFields(
    STORAGE_KEYS.MALLA_DIRTY
  );

  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    markDirty(fieldName);
    setInputValues((prev: typeof defaultMallaValues) => ({ 
      ...prev, 
      [fieldName]: parseFloat(e.target.value) || 0 
    }));
  };

  const resultados = useMemo(() => calcularMalla(inputValues), [inputValues]);

  // Sync results to context using custom hook
  useSyncToContext(resultados, setMallaResults);

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
