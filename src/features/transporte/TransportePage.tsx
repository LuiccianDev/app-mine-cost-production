"use client";
import { useState, useMemo } from 'react';
import TransporteInputs from './TransporteInputs';
import TransporteResults from './TransporteResults';
import { calcularTransporte, defaultTransporteValues } from './transporteCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS } from '../../lib/storageKeys';
import { usePersistedState } from '../../lib/hooks/usePersistedState';
import { useDirtyFields } from '../../lib/hooks/useDirtyFields';
import { useSyncToContext } from '../../lib/hooks/useSyncToContext';

export default function TransportePage() {
  const { setTransporteResults } = useCalculations();
  
  // Use custom hooks for state management
  const [inputValues, setInputValues] = usePersistedState(
    STORAGE_KEYS.TRANSPORTE_INPUTS,
    defaultTransporteValues
  );

  const { markDirty } = useDirtyFields(
    STORAGE_KEYS.TRANSPORTE_DIRTY
  );

  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    markDirty(fieldName);
    setInputValues((prev: typeof defaultTransporteValues) => ({ 
      ...prev, 
      [fieldName]: parseFloat(e.target.value) || 0 
    }));
  };

  const resultados = useMemo(() => calcularTransporte(inputValues), [inputValues]);

  // Sync results to context using custom hook
  useSyncToContext(resultados, setTransporteResults);

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
