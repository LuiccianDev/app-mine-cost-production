"use client";
import { useState, useMemo } from 'react';
import RequerimientoPerforadoraInputs from './RequerimientoPerforadoraInputs';
import RequerimientoPerforadoraResults from './RequerimientoPerforadoraResults';
import { calcularRequerimientoPerforadora, defaultRequerimientoPerforadoraValues } from './requerimientoPerforadoraCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS } from '../../lib/storageKeys';
import { usePersistedState } from '../../lib/hooks/usePersistedState';
import { useDirtyFields } from '../../lib/hooks/useDirtyFields';
import { useDerivedValue } from '../../lib/hooks/useDerivedValue';
import { useSyncToContext } from '../../lib/hooks/useSyncToContext';
import { useClientOnly } from '../../lib/hooks/useClientOnly';

export default function RequerimientoPerforadoraPage() {
  const { mallaResults, setRequerimientoPerforadoraInputs } = useCalculations();
  
  // Use custom hooks for state management
  const [inputValues, setInputValues] = usePersistedState(
    STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_INPUTS,
    defaultRequerimientoPerforadoraValues
  );

  const { dirtyFields, markDirty, clearDirty } = useDirtyFields(
    STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_DIRTY
  );

  const [showResults, setShowResults] = useState(false);
  const isClient = useClientOnly();

  // Calculate derived values using the custom hook
  const finalAlturaBanco = useDerivedValue(
    mallaResults?.alturaBanco 
      ? parseFloat(mallaResults.alturaBanco.toFixed(2))
      : null,
    inputValues.alturaBanco,
    'alturaBanco',
    dirtyFields
  );

  const finalTonelajePerforado = useDerivedValue(
    mallaResults?.tonelajePerforado 
      ? parseFloat(mallaResults.tonelajePerforado.toFixed(2))
      : null,
    inputValues.tonelajePerforado,
    'tonelajePerforado',
    dirtyFields
  );

  // Valores finales con los campos derivados
  const finalInputValues = useMemo(() => ({
    ...inputValues,
    alturaBanco: finalAlturaBanco,
    tonelajePerforado: finalTonelajePerforado
  }), [inputValues, finalAlturaBanco, finalTonelajePerforado]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    markDirty(fieldName);
    setInputValues((prev: typeof defaultRequerimientoPerforadoraValues) => ({ 
      ...prev, 
      [fieldName]: parseFloat(e.target.value) || 0 
    }));
  };

  const handleResetField = (fieldName: string) => {
    clearDirty(fieldName);
    
    if (fieldName === 'alturaBanco' && mallaResults?.alturaBanco) {
      setInputValues((prev: typeof defaultRequerimientoPerforadoraValues) => ({ 
        ...prev, 
        alturaBanco: parseFloat(mallaResults.alturaBanco.toFixed(2)) 
      }));
    } else if (fieldName === 'tonelajePerforado' && mallaResults?.tonelajePerforado) {
      setInputValues((prev: typeof defaultRequerimientoPerforadoraValues) => ({ 
        ...prev, 
        tonelajePerforado: parseFloat(mallaResults.tonelajePerforado.toFixed(2)) 
      }));
    }
  };

  const resultados = useMemo(() => calcularRequerimientoPerforadora(finalInputValues), [finalInputValues]);

  // Sync produccionMina to context using custom hook
  const inputsForContext = useMemo(() => ({
    produccionMina: finalInputValues.produccionMina
  }), [finalInputValues.produccionMina]);

  useSyncToContext(inputsForContext, setRequerimientoPerforadoraInputs);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RequerimientoPerforadoraInputs 
          inputValues={finalInputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RequerimientoPerforadoraResults resultados={resultados} />}
          isAutoFilled={isClient && !!(mallaResults?.alturaBanco && mallaResults?.tonelajePerforado)}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
