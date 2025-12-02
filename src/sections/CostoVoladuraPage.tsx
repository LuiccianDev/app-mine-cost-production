"use client";
import React, { useState, useMemo } from "react";
import CostoVoladuraInputs, { CostoVoladuraInputsData } from "../components/forms/CostoVoladuraInputs";
import CostoVoladuraResults from "../components/results/CostoVoladuraResults";
import { calculateCostoVoladura } from "../scripts/costoVoladuraCalculations";

const defaultValues: CostoVoladuraInputsData = {
  costoAnfo: 0.21,
  costoDinamita: 0.13,
  costoRetardos: 1.03,
  costoCordonDetonante: 0.12,
  costoCamionAnfocar: 0.00,
  costoChispeo: 0.08,
  costoManoObra: 2.00,
  tonelajePorTaladro: 122.45,
  pentacordEmpleado: 14.24,
  tiempoCarguioAnfocar: 0.14,
  mechaRapidaEmpleada: 14.00,
  numeroHombresCarguio: 3.00,
  tiempoEmpleadoCarguio: 0.14,
};

export default function CostoVoladuraForm() {
  const [values, setValues] = useState<CostoVoladuraInputsData>(defaultValues);

  const handleChange = (field: keyof CostoVoladuraInputsData, value: number) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const results = useMemo(() => calculateCostoVoladura(values), [values]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <CostoVoladuraInputs data={values} onChange={handleChange} />
      </div>
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <CostoVoladuraResults results={results} />
      </div>
      
    </div>
  );
}
