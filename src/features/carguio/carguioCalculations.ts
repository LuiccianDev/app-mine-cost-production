import { type CarguioData, type CarguioResultados } from '@/src/types/carguio.types'
import { type SharedData } from '@/src/types/shared.types'

// Tipo combinado para los cálculos
type CarguioCalculationData = CarguioData & Pick<SharedData, 'produccionMina'>

export function calcularCarguio(data: CarguioCalculationData): CarguioResultados {
  const {
    capacidadCuchara,
    densidadRotaMineral,
    factorCuchara,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    produccionMina,
    costoHoraDeEquipo,
  } = data

  // TONELADA POR PASE (SCOOP) = Yd3/Pase × Densid.rota × Factor Cuchara
  const toneladaPorPase = (capacidadCuchara * densidadRotaMineral * factorCuchara * 0.765) / 100 // 0,765 es yd3 a m3
  // Nº DE PASES POR HORA = 1 Hr / Tiempo de 1 pase
  const numeroPasesPorHora = 60 / (tiempoDeUnPase / 60)

  // PRODUCCION (Ton/Hr) = Ton/Pase × Pases/Hr × Disponib.Mecanica × Disponib.Operativa
  const produccionTonPorHora =
    toneladaPorPase *
    numeroPasesPorHora *
    (disponibilidadMecanica / 100) *
    (disponibilidadOperativa / 100)

  // PRODUCCION (Ton/Dia) = Produccion (Ton/Hr) × (Hr/Guardia) × (Nº guardia/dia)
  const produccionTonPorDia = produccionTonPorHora * numeroHorasPorGuardia * numeroGuardiasPorDia

  // REQUERIMIENTO DE SCOOP = (Material Ton/dia) / (Produccion Ton/dia)
  const requerimientoScoop = produccionMina / produccionTonPorDia

  // COSTO DE CARGUIO (US$/Ton) = (Costo por Hr del Equipo) / (Produccion Ton/Hr)
  const costoCarguio = costoHoraDeEquipo / produccionTonPorHora

  return {
    toneladaPorPase,
    numeroPasesPorHora,
    produccionTonPorHora,
    produccionTonPorDia,
    requerimientoScoop,
    costoCarguio,
  }
}
