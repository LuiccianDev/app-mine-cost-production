import { useCostosPerforacionStore } from '@/src/stores/useMalla'
import { useSharedStore } from '@/src/stores/useSharedStore'
import FormField from '../../components/ui/FormField'
import { useState } from 'react'

type CostoPerforacionInputsProps = {
  resultsComponent?: React.ReactNode
}

export default function CostoPerforacionInputs({ resultsComponent }: CostoPerforacionInputsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const {
    costoBrocaAccesorios,
    costoEquipoPerforacion,
    setCostoBrocaAccesorios,
    setCostoEquipoPerforacion,
  } = useCostosPerforacionStore()

  const {
    tiempoPerforacion,
    rendimientoBroca,
    tonelajePerforado,
    alturaBanco,
    setTiempoPerforacion,
    setRendimientoBroca,
    setTonelajePerforado,
    setAlturaBanco,
  } = useSharedStore()

  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Costo de Perforación</h2>
        <button
          onClick={handleClick}
          className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          <span>{isOpen ? 'Cerrar Resultados' : 'Ver Resultados'}</span>
          <svg
            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <FormField
          label="Costo Broca + Accesorios"
          name="costoBrocaAccesorios"
          value={costoBrocaAccesorios}
          onChange={(e) => setCostoBrocaAccesorios(parseFloat(e.target.value) || 0)}
          unit="$/und"
        />
        <FormField
          label="Costo equipo Perforacion"
          name="costoEquipoPerforacion"
          value={costoEquipoPerforacion}
          onChange={(e) => setCostoEquipoPerforacion(parseFloat(e.target.value) || 0)}
          unit="$/h"
        />
        <FormField
          label="Tiempo de Perforac. (Rend. Broca)"
          name="tiempoPerforacion"
          value={tiempoPerforacion}
          onChange={(e) => setTiempoPerforacion(parseFloat(e.target.value) || 0)}
          unit="hr"
        />
        <FormField
          label="Rendimiento Broca"
          name="rendimientoBroca"
          value={rendimientoBroca}
          onChange={(e) => setRendimientoBroca(parseFloat(e.target.value) || 0)}
          unit="m /broca"
        />
        <FormField
          label="Tonelaje"
          name="tonelajePerforado"
          value={tonelajePerforado}
          onChange={(e) => setTonelajePerforado(parseFloat(e.target.value) || 0)}
          unit="ton / taladro"
          decimals={2}
        />
        <FormField
          label="Altura de banco" /* misma  */
          name="alturaBanco"
          value={alturaBanco}
          onChange={(e) => setAlturaBanco(parseFloat(e.target.value) || 0)}
          unit="m"
          decimals={2}
        />
      </div>

      {isOpen && resultsComponent && (
        <div className="mt-6 border-t border-gray-200 pt-6">{resultsComponent}</div>
      )}
    </div>
  )
}
