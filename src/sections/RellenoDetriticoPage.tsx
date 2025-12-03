"use client";
import { useState, useMemo, useEffect } from 'react';
import RellenoDetriticoInputs from '../components/forms/RellenoDetriticoInputs';
import RellenoDetriticoResults from '../components/results/RellenoDetriticoResults';
import { calcularRellenoDetritico, defaultRellenoDetriticoValues } from '../scripts/rellenoDetriticoCalculations';
import { useCalculations } from '../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../constants/storageKeys';

export default function RellenoDetriticoPage() {
  const { requerimientoPerforadoraInputs, setRellenoDetriticoResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultRellenoDetriticoValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.RELLENO_DETRITICO_INPUTS);
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    const savedDirtyFields = loadDirtyFields(STORAGE_KEYS.RELLENO_DETRITICO_DIRTY);
    setDirtyFields(savedDirtyFields);
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEYS.RELLENO_DETRITICO_INPUTS, JSON.stringify(inputValues));
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
      saveDirtyFields(STORAGE_KEYS.RELLENO_DETRITICO_DIRTY, newSet);
      return newSet;
    });
    setInputValues(prev => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.RELLENO_DETRITICO_DIRTY, newSet);
      return newSet;
    });
    
    if (fieldName === 'produccionMineral' && requerimientoPerforadoraInputs?.produccionMina) {
      setInputValues(prev => ({ ...prev, produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2)) }));
    }
  };

  const resultados = useMemo(() => calcularRellenoDetritico(inputValues), [inputValues]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setRellenoDetriticoResults(resultados);
  }, [resultados, setRellenoDetriticoResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoDetriticoInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RellenoDetriticoResults resultados={resultados} />}
          isAutoFilled={!!requerimientoPerforadoraInputs?.produccionMina}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
