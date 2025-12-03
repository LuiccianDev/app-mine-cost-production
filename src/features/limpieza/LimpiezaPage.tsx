"use client";
import { useState, useMemo, useEffect } from 'react';
import LimpiezaInputs from './LimpiezaInputs';
import LimpiezaResults from './LimpiezaResults';
import { calcularLimpieza, defaultLimpiezaValues } from './limpiezaCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function LimpiezaPage() {
  const { carguioInputs, requerimientoPerforadoraInputs, setLimpiezaResults } = useCalculations();
  
  // Lazy initialization: cargar desde localStorage solo una vez
  const [inputValues, setInputValues] = useState(() => {
    if (typeof window === 'undefined') return defaultLimpiezaValues;
    const savedInputs = localStorage.getItem(STORAGE_KEYS.LIMPIEZA_INPUTS);
    if (savedInputs) {
      return JSON.parse(savedInputs);
    }
    return defaultLimpiezaValues;
  });

  const [dirtyFields, setDirtyFields] = useState<Set<string>>(() => {
    return loadDirtyFields(STORAGE_KEYS.LIMPIEZA_DIRTY);
  });

  const [showResults, setShowResults] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Marcar como montado después de la hidratación
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calcular valores derivados del contexto (sin setState en effect)
  const derivedDensidadRotaMaterial = useMemo(() => {
    if (carguioInputs?.densidadRotaMaterial && !dirtyFields.has('densidadRotaMaterial')) {
      return parseFloat(carguioInputs.densidadRotaMaterial.toFixed(2));
    }
    return inputValues.densidadRotaMaterial;
  }, [carguioInputs, dirtyFields, inputValues.densidadRotaMaterial]);

  const derivedProduccionMineral = useMemo(() => {
    if (requerimientoPerforadoraInputs?.produccionMina && !dirtyFields.has('produccionMineral')) {
      return parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2));
    }
    return inputValues.produccionMineral;
  }, [requerimientoPerforadoraInputs, dirtyFields, inputValues.produccionMineral]);

  // Valores finales con los campos derivados
  const finalInputValues = useMemo(() => ({
    ...inputValues,
    densidadRotaMaterial: derivedDensidadRotaMaterial,
    produccionMineral: derivedProduccionMineral
  }), [inputValues, derivedDensidadRotaMaterial, derivedProduccionMineral]);

  // Guardar inputs en localStorage cuando cambien
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.LIMPIEZA_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.LIMPIEZA_DIRTY, newSet);
      return newSet;
    });
    setInputValues((prev: typeof defaultLimpiezaValues) => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.LIMPIEZA_DIRTY, newSet);
      return newSet;
    });
    
    if (fieldName === 'densidadRotaMaterial' && carguioInputs?.densidadRotaMaterial) {
      setInputValues((prev: typeof defaultLimpiezaValues) => ({ ...prev, densidadRotaMaterial: parseFloat(carguioInputs.densidadRotaMaterial.toFixed(2)) }));
    } else if (fieldName === 'produccionMineral' && requerimientoPerforadoraInputs?.produccionMina) {
      setInputValues((prev: typeof defaultLimpiezaValues) => ({ ...prev, produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2)) }));
    }
  };

  const resultados = useMemo(() => calcularLimpieza(finalInputValues), [finalInputValues]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setLimpiezaResults(resultados);
  }, [resultados, setLimpiezaResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <LimpiezaInputs 
          inputValues={finalInputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<LimpiezaResults resultados={resultados} />}
          isAutoFilledDensidad={isMounted && !!carguioInputs?.densidadRotaMaterial}
          isAutoFilledProduccion={isMounted && !!requerimientoPerforadoraInputs?.produccionMina}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
