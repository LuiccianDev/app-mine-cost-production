"use client";
import { useState, useMemo } from "react";
import CostoVoladuraInputs from "../components/forms/CostoVoladuraInputs";
import CostoVoladuraResults from "../components/results/CostoVoladuraResults";
import { 
  calculateCostoVoladura, 
  defaultCostoVoladuraValues,
  CostoVoladuraInputsData 
} from "../scripts/costoVoladuraCalculations";

export default function CostoVoladuraForm() {
  const [values, setValues] = useState<CostoVoladuraInputsData>(defaultCostoVoladuraValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value) || 0;
    setValues(prev => ({ ...prev, [name]: numericValue }));
  };

  const results = useMemo(() => calculateCostoVoladura(values), [values]);

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <CostoVoladuraInputs inputValues={values} onChange={handleChange} />
      </div>
      <div className="w-full lg:w-1/2 p-6 min-w-0 max-w-[50vw]">
        <CostoVoladuraResults results={results} />
      </div>
      
    </div>
  );
}
