"use client";
import { useState, useMemo } from 'react';
import RellenoDetriticoInputs from './RellenoDetriticoInputs';
import RellenoDetriticoResults from './RellenoDetriticoResults';
import { calcularRellenoDetritico, defaultRellenoDetriticoValues } from './rellenoDetriticoCalculations';
import { useCalculations } from '../../../context/CalculationContext';
import { STORAGE_KEYS } from '../../../lib/storageKeys';
import { usePersistedState } from '../../../lib/hooks/usePersistedState';
import { useDirtyFields } from '../../../lib/hooks/useDirtyFields';
import { useDerivedValue } from '../../../lib/hooks/useDerivedValue';
import { useSyncToContext } from '../../../lib/hooks/useSyncToContext';
import { useClientOnly } from '../../../lib/hooks/useClientOnly';

export default function RellenoDetriticoPage() {
  const { requerimientoPerforadoraInputs, setRellenoDetriticoResults } = useCalculations();
  
  // Use custom hooks for state management
  const [inputValues, setInputValues] = usePersistedState(
    STORAGE_KEYS.RELLENO_DETRITICO_INPUTS,
    defaultRellenoDetriticoValues
  );

  const { dirtyFields, markDirty, clearDirty } = useDirtyFields(
    STORAGE_KEYS.RELLENO_DETRITICO_DIRTY
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
    setInputValues((prev: typeof defaultRellenoDetriticoValues) => ({ 
      ...prev, 
      [fieldName]: parseFloat(e.target.value) || 0 
    }));
  };

  const handleResetField = (fieldName: string) => {
    clearDirty(fieldName);
    
    if (fieldName === 'produccionMineral' && requerimientoPerforadoraInputs?.produccionMina) {
      setInputValues((prev: typeof defaultRellenoDetriticoValues) => ({ 
        ...prev, 
        produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2)) 
      }));
    }
  };

  const resultados = useMemo(() => calcularRellenoDetritico(finalInputValues), [finalInputValues]);

  // Sync results to context using custom hook
  useSyncToContext(resultados, setRellenoDetriticoResults);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoDetriticoInputs 
          inputValues={finalInputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RellenoDetriticoResults resultados={resultados} />}
          isAutoFilled={isClient && !!requerimientoPerforadoraInputs?.produccionMina}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
