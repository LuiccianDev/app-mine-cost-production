"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { MallaResultados } from '@/src/features/malla/mallaCalculations';
import { CostoPerforacionResultados } from '@/src/features/perforacion/costoPerforacionCalculations';
import { CostoVoladuraResultsData } from '@/src/features/voladura/costoVoladuraCalculations';
import { LimpiezaResultados } from '@/src/features/limpieza/limpiezaCalculations';
import { CarguioResultados } from '@/src/features/carguio/carguioCalculations';
import { TransporteResultados } from '@/src/features/transporte/transporteCalculations';
import { RellenoCementadoResultados } from '@/src/features/relleno/cementado/rellenoCementadoCalculations';
import { RellenoDetriticoResultados } from '@/src/features/relleno/detritico/rellenoDetriticoCalculations';
import { loadFromStorage, saveToStorage } from '@/src/lib/storage';
import { STORAGE_KEYS } from '@/src/lib/storageKeys';

type RequerimientoPerforadoraInputs = {
  produccionMina: number;
};

type CarguioInputs = {
  densidadRotaMaterial: number;
};

type CalculationContextType = {
  mallaResults: MallaResultados | null;
  setMallaResults: (results: MallaResultados) => void;
  costoPerforacionResults: CostoPerforacionResultados | null;
  setCostoPerforacionResults: (results: CostoPerforacionResultados) => void;
  costoVoladuraResults: CostoVoladuraResultsData | null;
  setCostoVoladuraResults: (results: CostoVoladuraResultsData) => void;
  limpiezaResults: LimpiezaResultados | null;
  setLimpiezaResults: (results: LimpiezaResultados) => void;
  carguioResults: CarguioResultados | null;
  setCarguioResults: (results: CarguioResultados) => void;
  transporteResults: TransporteResultados | null;
  setTransporteResults: (results: TransporteResultados) => void;
  rellenoCementadoResults: RellenoCementadoResultados | null;
  setRellenoCementadoResults: (results: RellenoCementadoResultados) => void;
  rellenoDetriticoResults: RellenoDetriticoResultados | null;
  setRellenoDetriticoResults: (results: RellenoDetriticoResultados) => void;
  requerimientoPerforadoraInputs: RequerimientoPerforadoraInputs | null;
  setRequerimientoPerforadoraInputs: (inputs: RequerimientoPerforadoraInputs) => void;
  carguioInputs: CarguioInputs | null;
  setCarguioInputs: (inputs: CarguioInputs) => void;
};

const CalculationContext = createContext<CalculationContextType | undefined>(undefined);

