"use client";
import { useState, useMemo } from 'react';
import RellenoCementadoInputs from './RellenoCementadoInputs';
import RellenoCementadoResults from './RellenoCementadoResults';
import { calcularRellenoCementado, defaultRellenoCementadoValues } from './rellenoCementadoCalculations';
import { useCalculations } from '../../../context/CalculationContext';
import { STORAGE_KEYS } from '../../../lib/storageKeys';
import { usePersistedState } from '../../../lib/hooks/usePersistedState';
import { useDirtyFields } from '../../../lib/hooks/useDirtyFields';
import { useDerivedValue } from '../../../lib/hooks/useDerivedValue';
import { useSyncToContext } from '../../../lib/hooks/useSyncToContext';
import { useClientOnly } from '../../../lib/hooks/useClientOnly';

export default function RellenoCementadoPage() {
  const { requerimientoPerforadoraInputs, setRellenoCementadoResults } = useCalculations();
  
  // Use custom hooks for state management
  const [inputValues, setInputValues] = usePersistedState(
    STORAGE_KEYS.RELLENO_CEMENTADO_INPUTS,
    defaultRellenoCementadoValues
  );

  const { dirtyFields, markDirty, clearDirty } = useDirtyFields(
    STORAGE_KEYS.RELLENO_CEMENTADO_DIRTY
  );

  const [showResults, setShowResults] = useState(false);
  const isClient = useClientOnly();

  // Calculate derived value using the custom hook
  const finalProduccionMineral = useDerivedValue(
    requerimientoPerforadoraInputs?.produccionMina 
      ? parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2))
      : null,
    inputValues.produccionMineral,
    'produccionMineral',
    dirtyFields
  );

  // Valores finales con el campo derivado
  const finalInputValues = useMemo(() => ({
    ...inputValues,
    produccionMineral: finalProduccionMineral
  }), [inputValues, finalProduccionMineral]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    markDirty(fieldName);
    setInputValues((prev: typeof defaultRellenoCementadoValues) => ({ 
      ...prev, 
      [fieldName]: parseFloat(e.target.value) || 0 
    }));
  };

  const handleResetField = (fieldName: string) => {
    clearDirty(fieldName);
    
    if (fieldName === 'produccionMineral' && requerimientoPerforadoraInputs?.produccionMina) {
      setInputValues((prev: typeof defaultRellenoCementadoValues) => ({ 
        ...prev, 
        produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2)) 
      }));
    }
  };

  const resultados = useMemo(() => calcularRellenoCementado(finalInputValues), [finalInputValues]);

  // Sync results to context using custom hook
  useSyncToContext(resultados, setRellenoCementadoResults);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoCementadoInputs 
          inputValues={finalInputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RellenoCementadoResults resultados={resultados} />}
          isAutoFilled={isClient && !!requerimientoPerforadoraInputs?.produccionMina}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
