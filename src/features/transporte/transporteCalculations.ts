type TransporteFormData = {
  capacidadCamion: number;
  eficienciaLlenado: number;
  tiempoAcarreo: number;
  tiempoRetorno: number;
  tiempoCargaDescarga: number;
  tiempoCarguio: number;
  cicloCamion: number;
  disponibilidadOperativaCamion: number;
  disponibilidadMecanicaCamion: number;
  requerimientoScoop: number;
  costoHoraCamion: number;
  costoMantenimientoCamion: number;
  tiempoCarguioCamionTolva: number;
};

export type TransporteResultados = {
  cicloTotalCamion: number;
  numeroViajesPorHora: number;
  produccionCamion: number;
  numeroCamionesPorTolva: number;
  flotaCamiones: number;
  camionesOperacion: number;
  camionesStandBy: number;
  produccionFlotaCamiones: number;
  costoTransporte: number;
};

export const defaultTransporteValues = {
  capacidadCamion: 30.00,
  eficienciaLlenado: 95.00,
  tiempoAcarreo: 10.00,
  tiempoRetorno: 8.00,
  tiempoCargaDescarga: 2.00,
  tiempoCarguio: 2.00,
  cicloCamion: 22.00,
  disponibilidadOperativaCamion: 85.00,
  disponibilidadMecanicaCamion: 80.00,
  requerimientoScoop: 0.77,
  costoHoraCamion: 60.00,
  costoMantenimientoCamion: 0.00,
  tiempoCarguioCamionTolva: 5.00,
};

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
