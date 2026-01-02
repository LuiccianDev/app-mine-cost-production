

export type RequerimientoPerforadoraData = {
  produccionMina: number;
  alturaBanco: number; /* AUTO */
  longuitudTaladro: number;
  tonelajePerforado: number; /* AUTO */
  rendimientoBroca: number; /* AUTO */
  tiempoPerforacion: number; /* AUTO */
  horasProgramadas: number;
  horasTrabajadas: number;
  eficienciaPerforadora: number;
  produccionTPM: number;
  diasOperacion: number;
  produccionTPD: number;
};

export type RequerimientoPerforadoraResultados = {
  numeroPerforadoras: number;
  metrosPerforadosPorDia: number;
  piesPerforadosPorDia: number;
};

export const defaultRequerimientoPerforadoraValues : RequerimientoPerforadoraData = {
  produccionMina: 1451.67,
  alturaBanco: 9.91,
  longuitudTaladro: 9.91,
  tonelajePerforado: 122.45,
  rendimientoBroca: 762.00,
  tiempoPerforacion: 80.00,
  horasProgramadas: 530.00,
  horasTrabajadas: 250.00,
  eficienciaPerforadora: 0.47,
  produccionTPM: 43.550,
  diasOperacion: 30,
  produccionTPD: 1452,
};