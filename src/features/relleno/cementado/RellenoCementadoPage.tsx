"use client";
import { useState, useMemo, useEffect } from 'react';
import RellenoCementadoInputs from './RellenoCementadoInputs';
import RellenoCementadoResults from './RellenoCementadoResults';
import { calcularRellenoCementado, defaultRellenoCementadoValues } from './rellenoCementadoCalculations';
import { useCalculations } from '../../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../../lib/storageKeys';

export default function RellenoCementadoPage() {
  const { requerimientoPerforadoraInputs, setRellenoCementadoResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultRellenoCementadoValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.RELLENO_CEMENTADO_INPUTS);
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    const savedDirtyFields = loadDirtyFields(STORAGE_KEYS.RELLENO_CEMENTADO_DIRTY);
    setDirtyFields(savedDirtyFields);
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEYS.RELLENO_CEMENTADO_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  // Auto-actualizar solo produccionMineral cuando cambia en el contexto (si no ha sido editado)
  useEffect(() => {
    if (isInitialized && requerimientoPerforadoraInputs?.produccionMina && !dirtyFields.has('produccionMineral')) {
      setInputValues(prev => ({
        ...prev,
        produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2))
      }));
    }
  }, [requerimientoPerforadoraInputs?.produccionMina, isInitialized, dirtyFields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.RELLENO_CEMENTADO_DIRTY, newSet);
      return newSet;
    });
    setInputValues(prev => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.RELLENO_CEMENTADO_DIRTY, newSet);
      return newSet;
    });
    
    if (fieldName === 'produccionMineral' && requerimientoPerforadoraInputs?.produccionMina) {
      setInputValues(prev => ({ ...prev, produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2)) }));
    }
  };

  const resultados = useMemo(() => calcularRellenoCementado(inputValues), [inputValues]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setRellenoCementadoResults(resultados);
  }, [resultados, setRellenoCementadoResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoCementadoInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RellenoCementadoResults resultados={resultados} />}
          isAutoFilled={!!requerimientoPerforadoraInputs?.produccionMina}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
