"use client";

import { useCarguioStore } from "@/src/stores/useMalla";
import CarguioInputs from "./CarguioInputs";
import CarguioResults from "./CarguioResults";
import { calcularCarguio } from "./carguioCalculations";

export default function CarguioPage() {
  const {
    produccionMina,
    ratioDM,
    produccionDesmonte,
    mineralMasDesmonte,
    capacidadCuchara,
    factorCuchara,
    densidadRotaMineral,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    costoHoraDeEquipo,
  } = useCarguioStore();

  const resultados = calcularCarguio({
    produccionMina,
    ratioDM,
    produccionDesmonte,
    mineralMasDesmonte,
    capacidadCuchara,
    factorCuchara,
    densidadRotaMineral,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    costoHoraDeEquipo,
  });

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CarguioInputs
          resultsComponent={<CarguioResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
