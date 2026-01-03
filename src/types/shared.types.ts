// Valores compartidos entre múltiples calculadoras
export type SharedData = {
  produccionMina: number
  alturaBanco: number
  tonelajePerforado: number
  rendimientoBroca: number
  tiempoPerforacion: number
}

export const defaultSharedValues: SharedData = {
  produccionMina: 1451.67,
  alturaBanco: 9.91,
  tonelajePerforado: 122.45,
  rendimientoBroca: 762.0,
  tiempoPerforacion: 80.0,
}
