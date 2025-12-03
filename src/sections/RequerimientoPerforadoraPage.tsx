"use client";
import { useState, useMemo } from 'react';
import RequerimientoPerforadoraInputs from '../components/forms/RequerimientoPerforadoraInputs';
import RequerimientoPerforadoraResults from '../components/results/RequerimientoPerforadoraResults';
import { calcularRequerimientoPerforadora, defaultRequerimientoPerforadoraValues } from '../scripts/requerimientoPerforadoraCalculations';

export default function RequerimientoPerforadoraPage() {
  const [inputValues, setInputValues] = useState(defaultRequerimientoPerforadoraValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularRequerimientoPerforadora(inputValues), [inputValues]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full p-6 min-w-0 ]">
        <RequerimientoPerforadoraInputs inputValues={inputValues} onChange={handleChange} />
      </div>
      {/* <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <RequerimientoPerforadoraResults resultados={resultados} />
      </div> */}
    </div>
  );
}
