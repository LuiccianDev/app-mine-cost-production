"use client";
import { useState, useMemo } from 'react';
import CostoVoladuraInputs from '../components/forms/CostoVoladuraInputs';
import CostoVoladuraResults from '../components/results/CostoVoladuraResults';
import { calculateCostoVoladura, defaultCostoVoladuraValues } from '../scripts/costoVoladuraCalculations';

export default function CostoVoladuraPage() {
  const [inputValues, setInputValues] = useState(defaultCostoVoladuraValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calculateCostoVoladura(inputValues), [inputValues]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <CostoVoladuraInputs inputValues={inputValues} onChange={handleChange} />
      </div>
      {/* <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <CostoVoladuraResults resultados={resultados} />
      </div> */}
    </div>
  );
}
