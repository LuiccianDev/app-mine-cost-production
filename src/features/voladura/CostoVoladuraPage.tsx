'use client'

import { useEffect } from 'react'
import CostoVoladuraInputs from './CostoVoladuraInputs'
import CostoVoladuraResults from './CostoVoladuraResults'
import { calculateCostoVoladura } from './costoVoladuraCalculations'
import { useCostosVoladurasStore } from '@/src/stores/useMalla'
import { useSharedStore } from '@/src/stores/useSharedStore'
import { usePDFStore } from '@/src/stores/usePDF'

export default function CostoVoladuraPage() {
  const { tonelajePerforado } = useSharedStore()

  /* Get values  */
  const {
    costoAnfo,
    costoDinamita,
    costoRetardoFanel,
    costoCordonDetonante,
    costoCamionAnfoCar,
    costoChispeo,
    costoManoDeObra,
    pentacordEmpleado,
    tiempoCarguioAnfoCar,
    mechaRapidaEmpleada,
    numeroHombresCarguio,
    tiempoEmpleadoCarguio,
  } = useCostosVoladurasStore()

  /* Get resultt */
  const resultados = calculateCostoVoladura({
    costoAnfo,
    costoDinamita,
    costoRetardoFanel,
    costoCordonDetonante,
    costoCamionAnfoCar,
    costoChispeo,
    costoManoDeObra,
    tonelajePerforado,
    pentacordEmpleado,
    tiempoCarguioAnfoCar,
    mechaRapidaEmpleada,
    numeroHombresCarguio,
    tiempoEmpleadoCarguio,
  })

  /* guardar los resulatdo con Zustand*/

  const { setCostoVoladura } = usePDFStore()

  useEffect(() => {
    setCostoVoladura(resultados.costoVoladuraPorTonelada)
  }, [resultados.costoVoladuraPorTonelada, setCostoVoladura])

  return (
    <div className="flex w-full flex-col">
      <div className="w-full min-w-0 p-6">
        <CostoVoladuraInputs resultsComponent={<CostoVoladuraResults resultados={resultados} />} />
      </div>
    </div>
  )
}
