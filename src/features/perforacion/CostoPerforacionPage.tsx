"use client";

import CostoPerforacionInputs from './CostoPerforacionInputs';
import CostoPerforacionResults from './CostoPerforacionResults';
import { calcularCostoPerforacion} from './costoPerforacionCalculations';
import { useCostosPerforacionStore } from '@/src/stores/useMalla';

export default function CostoPerforacionPage() {

  
  const {costoBrocaAccesorios,
          costoEquipoPerforacion,
          tiempoPerforacion,
          rendimientoBroca,
          tonelajePerforado,
          alturaBanco,
  } = useCostosPerforacionStore();

  const resultados = calcularCostoPerforacion({costoBrocaAccesorios,
          costoEquipoPerforacion,
          tiempoPerforacion,
          rendimientoBroca,
          tonelajePerforado,
          alturaBanco,});

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
