import { useState } from 'react'
import FormField from '../../components/ui/FormField'
import { useMallaStore } from '@/src/stores/useMalla'
import { useSharedStore } from '@/src/stores/useSharedStore'

import { motion, AnimatePresence } from 'motion/react'

type MallaFormProps = {
  resultsComponent?: React.ReactNode
}

export default function MallaForm({ resultsComponent }: MallaFormProps) {
  const [isOpen, setIsOpen] = useState(false)

  const { alturaBanco, setAlturaBanco } = useSharedStore()

  const {
    densidadMaterial,
    factorPotencia,
    diametroTaladro,
    densidadAnfo,
    setDensidadMaterial,
    setFactorPotencia,
    setDiametroTaladro,
    setDensidadAnfo,
  } = useMallaStore()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Malla de Perforación</h2>
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
          label="Altura de Banco"
          name="alturaBanco"
          value={alturaBanco}
          onChange={(e) => setAlturaBanco(parseFloat(e.target.value) || 0)}
          unit="m"
        />
        <FormField
          label="Densidad del Material"
          name="densidadMaterial"
          value={densidadMaterial}
          onChange={(e) => setDensidadMaterial(parseFloat(e.target.value) || 0)}
          unit="ton/m³"
        />
        <FormField
          label="Factor de Potencia"
          name="factorPotencia"
          value={factorPotencia}
          onChange={(e) => setFactorPotencia(parseFloat(e.target.value) || 0)}
          unit="lib/ton"
        />
        <FormField
          label="Diametro Taladro"
          name="diametroTaladro"
          value={diametroTaladro}
          onChange={(e) => setDiametroTaladro(parseFloat(e.target.value) || 0)}
          unit="pulg"
        />
        <FormField
          label="Densidad de Anfo"
          name="densidadAnfo"
          value={densidadAnfo}
          onChange={(e) => setDensidadAnfo(parseFloat(e.target.value) || 0)}
          unit="g/cm³"
        />
      </div>

      <AnimatePresence initial={false} mode="wait">
        {isOpen && resultsComponent && (
          <motion.div
            key="results"
            layout
            className="mt-6 border-t border-gray-200 pt-6"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
          >
            {resultsComponent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
