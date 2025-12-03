"use client";
import { useState, useMemo } from 'react';
import RellenoDetriticoInputs from '../components/forms/RellenoDetriticoInputs';
import RellenoDetriticoResults from '../components/results/RellenoDetriticoResults';
import { calcularRellenoDetritico, defaultRellenoDetriticoValues } from '../scripts/rellenoDetriticoCalculations';

export default function RellenoDetriticoPage() {
  const [inputValues, setInputValues] = useState(defaultRellenoDetriticoValues);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularRellenoDetritico(inputValues), [inputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <RellenoDetriticoInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<RellenoDetriticoResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
