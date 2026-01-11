'use client'

import { useCarguioStore } from '@/src/stores/useMalla'
import { useSharedStore } from '@/src/stores/useSharedStore'
import CarguioInputs from './CarguioInputs'
import CarguioResults from './CarguioResults'
import { calcularCarguio } from './carguioCalculations'
import { usePDFStore } from '@/src/stores/usePDF'
import { useEffect } from 'react'

export default function CarguioPage() {
  const { produccionMina } = useSharedStore()

  const {
    ratioDM,
    produccionDesmonte,
    mineralMasDesmonte,
    capacidadCuchara,
    factorCuchara,
    densidadRotaMineral,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    costoHoraDeEquipo,
  } = useCarguioStore()

  const resultados = calcularCarguio({
    produccionMina,
    ratioDM,
    produccionDesmonte,
    mineralMasDesmonte,
    capacidadCuchara,
    factorCuchara,
    densidadRotaMineral,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    costoHoraDeEquipo,
  })

  /* guardar los resulatdo con Zustand*/

  const { setRequerimientoScoop, setCostoCarguio, setRequerimientoScoopsCarguio } = usePDFStore()

  useEffect(() => {
    setRequerimientoScoop(resultados.requerimientoScoop)
    setCostoCarguio(resultados.costoCarguio)
    setRequerimientoScoopsCarguio(resultados.requerimientoScoop) // Section two Requerimiento Equipos
  }, [
    resultados.requerimientoScoop,
    resultados.costoCarguio,
    setRequerimientoScoop,
    setCostoCarguio,
    setRequerimientoScoopsCarguio,
  ])

  return (
    <div className="flex w-full flex-col">
      <div className="w-full min-w-0 p-6">
        <CarguioInputs resultsComponent={<CarguioResults resultados={resultados} />} />
      </div>
    </div>
  )
}
