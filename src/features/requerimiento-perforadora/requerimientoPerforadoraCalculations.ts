type RequerimientoPerforadoraFormData = {
  produccionMina: number;
  alturaBanco: number;
  longitudTaladro: number;
  tonelajePorTaladro: number;
  rendimientoBroca: number;
  tiempoPerforacion: number;
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

export const defaultRequerimientoPerforadoraValues = {
  produccionMina: 1451.67,
  alturaBanco: 9.91,
  longitudTaladro: 9.91,
  tonelajePorTaladro: 122.45,
  rendimientoBroca: 762.00,
  tiempoPerforacion: 80.00,
  horasProgramadas: 530.00,
  horasTrabajadas: 250.00,
  eficienciaPerforadora: 0.47,
  produccionTPM: 43.550,
  diasOperacion: 30,
  produccionTPD: 1452,
};

export function calcularRequerimientoPerforadora(data: RequerimientoPerforadoraFormData): RequerimientoPerforadoraResultados {
  const {
    produccionMina,
    tonelajePorTaladro,
    longitudTaladro,
    rendimientoBroca,
    tiempoPerforacion,
    eficienciaPerforadora
  } = data;

  // Nº PERFORADORA = (Produccion TPD / Ton/Taladro) × (Long.Tal / Rend.Broca) × (Tiempo Perf / 24 Hr) × (1 / Efic.Perf)
  const numeroPerforadoras = (produccionMina / tonelajePorTaladro) * (longitudTaladro / rendimientoBroca) * (tiempoPerforacion / 24) * (1 / eficienciaPerforadora);

  // METROS PERFORADO (m/dia) = Produccion TPD / (Ton/Taladro) × (1 Tal / Long.Tal m)
  const metrosPerforadosPorDia = (produccionMina / tonelajePorTaladro) * longitudTaladro;

  // Convertir metros a pies (1 m = 3.28084 pies)
  const piesPerforadosPorDia = metrosPerforadosPorDia * 3.28084;

  return {
    numeroPerforadoras,
    metrosPerforadosPorDia,
    piesPerforadosPorDia
  };
}
