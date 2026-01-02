"use client";
import { useState, useMemo } from 'react';
import CostoPerforacionInputs from './CostoPerforacionInputs';
import CostoPerforacionResults from './CostoPerforacionResults';
import { calcularCostoPerforacion, defaultCostoPerforacionValues } from './costoPerforacionCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS } from '../../lib/storageKeys';
import { usePersistedState } from '../../lib/hooks/usePersistedState';
import { useDirtyFields } from '../../lib/hooks/useDirtyFields';
import { useDerivedValue } from '../../lib/hooks/useDerivedValue';
import { useSyncToContext } from '../../lib/hooks/useSyncToContext';
import { useClientOnly } from '../../lib/hooks/useClientOnly';

export default function CostoPerforacionPage() {
  const { mallaResults, setCostoPerforacionResults } = useCalculations();
  
  // Use custom hooks for state management
  const [inputValues, setInputValues] = usePersistedState(
    STORAGE_KEYS.COSTO_PERFORACION_INPUTS,
    defaultCostoPerforacionValues
  );

  const { dirtyFields, markDirty, clearDirty } = useDirtyFields(
    STORAGE_KEYS.COSTO_PERFORACION_DIRTY
  );

  const [showResults, setShowResults] = useState(false);
  const isClient = useClientOnly();

  // Calculate derived values using the custom hook
  const finalTonelaje = useDerivedValue(
    mallaResults?.tonelajePerforado 
      ? parseFloat(mallaResults.tonelajePerforado.toFixed(2))
      : null,
    inputValues.tonelajePerforado,
    'tonelajePerforado',
    dirtyFields
  );

  const finalAlturaBanco = useDerivedValue(
    mallaResults?.alturaBanco 
      ? parseFloat(mallaResults.alturaBanco.toFixed(2))
      : null,
    inputValues.alturaBanco,
    'alturaBanco',
    dirtyFields
  );

  // Valores finales con los campos derivados
  const finalInputValues = useMemo(() => ({
    ...inputValues,
    tonelajePerforado: finalTonelaje,  /* cahange obtener inputs  */
    alturaBanco: finalAlturaBanco
  }), [inputValues, finalTonelaje, finalAlturaBanco]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    markDirty(fieldName);
    setInputValues((prev: typeof defaultCostoPerforacionValues) => ({ 
      ...prev, 
      [fieldName]: parseFloat(e.target.value) || 0 
    }));
  };

  const handleResetField = (fieldName: string) => {
    clearDirty(fieldName);
    
    if (fieldName === 'tonelajePerforado' && mallaResults?.tonelajePerforado) {
      setInputValues((prev: typeof defaultCostoPerforacionValues) => ({ 
        ...prev, 
        tonelajePerforado: parseFloat(mallaResults.tonelajePerforado.toFixed(2)) 
      }));
    } else if (fieldName === 'alturaBanco' && mallaResults?.alturaBanco) {
      setInputValues((prev: typeof defaultCostoPerforacionValues) => ({ 
        ...prev, 
        alturaBanco: parseFloat(mallaResults.alturaBanco.toFixed(2)) 
      }));
    }
  };

  const resultados = useMemo(() => calcularCostoPerforacion(finalInputValues), [finalInputValues]);

  // Sync results to context using custom hook
  useSyncToContext(resultados, setCostoPerforacionResults);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoPerforacionInputs 
          inputValues={finalInputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<CostoPerforacionResults resultados={resultados} />}
          isAutoFilled={isClient && !!(mallaResults?.tonelajePerforado && mallaResults?.alturaBanco)}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
