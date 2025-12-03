"use client";
import { useState, useMemo, useEffect } from 'react';
import MallaForm from '../components/forms/MallaInputs';
import MallaResultados from '../components/results/MallaResults';
import { calcularMalla, defaultMallaValues } from '../scripts/mallaCalculations';
import { useCalculations } from '../context/CalculationContext';

export default function MallaSection() {
  const [inputValues, setInputValues] = useState(defaultMallaValues);
  const [showResults, setShowResults] = useState(false);
  const { setMallaResults } = useCalculations();

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem('mallaInputs');
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
  }, []);

  // Guardar inputs en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('mallaInputs', JSON.stringify(inputValues));
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularMalla(inputValues), [inputValues]);

  // Guardar resultados en el context cada vez que cambien
  useEffect(() => {
    setMallaResults(resultados);
  }, [resultados, setMallaResults]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <MallaForm 
          inputValues={inputValues} 
          onChange={handleChange}
          showResults={showResults}
          onToggleResults={() => setShowResults(!showResults)}
          resultsComponent={<MallaResultados resultados={resultados} />}
        />
      </div>
    </div>
  );
}
