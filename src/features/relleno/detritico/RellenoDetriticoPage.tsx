'use client'

import { useEffect } from 'react'
import RellenoDetriticoInputs from './RellenoDetriticoInputs'
import RellenoDetriticoResults from './RellenoDetriticoResults'
import { calcularRellenoDetritico } from './rellenoDetriticoCalculations'
import { useRellenoDetriticoStore, usePDFStore } from '@/src/stores'

export default function RellenoDetriticoPage() {
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
    costoTransporteDesmonte,
  } = useRellenoDetriticoStore()

  const resultados = calcularRellenoDetritico({
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
    costoTransporteDesmonte,
  })

  /* guardar los resulatdo con Zustand*/

  const { setCostoTransporteRD, setCostoMaterialRellenoRD, setCostoTotalRellenoRD } = usePDFStore()

  useEffect(() => {
    setCostoTransporteRD(resultados.costoTransporte)
    setCostoMaterialRellenoRD(resultados.costoMaterialRelleno)
    setCostoTotalRellenoRD(resultados.costoTotalRelleno)
  }, [
    resultados.costoTransporte,
    resultados.costoMaterialRelleno,
    resultados.costoTotalRelleno,
    setCostoTransporteRD,
    setCostoMaterialRellenoRD,
    setCostoTotalRellenoRD,
  ])

  return (
    <div className="flex w-full flex-col">
      <div className="w-full min-w-0 p-6">
        <RellenoDetriticoInputs
          resultsComponent={<RellenoDetriticoResults resultados={resultados} />}
        />
      </div>
    </div>
  )
}
