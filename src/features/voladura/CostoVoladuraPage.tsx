"use client";

import CostoVoladuraInputs from "./CostoVoladuraInputs";
import CostoVoladuraResults from "./CostoVoladuraResults";
import {calculateCostoVoladura,} from "./costoVoladuraCalculations";
import { useCostosVoladurasStore } from "@/src/stores/useMalla";


export default function CostoVoladuraPage() {
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
