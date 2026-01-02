"use client";

import MallaForm from "./MallaInputs";
import MallaResultados from "./MallaResults";
import { calcularMalla} from "./mallaCalculations";
import { useMallaStore } from "@/src/stores/useMalla";

export default function MallaSection() {

  const {
    alturaBanco,
    densidadMaterial,
    factorPotencia,
    diametroTaladro,
    densidadAnfo,
  } = useMallaStore();

  const resultados = calcularMalla({
    alturaBanco,
    densidadMaterial,
    factorPotencia,
    diametroTaladro,
    densidadAnfo,
  });


  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <MallaForm
          resultsComponent={<MallaResultados resultados={resultados} />}
        />
      </div>
    </div>
  );
}
