'use client'

import { useEffect } from 'react'
import MallaForm from './MallaInputs'
import MallaResultados from './MallaResults'
import { calcularMalla } from './mallaCalculations'
import { useMallaStore, useSharedStore, usePDFStore } from '@/src/stores'

export default function MallaSection() {
  const { alturaBanco, setTonelajePerforado: setSharedTonelaje } = useSharedStore()

  const { densidadMaterial, factorPotencia, diametroTaladro, densidadAnfo } = useMallaStore()

  /*  */

  const resultados = calcularMalla({
    alturaBanco,
    densidadMaterial,
    factorPotencia,
    diametroTaladro,
    densidadAnfo,
  })

  /* guardar los resulatdo con Zustand*/

  const {
    setBurden,
    setEspaciamiento,
    setVolumenRotaTaladro,
    setTonelajePerforado,
    setLibrasAnfo,
    setAlturaCarga,

    /* Suma de costo total de minado  */
    costoPerforacionTon,
    costoVoladura,
    costoLimpieza,
    costoCarguio,
    costoTransporte,
    costoTotalRelleno35,
    costoTotalRellenoRD,

    setCostoMinadoProyectado,
    setCostoMinado,
  } = usePDFStore()

  /* suma conto total de minado */
  const costoMinadoProyectado = 11.92
  const costoMinado =
    costoPerforacionTon +
    costoVoladura +
    costoLimpieza +
    costoCarguio +
    costoTransporte +
    costoTotalRelleno35 +
    costoTotalRellenoRD

  // CORRECTO: Actualiza Zustand solo cuando cambian los resultados
  useEffect(() => {
    setBurden(resultados.burden)
    setEspaciamiento(resultados.espaciamiento)
    setVolumenRotaTaladro(resultados.volumenRotaTaladro)
    setTonelajePerforado(resultados.tonelajePerforado)
    setLibrasAnfo(resultados.librasAnfo)
    setAlturaCarga(resultados.alturaCarga)
    setCostoMinadoProyectado(costoMinadoProyectado)
    setCostoMinado(costoMinado)

    // Sincronizar tonelajePerforado con el store compartido
    setSharedTonelaje(resultados.tonelajePerforado)
  }, [
    resultados.burden,
    resultados.espaciamiento,
    resultados.volumenRotaTaladro,
    resultados.tonelajePerforado,
    resultados.librasAnfo,
    resultados.alturaCarga,
    setBurden,
    setEspaciamiento,
    setVolumenRotaTaladro,
    setTonelajePerforado,
    setLibrasAnfo,
    setAlturaCarga,
    costoMinadoProyectado,
    costoMinado,
    setCostoMinadoProyectado,
    setCostoMinado,
    setSharedTonelaje,
  ])

  return (
    <div className="flex w-full flex-col">
      <div className="w-full min-w-0 p-6">
        <MallaForm resultsComponent={<MallaResultados resultados={resultados} />} />
      </div>
    </div>
  )
}
