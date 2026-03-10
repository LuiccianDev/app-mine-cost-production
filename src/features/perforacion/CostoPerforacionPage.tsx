'use client'

import { useEffect } from 'react'
import CostoPerforacionInputs from './CostoPerforacionInputs'
import CostoPerforacionResults from './CostoPerforacionResults'
import { calcularCostoPerforacion } from './costoPerforacionCalculations'
import { useCostosPerforacionStore, useSharedStore, usePDFStore } from '@/src/stores'

export default function CostoPerforacionPage() {
  const { costoBrocaAccesorios, costoEquipoPerforacion } = useCostosPerforacionStore()
  const { tiempoPerforacion, rendimientoBroca, tonelajePerforado, alturaBanco } = useSharedStore()

  const resultados = calcularCostoPerforacion({
    costoBrocaAccesorios,
    costoEquipoPerforacion,
    tiempoPerforacion,
    rendimientoBroca,
    tonelajePerforado,
    alturaBanco,
  })

  /* guardar los resulatdo con Zustand*/
  const { setCostoPerforacionMetro, setCostoPerforacionTon } = usePDFStore()

  useEffect(() => {
    setCostoPerforacionMetro(resultados.costoPerforacionPorMetro)
    setCostoPerforacionTon(resultados.costoPerforacionPorTon)
  }, [
    resultados.costoPerforacionPorMetro,
    resultados.costoPerforacionPorTon,
    setCostoPerforacionMetro,
    setCostoPerforacionTon,
  ])

  return (
    <div className="flex w-full flex-col">
      <div className="w-full min-w-0 p-6">
        <CostoPerforacionInputs
          resultsComponent={<CostoPerforacionResults resultados={resultados} />}
        />
      </div>
    </div>
  )
}
