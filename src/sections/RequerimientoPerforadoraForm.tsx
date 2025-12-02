"use client";
import React, { useState } from "react";
import FormField from "../components/ui/FormField";

type RequerimientoPerforadoraFormValues = {
  produccionMina: number;
  alturaBanco: number;
  longitudTaladro: number;
  tonTaladro: number;
  rendimientoBroca: number;
  tiempoPerforacion: number;
  horasProgramadas: number;
  horasTrabajadas: number;
  eficienciaPerforadora: number;
};

const defaultValues: RequerimientoPerforadoraFormValues = {
  produccionMina: 1451.67,
  alturaBanco: 9.91,
  longitudTaladro: 9.91,
  tonTaladro: 122.45,
  rendimientoBroca: 762,
  tiempoPerforacion: 80,
  horasProgramadas: 530,
  horasTrabajadas: 250,
  eficienciaPerforadora: 0.47,
};

export default function RequerimientoPerforadoraForm({ onChange }: { onChange?: (values: RequerimientoPerforadoraFormValues) => void }) {
  const [values, setValues] = useState<RequerimientoPerforadoraFormValues>(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: Number(value) };
    setValues(newValues);
    if (onChange) onChange(newValues);
  };

  return (
    <form className="border rounded-lg shadow-md p-6 bg-white  overflow-y-auto">
      <div className="font-bold text-xl mb-4">
        <span>REQUERIMIENTO DE PERFORADORA</span>
        <span className="text-sm bg-zinc-100 px-2 py-1 rounded">EXP01</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Produccion mina"
          name="produccionMina"
          value={values.produccionMina}
          onChange={handleChange}
          unit="TPD"
        />
        <FormField
          label="Altura de Banco"
          name="alturaBanco"
          value={values.alturaBanco}
          onChange={handleChange}
          unit="m"
        />
        <FormField
          label="Longitud de Taladro"
          name="longitudTaladro"
          value={values.longitudTaladro}
          onChange={handleChange}
          unit="m"
        />
        <FormField
          label="Ton / Taladro"
          name="tonTaladro"
          value={values.tonTaladro}
          onChange={handleChange}
          unit="Ton/taladro"
        />
        <FormField
          label="Rendimiento Broca"
          name="rendimientoBroca"
          value={values.rendimientoBroca}
          onChange={handleChange}
          unit="m/Broca"
        />
        <FormField
          label="Tiempo Perforacion"
          name="tiempoPerforacion"
          value={values.tiempoPerforacion}
          onChange={handleChange}
          unit="Hr"
        />
        <FormField
          label="Horas Programadas"
          name="horasProgramadas"
          value={values.horasProgramadas}
          onChange={handleChange}
          unit="Hr"
        />
        <FormField
          label="Horas Trabajadas"
          name="horasTrabajadas"
          value={values.horasTrabajadas}
          onChange={handleChange}
          unit="Hr"
        />
        <FormField
          label="Eficiencia Perforadora"
          name="eficienciaPerforadora"
          value={values.eficienciaPerforadora}
          onChange={handleChange}
          unit="%"
        />
      </div>
    </form>
  );
}
