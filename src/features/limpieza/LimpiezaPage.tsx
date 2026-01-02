"use client";

import { useLimpiezaStore } from "@/src/stores/useMalla";
import LimpiezaInputs from "./LimpiezaInputs";
import LimpiezaResults from "./LimpiezaResults";
import { calcularLimpieza } from "./limpiezaCalculations";

export default function LimpiezaPage() {
  const {
    produccionMina,
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
  } = useLimpiezaStore();

  const resultados = calcularLimpieza({
    produccionMina,
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
        <LimpiezaInputs
          resultsComponent={<LimpiezaResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
