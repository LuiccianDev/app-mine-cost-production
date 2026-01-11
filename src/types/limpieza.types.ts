// produccionMina movido a SharedData
export type LimpiezaData = {
  produccionDesmonte: number
  mineralMasDesmonte: number
  capacidadCuchara: number
  factorCuchara: number
  densidadRotaMineral: number
  tiempoDeUnPase: number /*VIAJE DE IDA Y VUELTA*/
  disponibilidadMecanica: number
  disponibilidadOperativa: number
  numeroHorasPorGuardia: number
  numeroGuardiasPorDia: number
  costoHoraDeEquipo: number
}

export type LimpiezaResultados = {
  toneladaPorPase: number
  numeroPasesPorHora: number
  produccionTonPorHora: number
  produccionTonPorDia: number
  requerimientoScoops: number
  costoLimpieza: number
}

export const defaultLimpiezaValues: LimpiezaData = {
  produccionDesmonte: 0.0,
  mineralMasDesmonte: 1451.67,
  capacidadCuchara: 5.0,
  factorCuchara: 75,
  densidadRotaMineral: 2.7,
  tiempoDeUnPase: 480.0,
  disponibilidadMecanica: 80.0,
  disponibilidadOperativa: 80.0,
  numeroHorasPorGuardia: 10.0,
  numeroGuardiasPorDia: 2.0,
  costoHoraDeEquipo: 60.0,
}
