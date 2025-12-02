"use client";
import { useState, useMemo } from 'react';
import CostoPerforacionInputs from '../components/forms/CostoPerforacionInputs';
import CostoPerforacionResults from '../components/results/CostoPerforacionResults';
import { calcularCostoPerforacion, defaultCostoPerforacionValues } from '../scripts/costoPerforacionCalculations';

export default function CostoPerforacionPage() {
  const [inputValues, setInputValues] = useState(defaultCostoPerforacionValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularCostoPerforacion(inputValues), [inputValues]);

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
