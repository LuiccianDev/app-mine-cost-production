import { type TransporteData as TransporteFormData, type TransporteResultados } from "@/src/types/transporte.types";


export function calcularTransporte(data: TransporteFormData): TransporteResultados {
  const {
    tiempoCarguioCamionTolva,
    cicloCamion,
    capacidadCamion,
    eficienciaLlenado,
    disponibilidadOperativaCamion,
    disponibilidadMecanicaCamion,
    requerimientoScoop,
    costoHoraCamion,
    costoMantenimientoCamion
  } = data;

  // CICLO TOTAL DE UN CAMION = Tiempo de Carguio Camion + Ciclo Camion
  const cicloTotalCamion = tiempoCarguioCamionTolva + cicloCamion;

  // Nº DE VIAJES POR Hr CAMION = 1 Hr / Ciclo Total camion
  const numeroViajesPorHora = 60 / cicloTotalCamion;

  // PRODUCCION DE 1 CAMION = Nº de Viajes × Cap.Camion × Efic.Camion × Disp.Ope × Disp. Mec.
  const produccionCamion = numeroViajesPorHora * capacidadCamion * (eficienciaLlenado / 100) * (disponibilidadOperativaCamion / 100) * (disponibilidadMecanicaCamion / 100);

  // Nº CAMIONES POR TOLVA = Ciclo total de Camion / Tiempo Carguio Camion
  const numeroCamionesPorTolva = cicloTotalCamion / tiempoCarguioCamionTolva;

  // FLOTA DE CAMIONES = Nº de camiones por Pala × Nº Pala + 20 % Stand By de # Camiones
  const camionesBase = numeroCamionesPorTolva * requerimientoScoop;
  const camionesStandBy = camionesBase * 0.20;
  const flotaCamiones = camionesBase + camionesStandBy;

  // Camiones en operación y stand by
  const camionesOperacion = Math.floor(camionesBase);
  const camionesStandByFinal = Math.ceil(camionesStandBy);

  // PRODUCCION DE FLOTA DE CAMIONES = Nº de Camiones × Produccion Camion por Hr
  const produccionFlotaCamiones = camionesOperacion * produccionCamion;

  // COSTO DE TRANSPORTE (US$/Ton) = (Nº de Camiones × Costo Hr camion + Costo Mant. Nº Camiones Sd-by) / Produccion Camion Ton/Hr
  const costoTransporte = (camionesOperacion * costoHoraCamion + camionesStandByFinal * costoMantenimientoCamion) / produccionFlotaCamiones;

  return {
    cicloTotalCamion,
    numeroViajesPorHora,
    produccionCamion,
    numeroCamionesPorTolva,
    flotaCamiones,
    camionesOperacion,
    camionesStandBy: camionesStandByFinal,
    produccionFlotaCamiones,
    costoTransporte
  };
}
