"use client";
import { useState, useMemo } from 'react';
import MallaForm from '../components/forms/MallaInputs';
import MallaResultados from '../components/results/MallaResults';
import { calcularMalla, defaultMallaValues } from '../scripts/mallaCalculations';

export default function MallaSection() {
  const [inputValues, setInputValues] = useState(defaultMallaValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value) || 0;
    setInputValues(prev => ({ ...prev, [name]: numericValue }));
  };

  const resultados = useMemo(() => calcularMalla(inputValues), [inputValues]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <MallaForm inputValues={inputValues} onChange={handleChange} />
      </div>
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <MallaResultados resultados={resultados} />
      </div>
    </div>
  );
}
