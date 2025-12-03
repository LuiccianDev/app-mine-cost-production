"use client";
import { useState, useMemo, useEffect } from 'react';
import CarguioInputs from './CarguioInputs';
import CarguioResults from './CarguioResults';
import { calcularCarguio, defaultCarguioValues } from './carguioCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function CarguioPage() {
  const { requerimientoPerforadoraInputs, setCarguioInputs, setCarguioResults } = useCalculations();
  
  // Lazy initialization: cargar desde localStorage solo una vez
  const [inputValues, setInputValues] = useState(() => {
    if (typeof window === 'undefined') return defaultCarguioValues;
    const savedInputs = localStorage.getItem(STORAGE_KEYS.CARGUIO_INPUTS);
    if (savedInputs) {
      return JSON.parse(savedInputs);
    }
    return defaultCarguioValues;
  });

  const [dirtyFields, setDirtyFields] = useState<Set<string>>(() => {
    return loadDirtyFields(STORAGE_KEYS.CARGUIO_DIRTY);
  });

  const [showResults, setShowResults] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Marcar como montado después de la hidratación
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calcular el valor derivado del contexto (sin setState en effect)
  const derivedProduccionMineral = useMemo(() => {
    if (requerimientoPerforadoraInputs?.produccionMina && !dirtyFields.has('produccionMineral')) {
      return parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2));
    }
    return inputValues.produccionMineral;
  }, [requerimientoPerforadoraInputs, dirtyFields, inputValues.produccionMineral]);

  // Valores finales con el campo derivado
  const finalInputValues = useMemo(() => ({
    ...inputValues,
    produccionMineral: derivedProduccionMineral
  }), [inputValues, derivedProduccionMineral]);

  // Guardar inputs en localStorage cuando cambien
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.CARGUIO_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.CARGUIO_DIRTY, newSet);
      return newSet;
    });
    setInputValues((prev: typeof defaultCarguioValues) => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.CARGUIO_DIRTY, newSet);
      return newSet;
    });
    
    if (fieldName === 'produccionMineral' && requerimientoPerforadoraInputs?.produccionMina) {
      setInputValues((prev: typeof defaultCarguioValues) => ({ 
        ...prev, 
        produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2)) 
      }));
    }
  };

  const resultados = useMemo(() => calcularCarguio(finalInputValues), [finalInputValues]);

  // Guardar densidadRotaMaterial en el contexto
  useEffect(() => {
    setCarguioInputs({
      densidadRotaMaterial: finalInputValues.densidadRotaMaterial
    });
  }, [finalInputValues.densidadRotaMaterial, setCarguioInputs]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setCarguioResults(resultados);
  }, [resultados, setCarguioResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CarguioInputs 
          inputValues={finalInputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<CarguioResults resultados={resultados} />}
          isAutoFilled={isMounted && !!requerimientoPerforadoraInputs?.produccionMina}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
