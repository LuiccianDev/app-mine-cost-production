"use client";
import { useState, useMemo } from 'react';
import LimpiezaInputs from './LimpiezaInputs';
import LimpiezaResults from './LimpiezaResults';
import { calcularLimpieza, defaultLimpiezaValues } from './limpiezaCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS } from '../../lib/storageKeys';
import { usePersistedState } from '../../lib/hooks/usePersistedState';
import { useDirtyFields } from '../../lib/hooks/useDirtyFields';
import { useDerivedValue } from '../../lib/hooks/useDerivedValue';
import { useSyncToContext } from '../../lib/hooks/useSyncToContext';
import { useClientOnly } from '../../lib/hooks/useClientOnly';

export default function LimpiezaPage() {
  const { carguioInputs, requerimientoPerforadoraInputs, setLimpiezaResults } = useCalculations();
  
  // Use custom hooks for state management
  const [inputValues, setInputValues] = usePersistedState(
    STORAGE_KEYS.LIMPIEZA_INPUTS,
    defaultLimpiezaValues
  );

  const { dirtyFields, markDirty, clearDirty } = useDirtyFields(
    STORAGE_KEYS.LIMPIEZA_DIRTY
  );

  const [showResults, setShowResults] = useState(false);
  const isClient = useClientOnly();

  // Calculate derived values using the custom hook
  const finalDensidadRotaMaterial = useDerivedValue(
    carguioInputs?.densidadRotaMaterial 
      ? parseFloat(carguioInputs.densidadRotaMaterial.toFixed(2))
      : null,
    inputValues.densidadRotaMaterial,
    'densidadRotaMaterial',
    dirtyFields
  );

  const finalProduccionMineral = useDerivedValue(
    requerimientoPerforadoraInputs?.produccionMina 
      ? parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2))
      : null,
    inputValues.produccionMineral,
    'produccionMineral',
    dirtyFields
  );

  // Valores finales con los campos derivados
  const finalInputValues = useMemo(() => ({
    ...inputValues,
    densidadRotaMaterial: finalDensidadRotaMaterial,
    produccionMineral: finalProduccionMineral
  }), [inputValues, finalDensidadRotaMaterial, finalProduccionMineral]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    markDirty(fieldName);
    setInputValues((prev: typeof defaultLimpiezaValues) => ({ 
      ...prev, 
      [fieldName]: parseFloat(e.target.value) || 0 
    }));
  };

  const handleResetField = (fieldName: string) => {
    clearDirty(fieldName);
    
    if (fieldName === 'densidadRotaMaterial' && carguioInputs?.densidadRotaMaterial) {
      setInputValues((prev: typeof defaultLimpiezaValues) => ({ 
        ...prev, 
        densidadRotaMaterial: parseFloat(carguioInputs.densidadRotaMaterial.toFixed(2)) 
      }));
    } else if (fieldName === 'produccionMineral' && requerimientoPerforadoraInputs?.produccionMina) {
      setInputValues((prev: typeof defaultLimpiezaValues) => ({ 
        ...prev, 
        produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2)) 
      }));
    }
  };

  const resultados = useMemo(() => calcularLimpieza(finalInputValues), [finalInputValues]);

  // Sync results to context using custom hook
  useSyncToContext(resultados, setLimpiezaResults);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <LimpiezaInputs 
          inputValues={finalInputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<LimpiezaResults resultados={resultados} />}
          isAutoFilledDensidad={isClient && !!carguioInputs?.densidadRotaMaterial}
          isAutoFilledProduccion={isClient && !!requerimientoPerforadoraInputs?.produccionMina}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
