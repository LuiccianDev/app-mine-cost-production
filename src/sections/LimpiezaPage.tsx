"use client";
import { useState, useMemo } from 'react';
import LimpiezaInputs from '../components/forms/LimpiezaInputs';
import LimpiezaResults from '../components/results/LimpiezaResults';
import { calcularLimpieza, defaultLimpiezaValues } from '../scripts/limpiezaCalculations';

export default function LimpiezaPage() {
  const [inputValues, setInputValues] = useState(defaultLimpiezaValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularLimpieza(inputValues), [inputValues]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <LimpiezaInputs inputValues={inputValues} onChange={handleChange} />
      </div>
      {/* <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <LimpiezaResults resultados={resultados} />
      </div> */}
    </div>
  );
}
