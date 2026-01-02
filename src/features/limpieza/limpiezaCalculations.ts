import { type LimpiezaData as LimpiezaFormData, type LimpiezaResultados } from "@/src/types/limpieza.types";

export const defaultLimpiezaValues = {
  produccionMineral: 1451.67,
  produccionDesmonte: 0.00,
  mineralMasDesmonte: 1451.67,
  capacidadCuchara: 5.00,
  factorCuchara:75,
  densidadRotaMaterial: 2.70,
  tiempoPase: 480.00,
  disponibilidadMecanica: 80.00,
  disponibilidadOperativa: 80.00,
  horasPorGuardia: 10.00,
  numeroGuardiasPorDia: 2.00,
  costoHoraEquipo: 60.00,
};

export function calcularLimpieza(data: LimpiezaFormData): LimpiezaResultados {
  const {
    capacidadCuchara,
    densidadRotaMineral,
    factorCuchara,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    mineralMasDesmonte,
    costoHoraDeEquipo
  } = data;

  // TONELADA POR PASE (SCOOP) = Yd3/Pase × Densid.rota × Factor Cuchara
  const toneladaPorPase = capacidadCuchara * densidadRotaMineral * factorCuchara * 0.765 /100;

  // Nº DE PASES POR HORA = 1 Hr / Tiempo de 1 pase
  const numeroPasesPorHora = 60 / (tiempoDeUnPase / 60);

  // PRODUCCION (Ton/Hr) = Ton/Pase × Pases/Hr × Disponib.Mecanica × Disponib.Operativa
  const produccionTonPorHora = toneladaPorPase * numeroPasesPorHora * (disponibilidadMecanica / 100) * (disponibilidadOperativa / 100);

  // PRODUCCION (Ton/Dia) = Produccion (Ton/Hr) × (Hr/Guardia) × (Nº guardia/dia)
  const produccionTonPorDia = produccionTonPorHora * numeroHorasPorGuardia * numeroGuardiasPorDia;

  // REQUERIMIENTO DE SCOOPS = (Material Ton/dia) / (Produccion Ton/dia)
  const requerimientoScoops = mineralMasDesmonte / produccionTonPorDia;

  // COSTO DE LIMPIEZA (US$/Ton) = (Costo por Hr del Equipo) / (Produccion Ton/Hr)
  const costoLimpieza = costoHoraDeEquipo / produccionTonPorHora;

  return {
    toneladaPorPase,
    numeroPasesPorHora,
    produccionTonPorHora,
    produccionTonPorDia,
    requerimientoScoops,
    costoLimpieza
  };
}
