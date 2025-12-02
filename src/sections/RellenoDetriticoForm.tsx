"use client";
import React, { useState } from "react";
import FormField from "../components/ui/FormField";

type RellenoDetriticoFormValues = {
  produccionMineral: number;
  produccionRelleno: number;
  capacidadCuchara: number;
  factorCuchara: number;
  densidadRotaMaterialRelleno: number;
  tiempoPaseViaje: number;
  disponibilidadMecanica: number;
  disponibilidadOperativa: number;
  horasPorGuardia: number;
  guardiasPorDia: number;
  costoHrEquipo: number;
  densidadMineral: number;
};

const defaultValues: RellenoDetriticoFormValues = {
  produccionMineral: 1451.67,
  produccionRelleno: 414.76,
  capacidadCuchara: 3,
  factorCuchara: 75,
  densidadRotaMaterialRelleno: 3,
  tiempoPaseViaje: 480,
  disponibilidadMecanica: 83,
  disponibilidadOperativa: 85,
  horasPorGuardia: 10,
  guardiasPorDia: 2,
  costoHrEquipo: 60,
  densidadMineral: 3.5,
};

export default function RellenoDetriticoForm({ onChange }: { onChange?: (values: RellenoDetriticoFormValues) => void }) {
  const [values, setValues] = useState<RellenoDetriticoFormValues>(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: Number(value) };
    setValues(newValues);
    if (onChange) onChange(newValues);
  };

  return (
    <form className="border rounded-lg shadow-md p-6 bg-white  overflow-y-auto">
      <div className="flex justify-between items-center font-bold text-xl mb-4">
        <span>RELLENO DETRITICO</span>
        <span className="text-sm bg-zinc-100 px-2 py-1 rounded">EXP01</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Produccion Mineral"
          name="produccionMineral"
          value={values.produccionMineral}
          onChange={handleChange}
          unit="TPD"
        />
        <FormField
          label="Produccion Relleno"
          name="produccionRelleno"
          value={values.produccionRelleno}
          onChange={handleChange}
          unit="m³"
        />
        <FormField
          label="Capacidad de Cuchara"
          name="capacidadCuchara"
          value={values.capacidadCuchara}
          onChange={handleChange}
          unit="Yds³ / pase"
        />
        <FormField
          label="Factor de Cuchara"
          name="factorCuchara"
          value={values.factorCuchara}
          onChange={handleChange}
          unit="%"
        />
        <FormField
          label="Densidad rota material Relleno"
          name="densidadRotaMaterialRelleno"
          value={values.densidadRotaMaterialRelleno}
          onChange={handleChange}
          unit="Ton / m³"
        />
        <FormField
          label="Tiempo De 1 Pase (viaje)"
          name="tiempoPaseViaje"
          value={values.tiempoPaseViaje}
          onChange={handleChange}
          unit="Seg / pase"
        />
        <FormField
          label="Disponibilidad Mecanica"
          name="disponibilidadMecanica"
          value={values.disponibilidadMecanica}
          onChange={handleChange}
          unit="%"
        />
        <FormField
          label="Disponibilidad Operativa"
          name="disponibilidadOperativa"
          value={values.disponibilidadOperativa}
          onChange={handleChange}
          unit="%"
        />
        <FormField
          label="N° de Horas por Guardia"
          name="horasPorGuardia"
          value={values.horasPorGuardia}
          onChange={handleChange}
          unit="Hr / guardia"
        />
        <FormField
          label="N° Guardia por Dia"
          name="guardiasPorDia"
          value={values.guardiasPorDia}
          onChange={handleChange}
          unit="guardias / dia"
        />
        <FormField
          label="Costo por Hr del Equipo"
          name="costoHrEquipo"
          value={values.costoHrEquipo}
          onChange={handleChange}
          unit="US$ / Hr"
        />
        <FormField
          label="Densidad de Mineral"
          name="densidadMineral"
          value={values.densidadMineral}
          onChange={handleChange}
          unit="Ton / m³"
        />
      </div>
    </form>
  );
}
