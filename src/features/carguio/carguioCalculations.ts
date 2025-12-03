type CarguioFormData = {
  produccionMineral: number;
  ratioDesmonteMineral: number;
  produccionDesmonte: number;
  mineralMasDesmonte: number;
  capacidadCuchara: number;
  factorCuchara: number;
  densidadRotaMaterial: number;
  tiempoPase: number;
  disponibilidadMecanica: number;
  disponibilidadOperativa: number;
  horasPorGuardia: number;
  numeroGuardiasPorDia: number;
  costoHoraEquipo: number;
};

export type CarguioResultados = {
  toneladaPorPase: number;
  numeroPasesPorHora: number;
  produccionTonPorHora: number;
  produccionTonPorDia: number;
  requerimientoScoop: number;
  costoCarguio: number;
};

export const defaultCarguioValues = {
  produccionMineral: 1451.67,
  ratioDesmonteMineral: 0.00,
  produccionDesmonte: 0.00,
  mineralMasDesmonte: 1451.67,
  capacidadCuchara: 3.00,
  factorCuchara: 75,
  densidadRotaMaterial: 2.70,
  tiempoPase: 120.00,
  disponibilidadMecanica: 80.00,
  disponibilidadOperativa: 85.00,
  horasPorGuardia: 10.00,
  numeroGuardiasPorDia: 2.00,
  costoHoraEquipo: 60.00,
};

export function calcularCarguio(data: CarguioFormData): CarguioResultados {
  const {
    capacidadCuchara,
    densidadRotaMaterial,
    factorCuchara,
    tiempoPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    horasPorGuardia,
    numeroGuardiasPorDia,
    produccionMineral,
    costoHoraEquipo
  } = data;

  // TONELADA POR PASE (SCOOP) = Yd3/Pase × Densid.rota × Factor Cuchara
  const toneladaPorPase = capacidadCuchara * densidadRotaMaterial * factorCuchara * 0.765 /100; // 0,765 es yd3 a m3

  // Nº DE PASES POR HORA = 1 Hr / Tiempo de 1 pase
  const numeroPasesPorHora = 60 / (tiempoPase / 60);

  // PRODUCCION (Ton/Hr) = Ton/Pase × Pases/Hr × Disponib.Mecanica × Disponib.Operativa
  const produccionTonPorHora = toneladaPorPase * numeroPasesPorHora * (disponibilidadMecanica / 100) * (disponibilidadOperativa / 100);

  // PRODUCCION (Ton/Dia) = Produccion (Ton/Hr) × (Hr/Guardia) × (Nº guardia/dia)
  const produccionTonPorDia = produccionTonPorHora * horasPorGuardia * numeroGuardiasPorDia;

  // REQUERIMIENTO DE SCOOP = (Material Ton/dia) / (Produccion Ton/dia)
  const requerimientoScoop = produccionMineral / produccionTonPorDia;

  // COSTO DE CARGUIO (US$/Ton) = (Costo por Hr del Equipo) / (Produccion Ton/Hr)
  const costoCarguio = costoHoraEquipo / produccionTonPorHora;

  return {
    toneladaPorPase,
    numeroPasesPorHora,
    produccionTonPorHora,
    produccionTonPorDia,
    requerimientoScoop,
    costoCarguio
  };
}
