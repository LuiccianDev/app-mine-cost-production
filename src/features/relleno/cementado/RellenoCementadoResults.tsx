import type { RellenoCementadoResultados } from './rellenoCementadoCalculations'

type RellenoCementadoResultsProps = {
  resultados: RellenoCementadoResultados
}

export default function RellenoCementadoResults({ resultados }: RellenoCementadoResultsProps) {
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
          <span className="text-sm text-gray-600">Costo Material Relleno 2.5%</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoMaterialRelleno35)
              ? resultados.costoMaterialRelleno35.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Costo Total Relleno 2.5%</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoTotalRelleno35)
              ? resultados.costoTotalRelleno35.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Costo Material Relleno 3.0%</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoMaterialRelleno30)
              ? resultados.costoMaterialRelleno30.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Costo Total Relleno 3.0%</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoTotalRelleno30)
              ? resultados.costoTotalRelleno30.toFixed(2)
              : '-'}
          </span>
        </div>
      </div>
    </div>
  )
}
