"use client";
import { useState, useMemo } from 'react';
import CostoPerforacionInputs from '../components/forms/CostoPerforacionInputs';
import CostoPerforacionResults from '../components/results/CostoPerforacionResults';
import { calcularCostoPerforacion, defaultCostoPerforacionValues } from '../scripts/costoPerforacionCalculations';

export default function CostoPerforacionPage() {
  const [inputValues, setInputValues] = useState(defaultCostoPerforacionValues);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularCostoPerforacion(inputValues), [inputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoPerforacionInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<CostoPerforacionResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
