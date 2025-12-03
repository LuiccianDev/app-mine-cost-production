import type { RellenoCementadoResultados } from '../../scripts/rellenoCementadoCalculations';

type RellenoCementadoResultsProps = {
  resultados: RellenoCementadoResultados;
};

export default function RellenoCementadoResults({ resultados }: RellenoCementadoResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resultados</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Tonelada por Pase</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.toneladaPorPase) ? resultados.toneladaPorPase.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Nº de Pases por Hora</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.numeroPasesPorHora) ? resultados.numeroPasesPorHora.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Producción (Ton/Hr)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.produccionTonPorHora) ? resultados.produccionTonPorHora.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Producción (Ton/día)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.produccionTonPorDia) ? resultados.produccionTonPorDia.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Requerimiento de Scoop</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.requerimientoScoop) ? resultados.requerimientoScoop.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Costo de Transporte (US$/Ton)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoTransporte) ? resultados.costoTransporte.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Costo Material Relleno 2.5%</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoMaterialRelleno35) ? resultados.costoMaterialRelleno35.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Costo Total Relleno 2.5%</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoTotalRelleno35) ? resultados.costoTotalRelleno35.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Costo Material Relleno 3.0%</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoMaterialRelleno30) ? resultados.costoMaterialRelleno30.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Costo Total Relleno 3.0%</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoTotalRelleno30) ? resultados.costoTotalRelleno30.toFixed(2) : '-'}</span>
        </div>
      </div>
    </div>
  );
}
