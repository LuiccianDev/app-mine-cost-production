"use client";
import React, { useState, useMemo } from 'react';
import MallaForm from '../components/forms/MallaInputs';
import MallaResultados from '../components/results/MallaResults';
import { calcularMalla } from '../scripts/mallaCalculations';

type DatosFormValues = {
  alturaBanco: number;
  densidadMaterial: number;
  factorPotencia: number;
  diametroTaladro: number;
  densidadAnfo: number;
};

const defaultValues: DatosFormValues = {
  alturaBanco: 32.5,
  densidadMaterial: 3.75,
  factorPotencia: 0.40,
  diametroTaladro: 2.50,
  densidadAnfo: 0.80,
};

export default function MallaSection() {
  const [values, setValues] = useState<DatosFormValues>(defaultValues);
  const [inputValues, setInputValues] = useState<Record<string, string>>({
    alturaBanco: String(defaultValues.alturaBanco),
    densidadMaterial: String(defaultValues.densidadMaterial),
    factorPotencia: String(defaultValues.factorPotencia),
    diametroTaladro: String(defaultValues.diametroTaladro),
    densidadAnfo: String(defaultValues.densidadAnfo),
  });
  
  const resultados = useMemo(() => calcularMalla(values), [values]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setInputValues(prev => ({ ...prev, [name]: value }));
    
    let numericValue: number;
    
    if (value === '' || value === '-' || value === '.') {
      numericValue = defaultValues[name as keyof DatosFormValues];
    } else {
      const parsed = parseFloat(value);
      numericValue = isNaN(parsed) ? defaultValues[name as keyof DatosFormValues] : parsed;
    }
    
    const newValues = { ...values, [name]: numericValue };
    setValues(newValues);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Formulario */}
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <MallaForm inputValues={inputValues} onChange={handleChange} />
      </div>

      {/* Resultados */}
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <MallaResultados resultados={resultados} />
      </div>
    </div>
  );
}
