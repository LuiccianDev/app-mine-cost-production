import { type CarguioData as CarguioFormData , type CarguioResultados } from "@/src/types/carguio.types";

export const defaultCarguioValues = {
  produccionMineral: 1451.67,
  ratioDesmonteMineral: 0.00,
  produccionDesmonte: 0.00,
  mineralMasDesmonte: 1451.67,
  capacidadCuchara: 3.00,
  factorCuchara: 75,
  densidaRotaMineral: 2.70,
  tiempoDeUnPase: 120.00,
  disponibilidadMecanica: 80.00,
  disponibilidadOperativa: 85.00,
  numeroHorasPorGuardia: 10.00,
  numeroGuardiasPorDia: 2.00,
  costoHoraDeEquipo: 60.00,
};

export function calcularCarguio(data: CarguioFormData): CarguioResultados {
  const {
    capacidadCuchara,
    densidaRotaMineral,
    factorCuchara,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    produccionMina,
    costoHoraDeEquipo
  } = data;

  // TONELADA POR PASE (SCOOP) = Yd3/Pase × Densid.rota × Factor Cuchara
  const toneladaPorPase = capacidadCuchara * densidaRotaMineral * factorCuchara * 0.765 / 100; // 0,765 es yd3 a m3
  // Nº DE PASES POR HORA = 1 Hr / Tiempo de 1 pase
  const numeroPasesPorHora = 60 / (tiempoDeUnPase / 60);

  // PRODUCCION (Ton/Hr) = Ton/Pase × Pases/Hr × Disponib.Mecanica × Disponib.Operativa
  const produccionTonPorHora = toneladaPorPase * numeroPasesPorHora * (disponibilidadMecanica / 100) * (disponibilidadOperativa / 100);

  // PRODUCCION (Ton/Dia) = Produccion (Ton/Hr) × (Hr/Guardia) × (Nº guardia/dia)
  const produccionTonPorDia = produccionTonPorHora * numeroHorasPorGuardia * numeroGuardiasPorDia;

  // REQUERIMIENTO DE SCOOP = (Material Ton/dia) / (Produccion Ton/dia)
  const requerimientoScoop = produccionMina / produccionTonPorDia;

  // COSTO DE CARGUIO (US$/Ton) = (Costo por Hr del Equipo) / (Produccion Ton/Hr)
  const costoCarguio = costoHoraDeEquipo / produccionTonPorHora;

  return {
    toneladaPorPase,
    numeroPasesPorHora,
    produccionTonPorHora,
    produccionTonPorDia,
    requerimientoScoop,
    costoCarguio
  };
}
