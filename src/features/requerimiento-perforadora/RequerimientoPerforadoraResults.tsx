import type { RequerimientoPerforadoraResultados } from '@/src/types/requerimientoPerforadora.types'

type RequerimientoPerforadoraResultsProps = {
  resultados: RequerimientoPerforadoraResultados
}

export default function RequerimientoPerforadoraResults({
  resultados,
}: RequerimientoPerforadoraResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value)

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resultados</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Nº Perforadoras</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.numeroPerforadoras)
              ? resultados.numeroPerforadoras.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Metros Perforado (m/día)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.metrosPerforadosPorDia)
              ? resultados.metrosPerforadosPorDia.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Pies Perforado (pies/día)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.piesPerforadosPorDia)
              ? resultados.piesPerforadosPorDia.toFixed(2)
              : '-'}
          </span>
        </div>
      </div>
    </div>
  )
}
