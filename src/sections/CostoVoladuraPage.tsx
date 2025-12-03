"use client";
import { useState, useMemo } from 'react';
import CostoVoladuraInputs from '../components/forms/CostoVoladuraInputs';
import CostoVoladuraResults from '../components/results/CostoVoladuraResults';
import { calculateCostoVoladura, defaultCostoVoladuraValues } from '../scripts/costoVoladuraCalculations';

export default function CostoVoladuraPage() {
  const [inputValues, setInputValues] = useState(defaultCostoVoladuraValues);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calculateCostoVoladura(inputValues), [inputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CostoVoladuraInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<CostoVoladuraResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
