"use client";

import { useEffect } from 'react';
import CostoPerforacionInputs from './CostoPerforacionInputs';
import CostoPerforacionResults from './CostoPerforacionResults';
import { calcularCostoPerforacion} from './costoPerforacionCalculations';
import { useCostosPerforacionStore } from '@/src/stores/useMalla';
import { usePDFStore } from "@/src/stores/usePDF";

export default function CostoPerforacionPage() {

  
  const {costoBrocaAccesorios,
          costoEquipoPerforacion,
          tiempoPerforacion,
          rendimientoBroca,
          tonelajePerforado,
          alturaBanco, //! se repite 
  } = useCostosPerforacionStore();

  const resultados = calcularCostoPerforacion({costoBrocaAccesorios,
          costoEquipoPerforacion,
          tiempoPerforacion,
          rendimientoBroca,
          tonelajePerforado,
          alturaBanco, //! se repite
        });

  /* guardar los resulatdo con Zustand*/ 
  const { 
    setCostoPerforacionMetro,
    setCostoPerforacionTon,
  } = usePDFStore();

  useEffect(() => {
    setCostoPerforacionMetro(resultados.costoPerforacionPorMetro);
    setCostoPerforacionTon(resultados.costoPerforacionPorTon);
  }, [
    resultados.costoPerforacionPorMetro,
    resultados.costoPerforacionPorTon,
    setCostoPerforacionMetro,
    setCostoPerforacionTon,
  ]);


  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoPerforacionInputs 
          resultsComponent={<CostoPerforacionResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
