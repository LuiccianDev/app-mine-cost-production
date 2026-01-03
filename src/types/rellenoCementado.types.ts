export type RellenoCementadoData = {
  produccionMineral: number
  produccionRelleno: number
  capacidadCuchara: number
  factorCuchara: number
  densidadRotaMaterialRelleno: number
  tiempoDeUnPase: number
  disponibilidadMecanica: number
  disponibilidadOperativa: number
  numeroHorasPorGuardia: number
  numeroGuardiasPorDia: number
  costoHoraEquipo: number
  densidadMineral: number
  costoPreparacionAgregados: number
  costoPreparacionPlantaConcreto: number
  costoTransporteRelaveChura: number
  costoCemento: number
}

export type RellenoCementadoResultados = {
  toneladaPorPase: number
  numeroPasesPorHora: number
  produccionTonPorHora: number
  produccionTonPorDia: number
  requerimientoScoop: number
  costoTransporte: number
  costoMaterialRelleno35: number
  costoTotalRelleno35: number
  costoMaterialRelleno30: number
  costoTotalRelleno30: number
}

export const defaultRellenoCementadoValues: RellenoCementadoData = {
  produccionMineral: 1451.67,
  produccionRelleno: 390.34,
  capacidadCuchara: 3.0,
  factorCuchara: 75,
  densidadRotaMaterialRelleno: 2.0,
  tiempoDeUnPase: 480.0,
  disponibilidadMecanica: 80.0,
  disponibilidadOperativa: 80.0,
  numeroHorasPorGuardia: 10.0,
  numeroGuardiasPorDia: 2.0,
  costoHoraEquipo: 60.0,
  densidadMineral: 3.7,
  costoPreparacionAgregados: 2.5,
  costoPreparacionPlantaConcreto: 1.47,
  costoTransporteRelaveChura: 2.6,
  costoCemento: 10.8,
}
