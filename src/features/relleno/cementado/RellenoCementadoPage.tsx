"use client";

import { useEffect } from "react";
import RellenoCementadoInputs from "./RellenoCementadoInputs";
import RellenoCementadoResults from "./RellenoCementadoResults";
import { calcularRellenoCementado } from "./rellenoCementadoCalculations";
import { useRellenoCementadoStore } from "@/src/stores/useMalla";
import { usePDFStore } from "@/src/stores/usePDF";

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

    /* guardar los resulatdo con Zustand*/

  const {
    setCostoTransporteRC,
    setCostoMaterialRelleno,
    setCostoTotalRelleno35,
    setCostoTotalRelleno30,
  } = usePDFStore();

  useEffect(() => {
    setCostoTransporteRC(resultados.costoTransporte);
    setCostoMaterialRelleno(resultados.costoMaterialRelleno35);
    setCostoTotalRelleno35(resultados.costoTotalRelleno35);
    setCostoTotalRelleno30(resultados.costoTotalRelleno30);
  }, [
    resultados.costoTransporte,
    resultados.costoMaterialRelleno35,
    resultados.costoTotalRelleno35,
    resultados.costoTotalRelleno30,
    setCostoTransporteRC,
    setCostoMaterialRelleno,
    setCostoTotalRelleno35,
    setCostoTotalRelleno30,
  ]);


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
