import { type MallaResultados } from '@/src/types/malla.types'

export default function MallaResultados({ resultados }: { resultados: MallaResultados }) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value)

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resultados</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Burde (m)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.burden) ? resultados.burden.toFixed(2) : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Espaciamiento (m)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.espaciamiento) ? resultados.espaciamiento.toFixed(2) : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Volumen (m³)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.volumenRotaTaladro)
              ? resultados.volumenRotaTaladro.toFixed(2)
              : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Tonelaje (Ton/taladro)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.tonelajePerforado) ? resultados.tonelajePerforado.toFixed(2) : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Libras de anfo (lib/taladro)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.librasAnfo) ? resultados.librasAnfo.toFixed(2) : '-'}
          </span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-gray-600">Altura de Carga (m)</span>
          <span className="text-sm font-medium text-gray-900">
            {isValid(resultados.alturaCarga) ? resultados.alturaCarga.toFixed(2) : '-'}
          </span>
        </div>
      </div>
    </div>
  )
}
