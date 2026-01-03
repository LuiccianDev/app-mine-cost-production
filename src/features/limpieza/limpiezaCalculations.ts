import { type LimpiezaData, type LimpiezaResultados } from "@/src/types/limpieza.types";
import { type SharedData } from "@/src/types/shared.types";

// Tipo combinado para los cálculos
type LimpiezaCalculationData = LimpiezaData & Pick<SharedData, 'produccionMina'>;

export function calcularLimpieza(data: LimpiezaCalculationData): LimpiezaResultados {
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
