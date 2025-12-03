"use client";
import { useState, useMemo, useEffect } from 'react';
import LimpiezaInputs from './LimpiezaInputs';
import LimpiezaResults from './LimpiezaResults';
import { calcularLimpieza, defaultLimpiezaValues } from './limpiezaCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function LimpiezaPage() {
  const { carguioInputs, requerimientoPerforadoraInputs, setLimpiezaResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultLimpiezaValues);
  const [showResults, setShowResults] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(new Set());

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.LIMPIEZA_INPUTS);
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
    const savedDirtyFields = loadDirtyFields(STORAGE_KEYS.LIMPIEZA_DIRTY);
    setDirtyFields(savedDirtyFields);
    setIsInitialized(true);
  }, []);

  // Guardar inputs en localStorage cuando cambien (solo después de inicializar)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEYS.LIMPIEZA_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues, isInitialized]);

  // Auto-actualizar campos del contexto (CONSOLIDADO - un solo useEffect)
  useEffect(() => {
    if (isInitialized) {
      const updates: Partial<typeof inputValues> = {};
      
      if (carguioInputs?.densidadRotaMaterial && !dirtyFields.has('densidadRotaMaterial')) {
        updates.densidadRotaMaterial = parseFloat(carguioInputs.densidadRotaMaterial.toFixed(2));
      }
      if (requerimientoPerforadoraInputs?.produccionMina && !dirtyFields.has('produccionMineral')) {
        updates.produccionMineral = parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2));
      }
      
      if (Object.keys(updates).length > 0) {
        setInputValues(prev => ({ ...prev, ...updates }));
      }
    }
  }, [carguioInputs?.densidadRotaMaterial, requerimientoPerforadoraInputs?.produccionMina, isInitialized, dirtyFields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.LIMPIEZA_DIRTY, newSet);
      return newSet;
    });
    setInputValues(prev => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields(prev => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.LIMPIEZA_DIRTY, newSet);
      return newSet;
    });
    
    if (fieldName === 'densidadRotaMaterial' && carguioInputs?.densidadRotaMaterial) {
      setInputValues(prev => ({ ...prev, densidadRotaMaterial: parseFloat(carguioInputs.densidadRotaMaterial.toFixed(2)) }));
    } else if (fieldName === 'produccionMineral' && requerimientoPerforadoraInputs?.produccionMina) {
      setInputValues(prev => ({ ...prev, produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2)) }));
    }
  };

  const resultados = useMemo(() => calcularLimpieza(inputValues), [inputValues]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setLimpiezaResults(resultados);
  }, [resultados, setLimpiezaResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <LimpiezaInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<LimpiezaResults resultados={resultados} />}
          isAutoFilledDensidad={!!carguioInputs?.densidadRotaMaterial}
          isAutoFilledProduccion={!!requerimientoPerforadoraInputs?.produccionMina}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
