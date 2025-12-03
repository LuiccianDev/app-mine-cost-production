"use client";
import { useState, useMemo, useEffect } from 'react';
import RequerimientoPerforadoraInputs from './RequerimientoPerforadoraInputs';
import RequerimientoPerforadoraResults from './RequerimientoPerforadoraResults';
import { calcularRequerimientoPerforadora, defaultRequerimientoPerforadoraValues } from './requerimientoPerforadoraCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function RequerimientoPerforadoraPage() {
  const [inputValues, setInputValues] = useState(defaultRequerimientoPerforadoraValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());
  const { mallaResults, setRequerimientoPerforadoraInputs } = useCalculations();

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_INPUTS);
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    const savedDirtyFields = loadDirtyFields(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_DIRTY);
    setDirtyFields(savedDirtyFields);
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  // Auto-actualizar solo los campos del contexto cuando cambian (si no han sido editados)
  useEffect(() => {
    if (isInitialized && mallaResults) {
      const updates: Partial<typeof inputValues> = {};
      
      if (mallaResults.alturaBanco && !dirtyFields.has('alturaBanco')) {
        updates.alturaBanco = parseFloat(mallaResults.alturaBanco.toFixed(2));
      }
      if (mallaResults.tonelaje && !dirtyFields.has('tonelajePorTaladro')) {
        updates.tonelajePorTaladro = parseFloat(mallaResults.tonelaje.toFixed(2));
      }
      
      if (Object.keys(updates).length > 0) {
        setInputValues(prev => ({ ...prev, ...updates }));
      }
    }
  }, [mallaResults?.alturaBanco, mallaResults?.tonelaje, isInitialized, dirtyFields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_DIRTY, newSet);
      return newSet;
    });
    setInputValues(prev => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_DIRTY, newSet);
      return newSet;
    });
    
    if (fieldName === 'alturaBanco' && mallaResults?.alturaBanco) {
      setInputValues(prev => ({ ...prev, alturaBanco: parseFloat(mallaResults.alturaBanco.toFixed(2)) }));
    } else if (fieldName === 'tonelajePorTaladro' && mallaResults?.tonelaje) {
      setInputValues(prev => ({ ...prev, tonelajePorTaladro: parseFloat(mallaResults.tonelaje.toFixed(2)) }));
    }
  };

  const resultados = useMemo(() => calcularRequerimientoPerforadora(inputValues), [inputValues]);

  // Guardar produccionMina en el contexto
  useEffect(() => {
    setRequerimientoPerforadoraInputs({
      produccionMina: inputValues.produccionMina
    });
  }, [inputValues.produccionMina, setRequerimientoPerforadoraInputs]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RequerimientoPerforadoraInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RequerimientoPerforadoraResults resultados={resultados} />}
          isAutoFilled={!!(mallaResults?.alturaBanco && mallaResults?.tonelaje)}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
