import {
  type CostoVoladuraData,
  type CostoVoladuraResultsData,
} from '@/src/types/costoVoladura.types'
import { type SharedData } from '@/src/types/shared.types'

// Tipo combinado para los cálculos
type CostoVoladuraCalculationData = CostoVoladuraData & Pick<SharedData, 'tonelajePerforado'>

export function calculateCostoVoladura(
  inputs: CostoVoladuraCalculationData,
): CostoVoladuraResultsData {
  // Los consumos vienen de cálculos previos de la malla
  // Para este ejemplo, usaremos valores fijos basados en la imagen
  // En producción, estos vendrían de los cálculos de malla

  const consumoAnfo = 48.98 // lb/taladro
  const consumoDinamita = 1.5 // cart/taladro
  const consumoRetardos = 1 // unid/taladro
  const consumoPentacord = inputs.pentacordEmpleado * 3.28084 // convertir m a pies: 46.71 pies
  const consumoCamion = inputs.tiempoCarguioAnfoCar // 0.14 hr/taladro
  const consumoChispeo = inputs.mechaRapidaEmpleada // 14 pies
  const consumoManoObra = inputs.tiempoEmpleadoCarguio // 0.4 hr/taladro

  // Calcular totales por item
  const totalAnfo = inputs.costoAnfo * consumoAnfo
  const totalDinamita = inputs.costoDinamita * consumoDinamita
  const totalRetardos = inputs.costoRetardoFanel * consumoRetardos
  const totalPentacord = inputs.costoCordonDetonante * consumoPentacord
  const totalCamion = inputs.costoCamionAnfoCar * consumoCamion
  const totalChispeo = inputs.costoChispeo * consumoChispeo
  const totalManoObra = inputs.costoManoDeObra * consumoManoObra

  // Total por taladro
  const costoTotalPorTaladro =
    totalAnfo +
    totalDinamita +
    totalRetardos +
    totalPentacord +
    totalCamion +
    totalChispeo +
    totalManoObra

  // Costo por tonelada
  const costoVoladuraPorTonelada = costoTotalPorTaladro / inputs.tonelajePerforado

  return {
    consumoAnfo,
    consumoDinamita,
    consumoRetardos,
    consumoPentacord,
    consumoCamion,
    consumoChispeo,
    consumoManoObra,
    totalAnfo,
    totalDinamita,
    totalRetardos,
    totalPentacord,
    totalCamion,
    totalChispeo,
    totalManoObra,
    costoTotalPorTaladro,
    costoVoladuraPorTonelada,
  }
}
