"use client";
import { useState, useMemo, useEffect } from 'react';
import CostoPerforacionInputs from './CostoPerforacionInputs';
import CostoPerforacionResults from './CostoPerforacionResults';
import { calcularCostoPerforacion, defaultCostoPerforacionValues } from './costoPerforacionCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function CostoPerforacionPage() {
  const [inputValues, setInputValues] = useState(defaultCostoPerforacionValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());
  const { mallaResults, setCostoPerforacionResults } = useCalculations();

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.COSTO_PERFORACION_INPUTS);
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    // Cargar dirty fields
    const savedDirtyFields = loadDirtyFields(STORAGE_KEYS.COSTO_PERFORACION_DIRTY);
    setDirtyFields(savedDirtyFields);
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEYS.COSTO_PERFORACION_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  // Auto-actualizar solo los campos del contexto cuando cambian (si no han sido editados manualmente)
  useEffect(() => {
    if (isInitialized && mallaResults) {
      const updates: Partial<typeof inputValues> = {};
      
      if (mallaResults.tonelaje && !dirtyFields.has('tonelaje')) {
        updates.tonelaje = parseFloat(mallaResults.tonelaje.toFixed(2));
      }
      if (mallaResults.alturaBanco && !dirtyFields.has('alturaBanco')) {
        updates.alturaBanco = parseFloat(mallaResults.alturaBanco.toFixed(2));
      }
      
      if (Object.keys(updates).length > 0) {
        setInputValues(prev => ({ ...prev, ...updates }));
      }
    }
  }, [mallaResults?.tonelaje, mallaResults?.alturaBanco, isInitialized, dirtyFields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.COSTO_PERFORACION_DIRTY, newSet);
      return newSet;
    });
    setInputValues(prev => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.COSTO_PERFORACION_DIRTY, newSet);
      return newSet;
    });
    
    // Restaurar valor calculado
    if (fieldName === 'tonelaje' && mallaResults?.tonelaje) {
      setInputValues(prev => ({ ...prev, tonelaje: parseFloat(mallaResults.tonelaje.toFixed(2)) }));
    } else if (fieldName === 'alturaBanco' && mallaResults?.alturaBanco) {
      setInputValues(prev => ({ ...prev, alturaBanco: parseFloat(mallaResults.alturaBanco.toFixed(2)) }));
    }
  };

  const resultados = useMemo(() => calcularCostoPerforacion(inputValues), [inputValues]);

  // Guardar resultados en el context
  useEffect(() => {
    setCostoPerforacionResults(resultados);
  }, [resultados, setCostoPerforacionResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoPerforacionInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<CostoPerforacionResults resultados={resultados} />}
          isAutoFilled={!!(mallaResults?.tonelaje && mallaResults?.alturaBanco)}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
