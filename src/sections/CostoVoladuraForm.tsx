"use client";
import React, { useState } from "react";
import FormField from "../components/ui/FormField";

type CostoVoladuraFormValues = {
  anfo: number;
  dinamita: number;
  retardosFanel: number;
  cordonDetonante: number;
  camionAnfocar: number;
  chispeo: number;
  manoObra: number;
  tonelaje: number;
};

const defaultValues: CostoVoladuraFormValues = {
  anfo: 0.21,
  dinamita: 0.13,
  retardosFanel: 1.03,
  cordonDetonante: 0.12,
  camionAnfocar: 0,
  chispeo: 0.08,
  manoObra: 2,
  tonelaje: 122.45,
};

export default function CostoVoladuraForm({ onChange }: { onChange?: (values: CostoVoladuraFormValues) => void }) {
  const [values, setValues] = useState<CostoVoladuraFormValues>(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: Number(value) };
    setValues(newValues);
    if (onChange) onChange(newValues);
  };

  return (
    <form className="border rounded-lg shadow-md p-6 bg-white overflow-y-auto">
      <div className="flex justify-between items-center font-bold text-xl mb-4">
        <span>COSTO DE VOLADURA</span>
        <span className="text-sm bg-zinc-100 px-2 py-1 rounded">EXP01</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Anfo"
          name="anfo"
          value={values.anfo}
          onChange={handleChange}
          unit="US$ / Lib"
        />
        <FormField
          label="Dinamita"
          name="dinamita"
          value={values.dinamita}
          onChange={handleChange}
          unit="US$ / Cartucho"
        />
        <FormField
          label="Retardos Fanel"
          name="retardosFanel"
          value={values.retardosFanel}
          onChange={handleChange}
          unit="US$ / Unidad"
        />
        <FormField
          label="Cordon Detonante"
          name="cordonDetonante"
          value={values.cordonDetonante}
          onChange={handleChange}
          unit="US$ / Pie"
        />
        <FormField
          label="Camion Anfocar"
          name="camionAnfocar"
          value={values.camionAnfocar}
          onChange={handleChange}
          unit="US$ / Hr"
        />
        <FormField
          label="Chispeo"
          name="chispeo"
          value={values.chispeo}
          onChange={handleChange}
          unit="US$ / Lib"
        />
        <FormField
          label="Mano de Obra"
          name="manoObra"
          value={values.manoObra}
          onChange={handleChange}
          unit="US$ / Hr"
        />
        <FormField
          label="Tonelaje"
          name="tonelaje"
          value={values.tonelaje}
          onChange={handleChange}
          unit="Ton / Taladro"
        />
      </div>
    </form>
  );
}
