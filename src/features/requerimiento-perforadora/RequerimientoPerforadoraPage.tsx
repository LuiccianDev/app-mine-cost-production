'use client'

import { useEffect } from 'react'
import RequerimientoPerforadoraInputs from './RequerimientoPerforadoraInputs'
import RequerimientoPerforadoraResults from './RequerimientoPerforadoraResults'
import { calcularRequerimientoPerforadora } from './requerimientoPerforadoraCalculations'
import { useRequerimientoPerforadoraStore, useSharedStore, usePDFStore } from '@/src/stores'

export default function RequerimientoPerforadoraPage() {
  const { produccionMina, alturaBanco, tonelajePerforado, rendimientoBroca, tiempoPerforacion } =
    useSharedStore()

  const {
    longuitudTaladro,
    horasProgramadas,
    horasTrabajadas,
    eficienciaPerforadora,
    produccionTPM,
    diasOperacion,
    produccionTPD,
  } = useRequerimientoPerforadoraStore()

  const resultados = calcularRequerimientoPerforadora({
    produccionMina,
    alturaBanco,
    longuitudTaladro,
    tonelajePerforado,
    rendimientoBroca,
    tiempoPerforacion,
    horasProgramadas,
    horasTrabajadas,
    eficienciaPerforadora,
    produccionTPM,
    diasOperacion,
    produccionTPD,
  })

  /* guardar los resulatdo con Zustand*/
  const { setNumeroPerforadoras, setMetrosPerforado, setRequerimientoPerforadora } = usePDFStore()
  useEffect(() => {
    setNumeroPerforadoras(resultados.numeroPerforadoras)
    setMetrosPerforado(resultados.metrosPerforadosPorDia)
    setRequerimientoPerforadora(resultados.numeroPerforadoras) // Section two Reqiiuerimiento Equipos
  }, [
    resultados.numeroPerforadoras,
    resultados.metrosPerforadosPorDia,
    setNumeroPerforadoras,
    setMetrosPerforado,
    setRequerimientoPerforadora,
  ])

  return (
    <div className="flex w-full flex-col">
      <div className="w-full min-w-0 p-6">
        <RequerimientoPerforadoraInputs
          resultsComponent={<RequerimientoPerforadoraResults resultados={resultados} />}
        />
      </div>
    </div>
  )
}
