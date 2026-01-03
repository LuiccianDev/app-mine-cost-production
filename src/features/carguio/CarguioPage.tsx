"use client";

import { useCarguioStore } from "@/src/stores/useMalla";
import CarguioInputs from "./CarguioInputs";
import CarguioResults from "./CarguioResults";
import { calcularCarguio } from "./carguioCalculations";
import { usePDFStore } from "@/src/stores/usePDF";
import { useEffect } from "react";

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


  /* guardar los resulatdo con Zustand*/

  const { setRequerimientoScoop, setCostoCarguio , setRequerimientoScoopsCarguio} = usePDFStore();

  useEffect(() => {
    setRequerimientoScoop(resultados.requerimientoScoop);
    setCostoCarguio(resultados.costoCarguio);
    setRequerimientoScoopsCarguio(resultados.requerimientoScoop); // Section two Requerimiento Equipos
  }, [
    resultados.requerimientoScoop,
    resultados.costoCarguio,
    setRequerimientoScoop,
    setCostoCarguio,
    setRequerimientoScoopsCarguio,
  ]);

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
