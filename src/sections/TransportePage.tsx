"use client";
import { useState, useMemo, useEffect } from 'react';
import TransporteInputs from '../components/forms/TransporteInputs';
import TransporteResults from '../components/results/TransporteResults';
import { calcularTransporte, defaultTransporteValues } from '../scripts/transporteCalculations';
import { useCalculations } from '../context/CalculationContext';

export default function TransportePage() {
  const { setTransporteResults } = useCalculations();
  const [inputValues, setInputValues] = useState(defaultTransporteValues);
  const [showResults, setShowResults] = useState(false);

  // Cargar valores guardados desde localStorage al iniciar
  useEffect(() => {
    const savedInputs = localStorage.getItem('transporteInputsValues');
    if (savedInputs) {
      setInputValues(JSON.parse(savedInputs));
    }
  }, []);

  // Guardar inputs en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('transporteInputsValues', JSON.stringify(inputValues));
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => ({ ...prev, [e.target.name]: parseFloat(e.target.value) || 0 }));
  };

  const resultados = useMemo(() => calcularTransporte(inputValues), [inputValues]);

  // Guardar resultados en el contexto
  useEffect(() => {
    setTransporteResults(resultados);
  }, [resultados, setTransporteResults]);

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