export function CalculationProvider({ children }: { children: ReactNode }) {
  // Initialize all state with lazy initialization using storage utilities
  const [mallaResults, setMallaResults] = useState<MallaResultados | null>(() => 
    loadFromStorage(STORAGE_KEYS.MALLA_RESULTS, null)
  );

  const [costoPerforacionResults, setCostoPerforacionResults] = useState<CostoPerforacionResultados | null>(() => 
    loadFromStorage(STORAGE_KEYS.COSTO_PERFORACION_RESULTS, null)
  );

  const [costoVoladuraResults, setCostoVoladuraResults] = useState<CostoVoladuraResultsData | null>(() => 
    loadFromStorage(STORAGE_KEYS.COSTO_VOLADURA_RESULTS, null)
  );

  const [limpiezaResults, setLimpiezaResults] = useState<LimpiezaResultados | null>(() => 
    loadFromStorage(STORAGE_KEYS.LIMPIEZA_RESULTS, null)
  );

  const [carguioResults, setCarguioResults] = useState<CarguioResultados | null>(() => 
    loadFromStorage(STORAGE_KEYS.CARGUIO_RESULTS, null)
  );

  const [transporteResults, setTransporteResults] = useState<TransporteResultados | null>(() => 
    loadFromStorage(STORAGE_KEYS.TRANSPORTE_RESULTS, null)
  );

  const [rellenoCementadoResults, setRellenoCementadoResults] = useState<RellenoCementadoResultados | null>(() => 
    loadFromStorage(STORAGE_KEYS.RELLENO_CEMENTADO_RESULTS, null)
  );

  const [rellenoDetriticoResults, setRellenoDetriticoResults] = useState<RellenoDetriticoResultados | null>(() => 
    loadFromStorage(STORAGE_KEYS.RELLENO_DETRITICO_RESULTS, null)
  );

  const [requerimientoPerforadoraInputs, setRequerimientoPerforadoraInputs] = useState<RequerimientoPerforadoraInputs | null>(() => 
    loadFromStorage(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_INPUTS_CONTEXT, null)
  );

  const [carguioInputs, setCarguioInputs] = useState<CarguioInputs | null>(() => 
    loadFromStorage(STORAGE_KEYS.CARGUIO_INPUTS_CONTEXT, null)
  );

  // Persist to localStorage using storage utilities
  // These effects run after render to avoid blocking the UI
  useEffect(() => {
    if (mallaResults) {
      saveToStorage(STORAGE_KEYS.MALLA_RESULTS, mallaResults);
    }
  }, [mallaResults]);

  useEffect(() => {
    if (costoPerforacionResults) {
      saveToStorage(STORAGE_KEYS.COSTO_PERFORACION_RESULTS, costoPerforacionResults);
    }
  }, [costoPerforacionResults]);

  useEffect(() => {
    if (costoVoladuraResults) {
      saveToStorage(STORAGE_KEYS.COSTO_VOLADURA_RESULTS, costoVoladuraResults);
    }
  }, [costoVoladuraResults]);

  useEffect(() => {
    if (requerimientoPerforadoraInputs) {
      saveToStorage(STORAGE_KEYS.REQUERIMIENTO_PERFORADORA_INPUTS_CONTEXT, requerimientoPerforadoraInputs);
    }
  }, [requerimientoPerforadoraInputs]);

  useEffect(() => {
    if (carguioInputs) {
      saveToStorage(STORAGE_KEYS.CARGUIO_INPUTS_CONTEXT, carguioInputs);
    }
  }, [carguioInputs]);

  useEffect(() => {
    if (limpiezaResults) {
      saveToStorage(STORAGE_KEYS.LIMPIEZA_RESULTS, limpiezaResults);
    }
  }, [limpiezaResults]);

  useEffect(() => {
    if (carguioResults) {
      saveToStorage(STORAGE_KEYS.CARGUIO_RESULTS, carguioResults);
    }
  }, [carguioResults]);

  useEffect(() => {
    if (transporteResults) {
      saveToStorage(STORAGE_KEYS.TRANSPORTE_RESULTS, transporteResults);
    }
  }, [transporteResults]);

  useEffect(() => {
    if (rellenoCementadoResults) {
      saveToStorage(STORAGE_KEYS.RELLENO_CEMENTADO_RESULTS, rellenoCementadoResults);
    }
  }, [rellenoCementadoResults]);

  useEffect(() => {
    if (rellenoDetriticoResults) {
      saveToStorage(STORAGE_KEYS.RELLENO_DETRITICO_RESULTS, rellenoDetriticoResults);
    }
  }, [rellenoDetriticoResults]);

  return (
    <CalculationContext.Provider value={{
      mallaResults,
      setMallaResults,
      costoPerforacionResults,
      setCostoPerforacionResults,
      costoVoladuraResults,
      setCostoVoladuraResults,
      limpiezaResults,
      setLimpiezaResults,
      carguioResults,
      setCarguioResults,
      transporteResults,
      setTransporteResults,
      rellenoCementadoResults,
      setRellenoCementadoResults,
      rellenoDetriticoResults,
      setRellenoDetriticoResults,
      requerimientoPerforadoraInputs,
      setRequerimientoPerforadoraInputs,
      carguioInputs,
      setCarguioInputs,
    }}>
      {children}
    </CalculationContext.Provider>
  );
}

export function useCalculations() {
  const context = useContext(CalculationContext);
  if (!context) {
    throw new Error('useCalculations debe usarse dentro de CalculationProvider');
  }
  return context;
}
