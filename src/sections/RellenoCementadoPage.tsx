"use client";
import { useState, useMemo } from 'react';
import RellenoCementadoInputs from '../components/forms/RellenoCementadoInputs';
import RellenoCementadoResults from '../components/results/RellenoCementadoResults';
import { calcularRellenoCementado, defaultRellenoCementadoValues } from '../scripts/rellenoCementadoCalculations';

export default function RellenoCementadoPage() {
  const [inputValues, setInputValues] = useState(defaultRellenoCementadoValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularRellenoCementado(inputValues), [inputValues]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <RellenoCementadoInputs inputValues={inputValues} onChange={handleChange} />
      </div>
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <RellenoCementadoResults resultados={resultados} />
      </div>
    </div>
  );
}
