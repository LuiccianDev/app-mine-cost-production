"use client";

import RellenoDetriticoInputs from "./RellenoDetriticoInputs";
import RellenoDetriticoResults from "./RellenoDetriticoResults";
import { calcularRellenoDetritico } from "./rellenoDetriticoCalculations";
import { useRellenoDetriticoStore } from "@/src/stores/useMalla";

export default function RellenoDetriticoPage() {
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
    costoTransporteDesmonte,
  } = useRellenoDetriticoStore();

  const resultados = calcularRellenoDetritico({
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
    costoTransporteDesmonte,
  });

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoDetriticoInputs
          resultsComponent={<RellenoDetriticoResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
