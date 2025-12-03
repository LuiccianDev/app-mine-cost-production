"use client";
import { useState, useMemo } from 'react';
import CarguioInputs from '../components/forms/CarguioInputs';
import CarguioResults from '../components/results/CarguioResults';
import { calcularCarguio, defaultCarguioValues } from '../scripts/carguioCalculations';

export default function CarguioPage() {
  const [inputValues, setInputValues] = useState(defaultCarguioValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularCarguio(inputValues), [inputValues]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full p-6 min-w-0 ">
        <CarguioInputs inputValues={inputValues} onChange={handleChange} />
      </div>
      {/* <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <CarguioResults resultados={resultados} />
      </div> */}
    </div>
  );
}
