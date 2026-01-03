"use client";

import { useLimpiezaStore } from "@/src/stores/useMalla";
import LimpiezaInputs from "./LimpiezaInputs";
import LimpiezaResults from "./LimpiezaResults";
import { calcularLimpieza } from "./limpiezaCalculations";
import { usePDFStore } from "@/src/stores/usePDF";
import { useEffect } from "react";

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

  /* guardar los resulatdo con Zustand*/

  const { setRequerimientoScoops, setCostoLimpieza , setRequerimientoScoopsLimpieza} = usePDFStore();

  useEffect(() => {
    setRequerimientoScoops(resultados.requerimientoScoops);
    setCostoLimpieza(resultados.costoLimpieza);
    setRequerimientoScoopsLimpieza(resultados.requerimientoScoops); // Section two Requerimiento Equipos
  }, [
    resultados.requerimientoScoops,
    resultados.costoLimpieza,
    setRequerimientoScoops,
    setCostoLimpieza,
    setRequerimientoScoopsLimpieza,
  ]);

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
