"use client";
import React from 'react';
import FormField from '../ui/FormField';

type CostoVoladuraInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CostoVoladuraInputs({ inputValues, onChange }: CostoVoladuraInputsProps) {
  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white w-full h-full min-w-0">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">COSTO DE VOLADURA</h2>
        <p className="text-sm text-gray-500 mt-1">Datos</p>
      </div>
      <div className="flex flex-col gap-y-4 min-w-0">
        <FormField
          label="Costo Anfo"
          name="costoAnfo"
          value={inputValues.costoAnfo}
          onChange={onChange}
          unit="US$/Lib"
        />
        <FormField
          label="Costo Dinamita"
          name="costoDinamita"
          value={inputValues.costoDinamita}
          onChange={onChange}
          unit="US$/Cartucho"
        />
        <FormField
          label="Costo Retardos Fanel"
          name="costoRetardos"
          value={inputValues.costoRetardos}
          onChange={onChange}
          unit="US$/Unidad"
        />
        <FormField
          label="Costo Cordón Detonante"
          name="costoCordonDetonante"
          value={inputValues.costoCordonDetonante}
          onChange={onChange}
          unit="US$/Pie"
        />
        <FormField
          label="Costo Camión Anfocar"
          name="costoCamionAnfocar"
          value={inputValues.costoCamionAnfocar}
          onChange={onChange}
          unit="US$/Hr"
        />
        <FormField
          label="Costo Chispeo"
          name="costoChispeo"
          value={inputValues.costoChispeo}
          onChange={onChange}
          unit="US$/Pie"
        />
        <FormField
          label="Costo Mano de Obra"
          name="costoManoObra"
          value={inputValues.costoManoObra}
          onChange={onChange}
          unit="US$/Hr"
        />
        <FormField
          label="Tonelaje por Taladro"
          name="tonelajePorTaladro"
          value={inputValues.tonelajePorTaladro}
          onChange={onChange}
          unit="Ton/Taladro"
        />
      </div>
    </div>
  );
}
