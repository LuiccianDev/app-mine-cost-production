"use client";

import TransporteInputs from "./TransporteInputs";
import TransporteResults from "./TransporteResults";
import { calcularTransporte } from "./transporteCalculations";
import { useTransporteStore } from "@/src/stores/useMalla";

export default function TransportePage() {
  const {
    capacidadCamion,
    eficienciaLlenado,
    tiempoAcarreo,
    tiempoRetorno,
    tiempoCargaDescarga,
    tiempoCarguio,
    cicloCamion,
    disponibilidadOperativaCamion,
    disponibilidadMecanicaCamion,
    requerimientoScoop,
    costoHoraCamion,
    costoMantenimientoCamion,
    tiempoCarguioCamionTolva,
  } = useTransporteStore();

  const resultados = calcularTransporte({
    capacidadCamion,
    eficienciaLlenado,
    tiempoAcarreo,
    tiempoRetorno,
    tiempoCargaDescarga,
    tiempoCarguio,
    cicloCamion,
    disponibilidadOperativaCamion,
    disponibilidadMecanicaCamion,
    requerimientoScoop,
    costoHoraCamion,
    costoMantenimientoCamion,
    tiempoCarguioCamionTolva,
  });

  return (
    <div className="flex flex-col w-full">
      <div className="w-full p-6 min-w-0">
        <TransporteInputs
          resultsComponent={<TransporteResults resultados={resultados} />}
        />
      </div>
    </div>
  );
}
