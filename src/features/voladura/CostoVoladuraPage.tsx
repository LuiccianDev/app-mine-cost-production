"use client";

import { useEffect } from "react";
import CostoVoladuraInputs from "./CostoVoladuraInputs";
import CostoVoladuraResults from "./CostoVoladuraResults";
import { calculateCostoVoladura } from "./costoVoladuraCalculations";
import { useCostosVoladurasStore } from "@/src/stores/useMalla";
import { usePDFStore } from "@/src/stores/usePDF";

export default function CostoVoladuraPage() {

  /* Get values  */
  const {
    costoAnfo,
    costoDinamita,
    costoRetardoFanel,
    costoCordonDetonante,
    costoCamionAnfoCar,
    costoChispeo,
    costoManoDeObra,
    tonelajePerforado,
    pentacordEmpleado,
    tiempoCarguioAnfoCar,
    mechaRapidaEmpleada,
    numeroHombresCarguio,
    tiempoEmpleadoCarguio,
  } = useCostosVoladurasStore();

  /* Get resultt */
  const resultados = calculateCostoVoladura({
    costoAnfo,
    costoDinamita,
    costoRetardoFanel,
    costoCordonDetonante,
    costoCamionAnfoCar,
    costoChispeo,
    costoManoDeObra,
    tonelajePerforado,
    pentacordEmpleado,
    tiempoCarguioAnfoCar,
    mechaRapidaEmpleada,
    numeroHombresCarguio,
    tiempoEmpleadoCarguio,
  });

  /* guardar los resulatdo con Zustand*/

  const { setCostoVoladura } = usePDFStore();

  useEffect(() => {
    setCostoVoladura(resultados.costoVoladuraPorTonelada);
  }   , [resultados.costoVoladuraPorTonelada, setCostoVoladura]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoVoladuraInputs
          resultsComponent={<CostoVoladuraResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
