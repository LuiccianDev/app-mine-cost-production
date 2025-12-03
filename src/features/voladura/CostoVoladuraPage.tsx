"use client";
import { useState, useMemo } from 'react';
import CostoVoladuraInputs from './CostoVoladuraInputs';
import CostoVoladuraResults from './CostoVoladuraResults';
import { calculateCostoVoladura, defaultCostoVoladuraValues } from './costoVoladuraCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS } from '../../lib/storageKeys';
import { usePersistedState } from '../../lib/hooks/usePersistedState';
import { useDirtyFields } from '../../lib/hooks/useDirtyFields';
import { useDerivedValue } from '../../lib/hooks/useDerivedValue';
import { useClientOnly } from '../../lib/hooks/useClientOnly';

export default function CostoVoladuraPage() {
  const { mallaResults } = useCalculations();
  
  // Use custom hooks for state management
  const [inputValues, setInputValues] = usePersistedState(
    STORAGE_KEYS.COSTO_VOLADURA_INPUTS,
    defaultCostoVoladuraValues
  );

  const { dirtyFields, markDirty, clearDirty } = useDirtyFields(
    STORAGE_KEYS.COSTO_VOLADURA_DIRTY
  );

  const [showResults, setShowResults] = useState(false);
  const isClient = useClientOnly();

  // Calculate derived value using the custom hook
  const finalTonelajePorTaladro = useDerivedValue(
    mallaResults?.tonelaje 
      ? parseFloat(mallaResults.tonelaje.toFixed(2))
      : null,
    inputValues.tonelajePorTaladro,
    'tonelajePorTaladro',
    dirtyFields
  );

  // Valores finales con el campo derivado
  const finalInputValues = useMemo(() => ({
    ...inputValues,
    tonelajePorTaladro: finalTonelajePorTaladro
  }), [inputValues, finalTonelajePorTaladro]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    markDirty(fieldName);
    setInputValues((prev: typeof defaultCostoVoladuraValues) => ({ 
      ...prev, 
      [fieldName]: parseFloat(e.target.value) || 0 
    }));
  };

  const handleResetField = (fieldName: string) => {
    clearDirty(fieldName);
    
    if (fieldName === 'tonelajePorTaladro' && mallaResults?.tonelaje) {
      setInputValues((prev: typeof defaultCostoVoladuraValues) => ({ 
        ...prev, 
        tonelajePorTaladro: parseFloat(mallaResults.tonelaje.toFixed(2)) 
      }));
    }
  };

  const resultados = useMemo(() => calculateCostoVoladura(finalInputValues), [finalInputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoVoladuraInputs 
          inputValues={finalInputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<CostoVoladuraResults resultados={resultados} />}
          isAutoFilled={isClient && !!mallaResults?.tonelaje}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
