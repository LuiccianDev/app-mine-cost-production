import type { CostoVoladuraResultsData } from '@/src/types/costoVoladura.types'

type CostoVoladuraResultsProps = {
  resultados: CostoVoladuraResultsData
}

export default function CostoVoladuraResults({ resultados }: CostoVoladuraResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value)

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resultados</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Costo de Voladura (US$/Ton)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoVoladuraPorTonelada)
              ? resultados.costoVoladuraPorTonelada.toFixed(3)
              : '-'}
          </span>
        </div>
      </div>
    </div>
  )
}
