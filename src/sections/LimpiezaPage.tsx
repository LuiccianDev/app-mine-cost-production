"use client";
import { useState, useMemo } from 'react';
import LimpiezaInputs from '../components/forms/LimpiezaInputs';
import LimpiezaResults from '../components/results/LimpiezaResults';
import { calcularLimpieza, defaultLimpiezaValues } from '../scripts/limpiezaCalculations';

export default function LimpiezaPage() {
  const [inputValues, setInputValues] = useState(defaultLimpiezaValues);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularLimpieza(inputValues), [inputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <LimpiezaInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<LimpiezaResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
