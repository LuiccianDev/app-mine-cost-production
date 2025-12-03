"use client";
import { useState, useMemo, useEffect } from 'react';
import CostoVoladuraInputs from './CostoVoladuraInputs';
import CostoVoladuraResults from './CostoVoladuraResults';
import { calculateCostoVoladura, defaultCostoVoladuraValues } from './costoVoladuraCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function CostoVoladuraPage() {
  const { mallaResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultCostoVoladuraValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.COSTO_VOLADURA_INPUTS);
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    const savedDirtyFields = loadDirtyFields(STORAGE_KEYS.COSTO_VOLADURA_DIRTY);
    setDirtyFields(savedDirtyFields);
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEYS.COSTO_VOLADURA_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  // Auto-actualizar solo tonelajePorTaladro cuando cambia en el contexto (si no ha sido editado)
  useEffect(() => {
    if (isInitialized && mallaResults?.tonelaje && !dirtyFields.has('tonelajePorTaladro')) {
      setInputValues(prev => ({
        ...prev,
        tonelajePorTaladro: parseFloat(mallaResults.tonelaje.toFixed(2))
      }));
    }
  }, [mallaResults?.tonelaje, isInitialized, dirtyFields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.COSTO_VOLADURA_DIRTY, newSet);
      return newSet;
    });
    setInputValues(prev => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.COSTO_VOLADURA_DIRTY, newSet);
      return newSet;
    });
    
    if (fieldName === 'tonelajePorTaladro' && mallaResults?.tonelaje) {
      setInputValues(prev => ({ ...prev, tonelajePorTaladro: parseFloat(mallaResults.tonelaje.toFixed(2)) }));
    }
  };

  const resultados = useMemo(() => calculateCostoVoladura(inputValues), [inputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoVoladuraInputs 
          inputValues={inputValues} 
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
