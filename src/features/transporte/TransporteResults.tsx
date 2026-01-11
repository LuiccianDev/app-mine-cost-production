import type { TransporteResultados } from '@/src/types/transporte.types'

type TransporteResultsProps = {
  resultados: TransporteResultados
}

export default function TransporteResults({ resultados }: TransporteResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value)

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resultados</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Ciclo Total de un Camión (min)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.cicloTotalCamion) ? resultados.cicloTotalCamion.toFixed(2) : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Nº de Viajes por Hr</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.numeroViajesPorHora)
              ? resultados.numeroViajesPorHora.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Producción de 1 Camión (Ton/Hr)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.produccionCamion) ? resultados.produccionCamion.toFixed(2) : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Nº Camiones por Tolva</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.numeroCamionesPorTolva)
              ? resultados.numeroCamionesPorTolva.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Flota de Camiones</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.flotaCamiones) ? resultados.flotaCamiones.toFixed(2) : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Camiones en Operación</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.camionesOperacion) ? resultados.camionesOperacion : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Camiones en Stand By</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.camionesStandBy) ? resultados.camionesStandBy : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Producción de Flota (Ton/Hr)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.produccionFlotaCamiones)
              ? resultados.produccionFlotaCamiones.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Costo de Transporte (US$/Ton)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.costoTransporte) ? resultados.costoTransporte.toFixed(2) : '-'}
          </span>
        </div>
      </div>
    </div>
  )
}
