'use client'

import { useEffect } from 'react'
import RellenoCementadoInputs from './RellenoCementadoInputs'
import RellenoCementadoResults from './RellenoCementadoResults'
import { calcularRellenoCementado } from './rellenoCementadoCalculations'
import { useRellenoCementadoStore, usePDFStore } from '@/src/stores'

export default function RellenoCementadoPage() {
  const {
    produccionMineral,
    produccionRelleno,
    capacidadCuchara,
    factorCuchara,
    densidadRotaMaterialRelleno,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    costoHoraEquipo,
    densidadMineral,
    costoPreparacionAgregados,
    costoPreparacionPlantaConcreto,
    costoTransporteRelaveChura,
    costoCemento,
  } = useRellenoCementadoStore()

  const resultados = calcularRellenoCementado({
    produccionMineral,
    produccionRelleno,
    capacidadCuchara,
    factorCuchara,
    densidadRotaMaterialRelleno,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    costoHoraEquipo,
    densidadMineral,
    costoPreparacionAgregados,
    costoPreparacionPlantaConcreto,
    costoTransporteRelaveChura,
    costoCemento,
  })

  /* guardar los resulatdo con Zustand*/

  const {
    /* Add sum total scoops */
    requerimientoScoopsLimpieza,
    requerimientoScoopsCarguio,
    requerimientoScoopRelleno,

    setCostoTransporteRC,
    setCostoMaterialRelleno,
    setCostoTotalRelleno35,
    setCostoTotalRelleno30,
    setRequerimientoScoopRelleno,
    setTotalScoops,
  } = usePDFStore()

  const totalScoops =
    requerimientoScoopsLimpieza + requerimientoScoopsCarguio + requerimientoScoopRelleno

  useEffect(() => {
    setCostoTransporteRC(resultados.costoTransporte)
    setCostoMaterialRelleno(resultados.costoMaterialRelleno35)
    setCostoTotalRelleno35(resultados.costoTotalRelleno35)
    setCostoTotalRelleno30(resultados.costoTotalRelleno30)
    setRequerimientoScoopRelleno(resultados.requerimientoScoop) // Section two Requerimiento Equipos
    setTotalScoops(totalScoops)
  }, [
    resultados.costoTransporte,
    resultados.costoMaterialRelleno35,
    resultados.costoTotalRelleno35,
    resultados.costoTotalRelleno30,
    resultados.requerimientoScoop,
    totalScoops, //! suma de los scoops
    setTotalScoops, //* guardar en Zustand
    setCostoTransporteRC,
    setCostoMaterialRelleno,
    setCostoTotalRelleno35,
    setCostoTotalRelleno30,
    setRequerimientoScoopRelleno,
  ])

  return (
    <div className="flex w-full flex-col">
      <div className="w-full min-w-0 p-6">
        <RellenoCementadoInputs
          resultsComponent={<RellenoCementadoResults resultados={resultados} />}
        />
      </div>
    </div>
  )
}
