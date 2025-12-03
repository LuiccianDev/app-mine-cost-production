"use client";
import { useState, useMemo } from 'react';
import RellenoDetriticoInputs from '../components/forms/RellenoDetriticoInputs';
import RellenoDetriticoResults from '../components/results/RellenoDetriticoResults';
import { calcularRellenoDetritico, defaultRellenoDetriticoValues } from '../scripts/rellenoDetriticoCalculations';

export default function RellenoDetriticoPage() {
  const [inputValues, setInputValues] = useState(defaultRellenoDetriticoValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularRellenoDetritico(inputValues), [inputValues]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <RellenoDetriticoInputs inputValues={inputValues} onChange={handleChange} />
      </div>
      {/* <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <RellenoDetriticoResults resultados={resultados} />
      </div> */}
    </div>
  );
}
