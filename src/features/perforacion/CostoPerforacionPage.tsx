"use client";
import { useState, useMemo, useEffect } from 'react';
import CostoPerforacionInputs from './CostoPerforacionInputs';
import CostoPerforacionResults from './CostoPerforacionResults';
import { calcularCostoPerforacion, defaultCostoPerforacionValues } from './costoPerforacionCalculations';
import { useCalculations } from '../../context/CalculationContext';
import { STORAGE_KEYS, loadDirtyFields, saveDirtyFields } from '../../lib/storageKeys';

export default function CostoPerforacionPage() {
  const { mallaResults, setCostoPerforacionResults } = useCalculations();
  
  // Lazy initialization: cargar desde localStorage solo una vez
  const [inputValues, setInputValues] = useState(() => {
    const savedInputs = localStorage.getItem(STORAGE_KEYS.COSTO_PERFORACION_INPUTS);
    if (savedInputs) {
      return JSON.parse(savedInputs);
    }
    return defaultCostoPerforacionValues;
  });

  const [dirtyFields, setDirtyFields] = useState<Set<string>>(() => {
    return loadDirtyFields(STORAGE_KEYS.COSTO_PERFORACION_DIRTY);
  });

  const [showResults, setShowResults] = useState(false);

  // Calcular valores derivados del contexto (sin setState en effect)
  const derivedTonelaje = useMemo(() => {
    if (mallaResults?.tonelaje && !dirtyFields.has('tonelaje')) {
      return parseFloat(mallaResults.tonelaje.toFixed(2));
    }
    return inputValues.tonelaje;
  }, [mallaResults, dirtyFields, inputValues.tonelaje]);

  const derivedAlturaBanco = useMemo(() => {
    if (mallaResults?.alturaBanco && !dirtyFields.has('alturaBanco')) {
      return parseFloat(mallaResults.alturaBanco.toFixed(2));
    }
    return inputValues.alturaBanco;
  }, [mallaResults, dirtyFields, inputValues.alturaBanco]);

  // Valores finales con los campos derivados
  const finalInputValues = useMemo(() => ({
    ...inputValues,
    tonelaje: derivedTonelaje,
    alturaBanco: derivedAlturaBanco
  }), [inputValues, derivedTonelaje, derivedAlturaBanco]);

  // Guardar inputs en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.COSTO_PERFORACION_INPUTS, JSON.stringify(finalInputValues));
  }, [finalInputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.add(fieldName);
      saveDirtyFields(STORAGE_KEYS.COSTO_PERFORACION_DIRTY, newSet);
      return newSet;
    });
    setInputValues((prev: typeof defaultCostoPerforacionValues) => ({ ...prev, [fieldName]: parseFloat(e.target.value) || 0 }));
  };

  const handleResetField = (fieldName: string) => {
    setDirtyFields((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      saveDirtyFields(STORAGE_KEYS.COSTO_PERFORACION_DIRTY, newSet);
      return newSet;
    });
    
    // Restaurar valor calculado
    if (fieldName === 'tonelaje' && mallaResults?.tonelaje) {
      setInputValues((prev: typeof defaultCostoPerforacionValues) => ({ ...prev, tonelaje: parseFloat(mallaResults.tonelaje.toFixed(2)) }));
    } else if (fieldName === 'alturaBanco' && mallaResults?.alturaBanco) {
      setInputValues((prev: typeof defaultCostoPerforacionValues) => ({ ...prev, alturaBanco: parseFloat(mallaResults.alturaBanco.toFixed(2)) }));
    }
  };

  const resultados = useMemo(() => calcularCostoPerforacion(finalInputValues), [finalInputValues]);

  // Guardar resultados en el context
  useEffect(() => {
    setCostoPerforacionResults(resultados);
  }, [resultados, setCostoPerforacionResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoPerforacionInputs 
          inputValues={finalInputValues} 
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
