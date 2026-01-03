import { useState } from 'react'
import FormField from '../../components/ui/FormField'
import { useCostosVoladurasStore } from '@/src/stores/useMalla'
import { useSharedStore } from '@/src/stores/useSharedStore'

type CostoVoladuraInputsProps = {
  resultsComponent?: React.ReactNode
}

export default function CostoVoladuraInputs({ resultsComponent }: CostoVoladuraInputsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const { tonelajePerforado, setTonelajePerforado } = useSharedStore()

  const {
    costoAnfo,
    costoDinamita,
    costoRetardoFanel,
    costoCordonDetonante,
    costoCamionAnfoCar,
    costoChispeo,
    costoManoDeObra,
    setCostoAnfo,
    setCostoDinamita,
    setCostoRetardoFanel,
    setCostoCordonDetonante,
    setCostoCamionAnfoCar,
    setCostoChispeo,
    setCostoManoDeObra,
  } = useCostosVoladurasStore()

  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Costo de Voladura</h2>
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
          label="Costo Anfo"
          name="costoAnfo"
          value={costoAnfo}
          onChange={(e) => setCostoAnfo(parseFloat(e.target.value) || 0)}
          unit="US$/Lib"
        />
        <FormField
          label="Costo Dinamita"
          name="costoDinamita"
          value={costoDinamita}
          onChange={(e) => setCostoDinamita(parseFloat(e.target.value) || 0)}
          unit="US$/Cartucho"
        />
        <FormField
          label="Costo Retardos Fanel"
          name="costoRetardoFanel"
          value={costoRetardoFanel}
          onChange={(e) => setCostoRetardoFanel(parseFloat(e.target.value) || 0)}
          unit="US$/Unidad"
        />
        <FormField
          label="Costo Cordón Detonante"
          name="costoCordonDetonante"
          value={costoCordonDetonante}
          onChange={(e) => setCostoCordonDetonante(parseFloat(e.target.value) || 0)}
          unit="US$/Pie"
        />
        <FormField
          label="Costo Camión Anfocar"
          name="costoCamionAnfocar"
          value={costoCamionAnfoCar}
          onChange={(e) => setCostoCamionAnfoCar(parseFloat(e.target.value) || 0)}
          unit="US$/Hr"
        />
        <FormField
          label="Costo Chispeo"
          name="costoChispeo"
          value={costoChispeo}
          onChange={(e) => setCostoChispeo(parseFloat(e.target.value) || 0)}
          unit="US$/Pie"
        />
        <FormField
          label="Costo Mano de Obra"
          name="costoManoDeObra"
          value={costoManoDeObra}
          onChange={(e) => setCostoManoDeObra(parseFloat(e.target.value) || 0)}
          unit="US$/Hr"
        />
        <FormField
          label="Tonelaje por Taladro"
          name="tonelajePerforado"
          value={tonelajePerforado}
          onChange={(e) => setTonelajePerforado(parseFloat(e.target.value) || 0)}
          unit="Ton/Taladro"
          decimals={2}
        />
      </div>

      {isOpen && resultsComponent && (
        <div className="mt-6 border-t border-gray-200 pt-6">{resultsComponent}</div>
      )}
    </div>
  )
}
