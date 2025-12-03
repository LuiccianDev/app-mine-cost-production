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
  const [mallaResults, setMallaResults] = useState<MallaResultados | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('mallaResults');
    return saved ? JSON.parse(saved) : null;
  });

  const [costoPerforacionResults, setCostoPerforacionResults] = useState<CostoPerforacionResultados | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('costoPerforacionResults');
    return saved ? JSON.parse(saved) : null;
  });

  const [costoVoladuraResults, setCostoVoladuraResults] = useState<CostoVoladuraResultsData | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('costoVoladuraResults');
    return saved ? JSON.parse(saved) : null;
  });

  const [limpiezaResults, setLimpiezaResults] = useState<LimpiezaResultados | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('limpiezaResults');
    return saved ? JSON.parse(saved) : null;
  });

  const [carguioResults, setCarguioResults] = useState<CarguioResultados | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('carguioResults');
    return saved ? JSON.parse(saved) : null;
  });

  const [transporteResults, setTransporteResults] = useState<TransporteResultados | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('transporteResults');
    return saved ? JSON.parse(saved) : null;
  });

  const [rellenoCementadoResults, setRellenoCementadoResults] = useState<RellenoCementadoResultados | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('rellenoCementadoResults');
    return saved ? JSON.parse(saved) : null;
  });

  const [rellenoDetriticoResults, setRellenoDetriticoResults] = useState<RellenoDetriticoResultados | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('rellenoDetriticoResults');
    return saved ? JSON.parse(saved) : null;
  });

  const [requerimientoPerforadoraInputs, setRequerimientoPerforadoraInputs] = useState<RequerimientoPerforadoraInputs | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('requerimientoPerforadoraInputs');
    return saved ? JSON.parse(saved) : null;
  });

  const [carguioInputs, setCarguioInputs] = useState<CarguioInputs | null>(() => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem('carguioInputs');
    return saved ? JSON.parse(saved) : null;
  });

  // Persistir en localStorage
  useEffect(() => {
    if (mallaResults) {
      localStorage.setItem('mallaResults', JSON.stringify(mallaResults));
    }
  }, [mallaResults]);

  useEffect(() => {
    if (costoPerforacionResults) {
      localStorage.setItem('costoPerforacionResults', JSON.stringify(costoPerforacionResults));
    }
  }, [costoPerforacionResults]);

  useEffect(() => {
    if (costoVoladuraResults) {
      localStorage.setItem('costoVoladuraResults', JSON.stringify(costoVoladuraResults));
    }
  }, [costoVoladuraResults]);

  useEffect(() => {
    if (requerimientoPerforadoraInputs) {
      localStorage.setItem('requerimientoPerforadoraInputs', JSON.stringify(requerimientoPerforadoraInputs));
    }
  }, [requerimientoPerforadoraInputs]);

  useEffect(() => {
    if (carguioInputs) {
      localStorage.setItem('carguioInputs', JSON.stringify(carguioInputs));
    }
  }, [carguioInputs]);

  useEffect(() => {
    if (limpiezaResults) {
      localStorage.setItem('limpiezaResults', JSON.stringify(limpiezaResults));
    }
  }, [limpiezaResults]);

  useEffect(() => {
    if (carguioResults) {
      localStorage.setItem('carguioResults', JSON.stringify(carguioResults));
    }
  }, [carguioResults]);

  useEffect(() => {
    if (transporteResults) {
      localStorage.setItem('transporteResults', JSON.stringify(transporteResults));
    }
  }, [transporteResults]);

  useEffect(() => {
    if (rellenoCementadoResults) {
      localStorage.setItem('rellenoCementadoResults', JSON.stringify(rellenoCementadoResults));
    }
  }, [rellenoCementadoResults]);

  useEffect(() => {
    if (rellenoDetriticoResults) {
      localStorage.setItem('rellenoDetriticoResults', JSON.stringify(rellenoDetriticoResults));
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
