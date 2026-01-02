"use client";

import { useRequerimientoPerforadoraStore } from "@/src/stores/useMalla";
import RequerimientoPerforadoraInputs from "./RequerimientoPerforadoraInputs";
import RequerimientoPerforadoraResults from "./RequerimientoPerforadoraResults";
import { calcularRequerimientoPerforadora } from "./requerimientoPerforadoraCalculations";

export default function RequerimientoPerforadoraPage() {
  const {
    produccionMina,
    alturaBanco,
    longuitudTaladro,
    tonelajePerforado,
    rendimientoBroca,
    tiempoPerforacion,
    horasProgramadas,
    horasTrabajadas,
    eficienciaPerforadora,
    produccionTPM,
    diasOperacion,
    produccionTPD,
  } = useRequerimientoPerforadoraStore();

  const resultados = calcularRequerimientoPerforadora({
    produccionMina,
    alturaBanco,
    longuitudTaladro,
    tonelajePerforado,
    rendimientoBroca,
    tiempoPerforacion,
    horasProgramadas,
    horasTrabajadas,
    eficienciaPerforadora,
    produccionTPM,
    diasOperacion,
    produccionTPD,
  });

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RequerimientoPerforadoraInputs
          resultsComponent={
            <RequerimientoPerforadoraResults resultados={resultados} />
          }
        />
      </div>
    </div>
  );
}
