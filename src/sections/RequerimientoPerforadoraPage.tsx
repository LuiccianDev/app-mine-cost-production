"use client";
import { useState, useMemo } from 'react';
import RequerimientoPerforadoraInputs from '../components/forms/RequerimientoPerforadoraInputs';
import RequerimientoPerforadoraResults from '../components/results/RequerimientoPerforadoraResults';
import { calcularRequerimientoPerforadora, defaultRequerimientoPerforadoraValues } from '../scripts/requerimientoPerforadoraCalculations';

export default function RequerimientoPerforadoraPage() {
  const [inputValues, setInputValues] = useState(defaultRequerimientoPerforadoraValues);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularRequerimientoPerforadora(inputValues), [inputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RequerimientoPerforadoraInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RequerimientoPerforadoraResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
