"use client";
import { useState, useMemo, useEffect } from 'react';
import CostoVoladuraInputs from './CostoVoladuraInputs';
import CostoVoladuraResults from './CostoVoladuraResults';
import { calculateCostoVoladura, defaultCostoVoladuraValues } from './costoVoladuraCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function CostoVoladuraPage() {
  const { mallaResults } = useCalculations();
  
  // Lazy initialization: cargar desde localStorage solo una vez
  const [inputValues, setInputValues] = useState(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.COSTO_VOLADURA_INPUTS);
    if (savedInputs) {
      return JSON.parse(savedInputs);
    }
    return defaultCostoVoladuraValues;
  });

  const [dirtyFields, setDirtyFields] = useState<Set<string>>(() => {
    return loadDirtyFields(STORAGE_KEYS.COSTO_VOLADURA_DIRTY);
  });

  const [showResults, setShowResults] = useState(false);

  // Calcular el valor derivado del contexto (sin setState en effect)
  const derivedTonelajePorTaladro = useMemo(() => {
    if (mallaResults?.tonelaje && !dirtyFields.has('tonelajePorTaladro')) {
      return parseFloat(mallaResults.tonelaje.toFixed(2));
    }
    return inputValues.tonelajePorTaladro;
  }, [mallaResults, dirtyFields, inputValues.tonelajePorTaladro]);

  // Valores finales con el campo derivado
  const finalInputValues = useMemo(() => ({
    ...inputValues,
    tonelajePorTaladro: derivedTonelajePorTaladro
  }), [inputValues, derivedTonelajePorTaladro]);

  // Guardar inputs en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COSTO_VOLADURA_INPUTS, JSON.stringify(finalInputValues));
  }, [finalInputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.COSTO_VOLADURA_DIRTY, newSet);
      return newSet;
    });
    setInputValues((prev: typeof defaultCostoVoladuraValues) => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.COSTO_VOLADURA_DIRTY, newSet);
      return newSet;
    });
    
    if (fieldName === 'tonelajePorTaladro' && mallaResults?.tonelaje) {
      setInputValues((prev: typeof defaultCostoVoladuraValues) => ({ ...prev, tonelajePorTaladro: parseFloat(mallaResults.tonelaje.toFixed(2)) }));
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
          isAutoFilled={!!mallaResults?.tonelaje}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
