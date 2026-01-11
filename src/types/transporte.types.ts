export type TransporteData = {
  capacidadCamion: number
  eficienciaLlenado: number
  tiempoAcarreo: number
  tiempoRetorno: number
  tiempoCargaDescarga: number
  tiempoCarguio: number
  cicloCamion: number
  disponibilidadOperativaCamion: number
  disponibilidadMecanicaCamion: number
  requerimientoScoop: number
  costoHoraCamion: number
  costoMantenimientoCamion: number
  tiempoCarguioCamionTolva: number
}

export type TransporteResultados = {
  cicloTotalCamion: number
  numeroViajesPorHora: number
  produccionCamion: number
  numeroCamionesPorTolva: number
  flotaCamiones: number
  camionesOperacion: number
  camionesStandBy: number
  produccionFlotaCamiones: number
  costoTransporte: number
}

export const defaultTransporteValues: TransporteData = {
  capacidadCamion: 30.0,
  eficienciaLlenado: 95.0,
  tiempoAcarreo: 10.0,
  tiempoRetorno: 8.0,
  tiempoCargaDescarga: 2.0,
  tiempoCarguio: 2.0,
  cicloCamion: 22.0,
  disponibilidadOperativaCamion: 85.0,
  disponibilidadMecanicaCamion: 80.0,
  requerimientoScoop: 0.77,
  costoHoraCamion: 60.0,
  costoMantenimientoCamion: 0.0,
  tiempoCarguioCamionTolva: 5.0,
}
