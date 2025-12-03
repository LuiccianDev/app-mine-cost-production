"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { MallaResultados } from '../scripts/mallaCalculations';
import { CostoPerforacionResultados } from '../scripts/costoPerforacionCalculations';
import { CostoVoladuraResultsData } from '../scripts/costoVoladuraCalculations';
import { LimpiezaResultados } from '../scripts/limpiezaCalculations';
import { CarguioResultados } from '../scripts/carguioCalculations';
import { TransporteResultados } from '../scripts/transporteCalculations';
import { RellenoCementadoResultados } from '../scripts/rellenoCementadoCalculations';
import { RellenoDetriticoResultados } from '../scripts/rellenoDetriticoCalculations';

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
  const [mallaResults, setMallaResults] = useState<MallaResultados | null>(null);
  const [costoPerforacionResults, setCostoPerforacionResults] = useState<CostoPerforacionResultados | null>(null);
  const [costoVoladuraResults, setCostoVoladuraResults] = useState<CostoVoladuraResultsData | null>(null);
  const [limpiezaResults, setLimpiezaResults] = useState<LimpiezaResultados | null>(null);
  const [carguioResults, setCarguioResults] = useState<CarguioResultados | null>(null);
  const [transporteResults, setTransporteResults] = useState<TransporteResultados | null>(null);
  const [rellenoCementadoResults, setRellenoCementadoResults] = useState<RellenoCementadoResultados | null>(null);
  const [rellenoDetriticoResults, setRellenoDetriticoResults] = useState<RellenoDetriticoResultados | null>(null);
  const [requerimientoPerforadoraInputs, setRequerimientoPerforadoraInputs] = useState<RequerimientoPerforadoraInputs | null>(null);
  const [carguioInputs, setCarguioInputs] = useState<CarguioInputs | null>(null);

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

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const savedMalla = localStorage.getItem('mallaResults');
    const savedCostoPerforacion = localStorage.getItem('costoPerforacionResults');
    const savedCostoVoladura = localStorage.getItem('costoVoladuraResults');
    const savedRequerimientoPerforadora = localStorage.getItem('requerimientoPerforadoraInputs');
    const savedCarguio = localStorage.getItem('carguioInputs');
    const savedLimpieza = localStorage.getItem('limpiezaResults');
    const savedCarguioResults = localStorage.getItem('carguioResults');
    const savedTransporte = localStorage.getItem('transporteResults');
    const savedRellenoCementado = localStorage.getItem('rellenoCementadoResults');
    const savedRellenoDetritico = localStorage.getItem('rellenoDetriticoResults');
    
    if (savedMalla) setMallaResults(JSON.parse(savedMalla));
    if (savedCostoPerforacion) setCostoPerforacionResults(JSON.parse(savedCostoPerforacion));
    if (savedCostoVoladura) setCostoVoladuraResults(JSON.parse(savedCostoVoladura));
    if (savedRequerimientoPerforadora) setRequerimientoPerforadoraInputs(JSON.parse(savedRequerimientoPerforadora));
    if (savedCarguio) setCarguioInputs(JSON.parse(savedCarguio));
    if (savedLimpieza) setLimpiezaResults(JSON.parse(savedLimpieza));
    if (savedCarguioResults) setCarguioResults(JSON.parse(savedCarguioResults));
    if (savedTransporte) setTransporteResults(JSON.parse(savedTransporte));
    if (savedRellenoCementado) setRellenoCementadoResults(JSON.parse(savedRellenoCementado));
    if (savedRellenoDetritico) setRellenoDetriticoResults(JSON.parse(savedRellenoDetritico));
  }, []);

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
