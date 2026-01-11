export type RellenoDetriticoData = {
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
  costoTransporteDesmonte: number
}

export type RellenoDetriticoResultados = {
  toneladaPorPase: number
  numeroPasesPorHora: number
  produccionTonPorHora: number
  produccionTonPorDia: number
  requerimientoScoop: number
  costoTransporte: number
  costoMaterialRelleno: number
  costoTotalRelleno: number
}

export const defaultRellenoDetriticoValues: RellenoDetriticoData = {
  produccionMineral: 1451.67,
  produccionRelleno: 414.76,
  capacidadCuchara: 3.0,
  factorCuchara: 75,
  densidadRotaMaterialRelleno: 3.0,
  tiempoDeUnPase: 480.0,
  disponibilidadMecanica: 85.0,
  disponibilidadOperativa: 85.0,
  numeroHorasPorGuardia: 10.0,
  numeroGuardiasPorDia: 2.0,
  costoHoraEquipo: 60.0,
  densidadMineral: 3.5,
  costoPreparacionAgregados: 0,
  costoTransporteDesmonte: 1.75,
}
