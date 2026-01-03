"use client";

import { useEffect } from "react";
import RellenoDetriticoInputs from "./RellenoDetriticoInputs";
import RellenoDetriticoResults from "./RellenoDetriticoResults";
import { calcularRellenoDetritico } from "./rellenoDetriticoCalculations";
import { useRellenoDetriticoStore } from "@/src/stores/useMalla";
import { usePDFStore } from "@/src/stores/usePDF";

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


    /* guardar los resulatdo con Zustand*/

  const {
    setCostoTransporteRD,
    setCostoMaterialRellenoRD,
    setCostoTotalRellenoRD,
  } = usePDFStore();


  useEffect(() => {
    setCostoTransporteRD(resultados.costoTransporte);
    setCostoMaterialRellenoRD(resultados.costoMaterialRelleno);
    setCostoTotalRellenoRD(resultados.costoTotalRelleno);
  }, [
    resultados.costoTransporte,
    resultados.costoMaterialRelleno,
    resultados.costoTotalRelleno,
    setCostoTransporteRD,
    setCostoMaterialRellenoRD,
    setCostoTotalRellenoRD,
  ]);

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
