'use client'

import { useEffect } from 'react'
import TransporteInputs from './TransporteInputs'
import TransporteResults from './TransporteResults'
import { calcularTransporte } from './transporteCalculations'
import { useTransporteStore } from '@/src/stores/useMalla'
import { usePDFStore } from '@/src/stores/usePDF'

export default function TransportePage() {
  const {
    capacidadCamion,
    eficienciaLlenado,
    tiempoAcarreo,
    tiempoRetorno,
    tiempoCargaDescarga,
    tiempoCarguio,
    cicloCamion,
    disponibilidadOperativaCamion,
    disponibilidadMecanicaCamion,
    requerimientoScoop,
    costoHoraCamion,
    costoMantenimientoCamion,
    tiempoCarguioCamionTolva,
  } = useTransporteStore()

  const resultados = calcularTransporte({
    capacidadCamion,
    eficienciaLlenado,
    tiempoAcarreo,
    tiempoRetorno,
    tiempoCargaDescarga,
    tiempoCarguio,
    cicloCamion,
    disponibilidadOperativaCamion,
    disponibilidadMecanicaCamion,
    requerimientoScoop,
    costoHoraCamion,
    costoMantenimientoCamion,
    tiempoCarguioCamionTolva,
  })

  /* guardar los resulatdo con Zustand*/

  const {
    setFlotaCamiones,
    setProduccionFlotaCamiones,
    setCostoTransporte,
    setFlotaCamionesTransporte,
  } = usePDFStore()

  useEffect(() => {
    setFlotaCamiones(resultados.flotaCamiones)
    setProduccionFlotaCamiones(resultados.produccionFlotaCamiones)
    setCostoTransporte(resultados.costoTransporte)
    setFlotaCamionesTransporte(resultados.flotaCamiones)
  }, [
    resultados.flotaCamiones,
    resultados.produccionFlotaCamiones,
    resultados.costoTransporte,
    setFlotaCamiones,
    setProduccionFlotaCamiones,
    setCostoTransporte,
    setFlotaCamionesTransporte,
  ])

  /* Auxilir para poner los Requerimentio equioi sections
   */
  return (
    <div className="flex w-full flex-col">
      <div className="w-full min-w-0 p-6">
        <TransporteInputs resultsComponent={<TransporteResults resultados={resultados} />} />
      </div>
    </div>
  )
}
