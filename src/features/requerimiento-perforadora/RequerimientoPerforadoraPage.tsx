"use client";
import { useState, useMemo, useEffect } from 'react';
import RequerimientoPerforadoraInputs from './RequerimientoPerforadoraInputs';
import RequerimientoPerforadoraResults from './RequerimientoPerforadoraResults';
import { calcularRequerimientoPerforadora, defaultRequerimientoPerforadoraValues } from './requerimientoPerforadoraCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function RequerimientoPerforadoraPage() {
  const { mallaResults, setRequerimientoPerforadoraInputs } = useCalculations();
  
  // Lazy initialization: cargar desde localStorage solo una vez
  const [inputValues, setInputValues] = useState(() => {
    if (typeof window === 'undefined') return defaultRequerimientoPerforadoraValues;
    const savedInputs = localStorage.getItem(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_INPUTS);
    if (savedInputs) {
      return JSON.parse(savedInputs);
    }
    return defaultRequerimientoPerforadoraValues;
  });

  const [dirtyFields, setDirtyFields] = useState<Set<string>>(() => {
    return loadDirtyFields(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_DIRTY);
  });

  const [showResults, setShowResults] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Marcar como montado después de la hidratación
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calcular valores derivados del contexto (sin setState en effect)
  const derivedAlturaBanco = useMemo(() => {
    if (mallaResults?.alturaBanco && !dirtyFields.has('alturaBanco')) {
      return parseFloat(mallaResults.alturaBanco.toFixed(2));
    }
    return inputValues.alturaBanco;
  }, [mallaResults, dirtyFields, inputValues.alturaBanco]);

  const derivedTonelajePorTaladro = useMemo(() => {
    if (mallaResults?.tonelaje && !dirtyFields.has('tonelajePorTaladro')) {
      return parseFloat(mallaResults.tonelaje.toFixed(2));
    }
    return inputValues.tonelajePorTaladro;
  }, [mallaResults, dirtyFields, inputValues.tonelajePorTaladro]);

  // Valores finales con los campos derivados
  const finalInputValues = useMemo(() => ({
    ...inputValues,
    alturaBanco: derivedAlturaBanco,
    tonelajePorTaladro: derivedTonelajePorTaladro
  }), [inputValues, derivedAlturaBanco, derivedTonelajePorTaladro]);

  // Guardar inputs en localStorage cuando cambien
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_DIRTY, newSet);
      return newSet;
    });
    setInputValues((prev: typeof defaultRequerimientoPerforadoraValues) => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_DIRTY, newSet);
      return newSet;
    });
    
    if (fieldName === 'alturaBanco' && mallaResults?.alturaBanco) {
      setInputValues((prev: typeof defaultRequerimientoPerforadoraValues) => ({ ...prev, alturaBanco: parseFloat(mallaResults.alturaBanco.toFixed(2)) }));
    } else if (fieldName === 'tonelajePorTaladro' && mallaResults?.tonelaje) {
      setInputValues((prev: typeof defaultRequerimientoPerforadoraValues) => ({ ...prev, tonelajePorTaladro: parseFloat(mallaResults.tonelaje.toFixed(2)) }));
    }
  };

  const resultados = useMemo(() => calcularRequerimientoPerforadora(finalInputValues), [finalInputValues]);

  // Guardar produccionMina en el contexto
  useEffect(() => {
    setRequerimientoPerforadoraInputs({
      produccionMina: finalInputValues.produccionMina
    });
  }, [finalInputValues.produccionMina, setRequerimientoPerforadoraInputs]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RequerimientoPerforadoraInputs 
          inputValues={finalInputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RequerimientoPerforadoraResults resultados={resultados} />}
          isAutoFilled={isMounted && !!(mallaResults?.alturaBanco && mallaResults?.tonelaje)}
          dirtyFields={dirtyFields}
          onResetField={handleResetField}
        />
      </div>
    </div>
  );
}
