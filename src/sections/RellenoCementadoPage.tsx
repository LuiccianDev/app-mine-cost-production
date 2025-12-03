"use client";
import { useState, useMemo } from 'react';
import RellenoCementadoInputs from '../components/forms/RellenoCementadoInputs';
import RellenoCementadoResults from '../components/results/RellenoCementadoResults';
import { calcularRellenoCementado, defaultRellenoCementadoValues } from '../scripts/rellenoCementadoCalculations';

export default function RellenoCementadoPage() {
  const [inputValues, setInputValues] = useState(defaultRellenoCementadoValues);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularRellenoCementado(inputValues), [inputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoCementadoInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RellenoCementadoResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
