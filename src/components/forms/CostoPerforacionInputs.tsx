"use client";
import React from 'react';
import FormField from '../ui/FormField';

type CostoPerforacionInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CostoPerforacionInputs({ inputValues, onChange }: CostoPerforacionInputsProps) {
  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white w-full h-full min-w-0">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">COSTO DE PERFORACION</h2>
        <p className="text-sm text-gray-500 mt-1">Datos</p>
      </div>
      <div className="flex flex-col gap-y-4 min-w-0">
        <FormField
          label="Costo Broca + Accesorios"
          name="costoBrocaAccesorios"
          value={inputValues.costoBrocaAccesorios}
          onChange={onChange}
          unit="$/und"
        />
        <FormField
          label="Costo equipo Perforacion"
          name="costoEquipoPerforacion"
          value={inputValues.costoEquipoPerforacion}
          onChange={onChange}
          unit="$/h"
        />
        <FormField
          label="Tiempo de Perforac. (Rend. Broca)"
          name="tiempoPerforacion"
          value={inputValues.tiempoPerforacion}
          onChange={onChange}
          unit="hr"
        />
        <FormField
          label="Rendimiento Broca"
          name="rendimientoBroca"
          value={inputValues.rendimientoBroca}
          onChange={onChange}
          unit="m /broca"
        />
        <FormField
          label="Tonelaje"
          name="tonelaje"
          value={inputValues.tonelaje}
          onChange={onChange}
          unit="ton / taladro"
        />
        <FormField
          label="Altura de banco"
          name="alturaBanco"
          value={inputValues.alturaBanco}
          onChange={onChange}
          unit="m"
        />
      </div>
    </div>
  );
}
