import type { CostoPerforacionResultados } from '@/src/types/costoPerforacion.types'

type CostoPerforacionResultsProps = {
  resultados: CostoPerforacionResultados
}

export default function CostoPerforacionResults({ resultados }: CostoPerforacionResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value)

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resultados</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Costo Perforación (US$/m)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoPerforacionPorMetro)
              ? resultados.costoPerforacionPorMetro.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Costo Perforación (US$/Ton)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoPerforacionPorTon)
              ? resultados.costoPerforacionPorTon.toFixed(2)
              : '-'}
          </span>
        </div>
      </div>
    </div>
  )
}
