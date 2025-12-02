"use client";
import React, { useState } from "react";
import FormField from "../components/ui/FormField";

type CarguioFormValues = {
  produccionMineral: number;
  ratioDM: number;
  produccionDesmonte: number;
  mineralDesmonte: number;
  capacidadCuchara: number;
  factorCuchara: number;
  densidadRotaMaterial: number;
  tiempoPase: number;
  disponibilidadMecanica: number;
  disponibilidadOperativa: number;
  horasPorGuardia: number;
  guardiasPorDia: number;
  costoHrEquipo: number;
};

const defaultValues: CarguioFormValues = {
  produccionMineral: 1451.67,
  ratioDM: 0,
  produccionDesmonte: 0,
  mineralDesmonte: 1451.67,
  capacidadCuchara: 3,
  factorCuchara: 75,
  densidadRotaMaterial: 2.7,
  tiempoPase: 120,
  disponibilidadMecanica: 80,
  disponibilidadOperativa: 85,
  horasPorGuardia: 10,
  guardiasPorDia: 2,
  costoHrEquipo: 60,
};

export default function CarguioForm({
  onChange,
}: {
  onChange?: (values: CarguioFormValues) => void;
}) {
  const [values, setValues] = useState<CarguioFormValues>(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: Number(value) };
    setValues(newValues);
    if (onChange) onChange(newValues);
  };

  return (
    <form className="border rounded-lg shadow-md p-6   overflow-y-auto">
      <div className="flex justify-between items-center font-bold text-xl mb-4">
        <span>CARGUIO</span>
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
          label="Ratio D/M"
          name="ratioDM"
          value={values.ratioDM}
          onChange={handleChange}
          unit="TPD"
        />
        <FormField
          label="Produccion Desmonte"
          name="produccionDesmonte"
          value={values.produccionDesmonte}
          onChange={handleChange}
          unit="TPD"
        />
        <FormField
          label="Mineral + Desmonte"
          name="mineralDesmonte"
          value={values.mineralDesmonte}
          onChange={handleChange}
          unit="TPD"
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
          label="Densidad rota material"
          name="densidadRotaMaterial"
          value={values.densidadRotaMaterial}
          onChange={handleChange}
          unit="Ton / m³"
        />
        <FormField
          label="Tiempo de 1 Pase"
          name="tiempoPase"
          value={values.tiempoPase}
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
      </div>
    </form>
  );
}
