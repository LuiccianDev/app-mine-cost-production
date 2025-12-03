"use client";
import { useState, useMemo, useEffect } from 'react';
import RellenoDetriticoInputs from './RellenoDetriticoInputs';
import RellenoDetriticoResults from './RellenoDetriticoResults';
import { calcularRellenoDetritico, defaultRellenoDetriticoValues } from './rellenoDetriticoCalculations';
import { useCalculations } from '../../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../../lib/storageKeys';

export default function RellenoDetriticoPage() {
  const { requerimientoPerforadoraInputs, setRellenoDetriticoResults } = useCalculations();
  
  // Lazy initialization: cargar desde localStorage solo una vez
  const [inputValues, setInputValues] = useState(() => {
    if (typeof window === 'undefined') return defaultRellenoDetriticoValues;
    const savedInputs = localStorage.getItem(STORAGE_KEYS.RELLENO_DETRITICO_INPUTS);
    if (savedInputs) {
      return JSON.parse(savedInputs);
    }
    return defaultRellenoDetriticoValues;
  });

  const [dirtyFields, setDirtyFields] = useState<Set<string>>(() => {
    return loadDirtyFields(STORAGE_KEYS.RELLENO_DETRITICO_DIRTY);
  });

  const [showResults, setShowResults] = useState(false);

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
      localStorage.setItem(STORAGE_KEYS.RELLENO_DETRITICO_INPUTS, JSON.stringify(inputValues));
    }
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.RELLENO_DETRITICO_DIRTY, newSet);
      return newSet;
    });
    setInputValues((prev: typeof defaultRellenoDetriticoValues) => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.RELLENO_DETRITICO_DIRTY, newSet);
      return newSet;
    });
    
    if (fieldName === 'produccionMineral' && requerimientoPerforadoraInputs?.produccionMina) {
      setInputValues((prev: typeof defaultRellenoDetriticoValues) => ({ ...prev, produccionMineral: parseFloat(requerimientoPerforadoraInputs.produccionMina.toFixed(2)) }));
    }
  };

  const resultados = useMemo(() => calcularRellenoDetritico(finalInputValues), [finalInputValues]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setRellenoDetriticoResults(resultados);
  }, [resultados, setRellenoDetriticoResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoDetriticoInputs 
          inputValues={finalInputValues} 
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
