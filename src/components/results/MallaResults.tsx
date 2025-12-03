
import type { MallaResultados } from '../../scripts/mallaCalculations';

type MallaResultadosProps = {
  resultados: MallaResultados;
};

export default function MallaResultados({ resultados }: MallaResultadosProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resultados</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Burde (m)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.burden) ? resultados.burden.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Espaciamiento (m)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.espaciamiento) ? resultados.espaciamiento.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Volumen (m³)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.volumenRotaTaladro) ? resultados.volumenRotaTaladro.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Tonelaje (Ton/taladro)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.tonelaje) ? resultados.tonelaje.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Libras de anfo (lib/taladro)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.librasAnfo) ? resultados.librasAnfo.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Altura de Carga (m)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.alturaCarga) ? resultados.alturaCarga.toFixed(2) : '-'}</span>
        </div>
      </div>
    </div>
  );
}
