"use client";
import { useState, useMemo } from 'react';
import TransporteInputs from '../components/forms/TransporteInputs';
import TransporteResults from '../components/results/TransporteResults';
import { calcularTransporte, defaultTransporteValues } from '../scripts/transporteCalculations';

export default function TransportePage() {
  const [inputValues, setInputValues] = useState(defaultTransporteValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularTransporte(inputValues), [inputValues]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <TransporteInputs inputValues={inputValues} onChange={handleChange} />
      </div>
      {/* <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <TransporteResults resultados={resultados} />
      </div> */}
    </div>
  );
}
