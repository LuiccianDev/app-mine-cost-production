import type { RellenoDetriticoResultados } from './rellenoDetriticoCalculations'

type RellenoDetriticoResultsProps = {
  resultados: RellenoDetriticoResultados
}

export default function RellenoDetriticoResults({ resultados }: RellenoDetriticoResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value)

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resultados</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Tonelada por Pase</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.toneladaPorPase) ? resultados.toneladaPorPase.toFixed(2) : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Nº de Pases por Hora</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.numeroPasesPorHora)
              ? resultados.numeroPasesPorHora.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Producción (Ton/Hr)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.produccionTonPorHora)
              ? resultados.produccionTonPorHora.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Producción (Ton/día)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.produccionTonPorDia)
              ? resultados.produccionTonPorDia.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Requerimiento de Scoop</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.requerimientoScoop)
              ? resultados.requerimientoScoop.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Costo de Transporte (US$/Ton)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoTransporte) ? resultados.costoTransporte.toFixed(2) : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Costo Material Relleno (US$/Ton)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoMaterialRelleno)
              ? resultados.costoMaterialRelleno.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Costo Total Relleno (US$/Ton)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoTotalRelleno) ? resultados.costoTotalRelleno.toFixed(2) : '-'}
          </span>
        </div>
      </div>
    </div>
  )
}
