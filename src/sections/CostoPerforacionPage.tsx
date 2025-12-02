"use client";
import React, { useState, useMemo } from "react";
import CostoPerforacionInputs from "../components/forms/CostoPerforacionInputs";
import CostoPerforacionResults from "../components/results/CostoPerforacionResults";

import { calcularCostoPerforacion } from "../scripts/costoPerforacionCalculations";

const defaultValues = {
  costoBrocaAccesorios: "215.22",
  costoEquipoPerforacion: "12.50",
  tiempoPerforacion: "80.00",
  rendimientoBroca: "762.00",
  tonelaje: "122.45",
  alturaBanco: "9.91",
};

export default function CostoPerforacionPage() {
  const [inputValues, setInputValues] = useState(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCostoBrocaCalculado = (costo: number) => {
    setInputValues((prev) => ({
      ...prev,
      costoBrocaAccesorios: costo.toFixed(2)
    }));
  };

  const resultados = useMemo(() => {
    const numericValues = {
      costoBrocaAccesorios: parseFloat(inputValues.costoBrocaAccesorios) || 0,
      costoEquipoPerforacion: parseFloat(inputValues.costoEquipoPerforacion) || 0,
      tiempoPerforacion: parseFloat(inputValues.tiempoPerforacion) || 0,
      rendimientoBroca: parseFloat(inputValues.rendimientoBroca) || 0,
      tonelaje: parseFloat(inputValues.tonelaje) || 0,
      alturaBanco: parseFloat(inputValues.alturaBanco) || 0,
    };

    return calcularCostoPerforacion(numericValues);
  }, [inputValues]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <CostoPerforacionInputs inputValues={inputValues} onChange={handleChange} />
      </div>
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <CostoPerforacionResults resultados={resultados} />
      </div>

    </div>

  );
}
