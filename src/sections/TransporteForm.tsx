"use client";
import React, { useState } from "react";
import FormField from "../components/ui/FormField";

type TransporteFormValues = {
  capacidadCamion: number;
  eficienciaLlenado: number;
  tiempoAcarreo: number;
  tiempoRetorno: number;
  tiempoGiroDescarga: number;
  tiempoCargarse: number;
  cicloCamion: number;
  disponibilidadOperativaCamion: number;
  disponibilidadMecanicaCamion: number;
  requerimientoScoop: number;
  costoHrCamion: number;
  costoMantenimientoCamion: number;
  tiempoCarguioCamion: number;
};

const defaultValues: TransporteFormValues = {
  capacidadCamion: 30,
  eficienciaLlenado: 95,
  tiempoAcarreo: 10,
  tiempoRetorno: 8,
  tiempoGiroDescarga: 2,
  tiempoCargarse: 2,
  cicloCamion: 22,
  disponibilidadOperativaCamion: 85,
  disponibilidadMecanicaCamion: 90,
  requerimientoScoop: 0.77,
  costoHrCamion: 60,
  costoMantenimientoCamion: 10,
  tiempoCarguioCamion: 5,
};

export default function TransporteForm({ onChange }: { onChange?: (values: TransporteFormValues) => void }) {
  const [values, setValues] = useState<TransporteFormValues>(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: Number(value) };
    setValues(newValues);
    if (onChange) onChange(newValues);
  };

  return (
    <form className="border rounded-lg shadow-md p-6 bg-white  overflow-y-auto">
      <div className="flex justify-between items-center font-bold text-xl mb-4">
        <span>TRANSPORTE</span>
        <span className="text-sm bg-zinc-100 px-2 py-1 rounded">EXP01</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormField
          label="Capacidad de camion"
          name="capacidadCamion"
          value={values.capacidadCamion}
          onChange={handleChange}
          unit="Ton"
        />
        <FormField
          label="Eficiencia de llenado"
          name="eficienciaLlenado"
          value={values.eficienciaLlenado}
          onChange={handleChange}
          unit="%"
        />
        <FormField
          label="Tiempo de Acarreo"
          name="tiempoAcarreo"
          value={values.tiempoAcarreo}
          onChange={handleChange}
          unit="min"
        />
        <FormField
          label="Tiempo de Retorno"
          name="tiempoRetorno"
          value={values.tiempoRetorno}
          onChange={handleChange}
          unit="min"
        />
        <FormField
          label="Tiempo de Giro y Descarga"
          name="tiempoGiroDescarga"
          value={values.tiempoGiroDescarga}
          onChange={handleChange}
          unit="min"
        />
        <FormField
          label="Tiempo para Cargarse"
          name="tiempoCargarse"
          value={values.tiempoCargarse}
          onChange={handleChange}
          unit="min"
        />
        <FormField
          label="Ciclo de Camion"
          name="cicloCamion"
          value={values.cicloCamion}
          onChange={handleChange}
          unit="min"
        />
        <FormField
          label="Disponibilidad Operativa Camion"
          name="disponibilidadOperativaCamion"
          value={values.disponibilidadOperativaCamion}
          onChange={handleChange}
          unit="%"
        />
        <FormField
          label="Disponibilidad Mecanica Camion"
          name="disponibilidadMecanicaCamion"
          value={values.disponibilidadMecanicaCamion}
          onChange={handleChange}
          unit="%"
        />
        <FormField
          label="Requerimiento de Scoop"
          name="requerimientoScoop"
          value={values.requerimientoScoop}
          onChange={handleChange}
          unit="Scoop"
        />
        <FormField
          label="Costo Hr de Camion"
          name="costoHrCamion"
          value={values.costoHrCamion}
          onChange={handleChange}
          unit="US$ / Hr"
        />
        <FormField
          label="Costo Mantenimiento Camion"
          name="costoMantenimientoCamion"
          value={values.costoMantenimientoCamion}
          onChange={handleChange}
          unit="US$ / Hr"
        />
        <FormField
          label="Tiempo Carguio Camion ( Tolva )"
          name="tiempoCarguioCamion"
          value={values.tiempoCarguioCamion}
          onChange={handleChange}
          unit="Minutos"
        />
      </div>
    </form>
  );
}
