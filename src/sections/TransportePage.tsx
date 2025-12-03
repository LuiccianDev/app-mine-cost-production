"use client";
import { useState, useMemo } from 'react';
import TransporteInputs from '../components/forms/TransporteInputs';
import TransporteResults from '../components/results/TransporteResults';
import { calcularTransporte, defaultTransporteValues } from '../scripts/transporteCalculations';

export default function TransportePage() {
  const [inputValues, setInputValues] = useState(defaultTransporteValues);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularTransporte(inputValues), [inputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <TransporteInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<TransporteResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
