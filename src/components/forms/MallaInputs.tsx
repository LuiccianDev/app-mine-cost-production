"use client";
import React from 'react';
import FormField from '../ui/FormField';

type MallaFormProps = {
  inputValues: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MallaForm({ inputValues, onChange }: MallaFormProps) {
  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white w-full h-full min-w-0">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">MALLA</h2>
        <p className="text-sm text-gray-500 mt-1">Datos</p>
      </div>
      <div className="flex flex-col gap-y-4 min-w-0">
        <FormField
          label="Altura de Banco"
          name="alturaBanco"
          value={inputValues.alturaBanco}
          onChange={onChange}
          unit="m"
        />
        <FormField
          label="Densidad del Material"
          name="densidadMaterial"
          value={inputValues.densidadMaterial}
          onChange={onChange}
          unit="ton/m³"
        />
        <FormField
          label="Factor de Potencia"
          name="factorPotencia"
          value={inputValues.factorPotencia}
          onChange={onChange}
          unit="lib/ton"
        />
        <FormField
          label="Diametro Taladro"
          name="diametroTaladro"
          value={inputValues.diametroTaladro}
          onChange={onChange}
          unit="pulg"
        />
        <FormField
          label="Densidad de Anfo"
          name="densidadAnfo"
          value={inputValues.densidadAnfo}
          onChange={onChange}
          unit="g/cm³"
        />
      </div>
    </div>
  );
}