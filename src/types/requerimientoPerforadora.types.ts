// produccionMina, alturaBanco, tonelajePerforado, rendimientoBroca, tiempoPerforacion movidos a SharedData
export type RequerimientoPerforadoraData = {
  longuitudTaladro: number
  horasProgramadas: number
  horasTrabajadas: number
  eficienciaPerforadora: number
  produccionTPM: number
  diasOperacion: number
  produccionTPD: number
}

export type RequerimientoPerforadoraResultados = {
  numeroPerforadoras: number
  metrosPerforadosPorDia: number
  piesPerforadosPorDia: number
}

export const defaultRequerimientoPerforadoraValues: RequerimientoPerforadoraData = {
  longuitudTaladro: 9.91,
  horasProgramadas: 530.0,
  horasTrabajadas: 250.0,
  eficienciaPerforadora: 0.47,
  produccionTPM: 43.55,
  diasOperacion: 30,
  produccionTPD: 1452,
}
