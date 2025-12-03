"use client";
import { useState, useMemo } from 'react';
import CarguioInputs from '../components/forms/CarguioInputs';
import CarguioResults from '../components/results/CarguioResults';
import { calcularCarguio, defaultCarguioValues } from '../scripts/carguioCalculations';

export default function CarguioPage() {
  const [inputValues, setInputValues] = useState(defaultCarguioValues);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularCarguio(inputValues), [inputValues]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <CarguioInputs 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<CarguioResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
