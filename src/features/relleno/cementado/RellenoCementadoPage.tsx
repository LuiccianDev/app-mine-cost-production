"use client";

import RellenoCementadoInputs from "./RellenoCementadoInputs";
import RellenoCementadoResults from "./RellenoCementadoResults";
import { calcularRellenoCementado } from "./rellenoCementadoCalculations";
import { useRellenoCementadoStore } from "@/src/stores/useMalla";

export default function RellenoCementadoPage() {
  const {
    produccionMineral,
    produccionRelleno,
    capacidadCuchara,
    factorCuchara,
    densidadRotaMaterialRelleno,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    costoHoraEquipo,
    densidadMineral,
    costoPreparacionAgregados,
    costoPreparacionPlantaConcreto,
    costoTransporteRelaveChura,
    costoCemento,
  } = useRellenoCementadoStore();

  const resultados = calcularRellenoCementado({
    produccionMineral,
    produccionRelleno,
    capacidadCuchara,
    factorCuchara,
    densidadRotaMaterialRelleno,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    costoHoraEquipo,
    densidadMineral,
    costoPreparacionAgregados,
    costoPreparacionPlantaConcreto,
    costoTransporteRelaveChura,
    costoCemento,
  });

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoCementadoInputs
          resultsComponent={<RellenoCementadoResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
