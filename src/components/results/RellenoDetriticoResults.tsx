import type { RellenoDetriticoResultados } from '../../scripts/rellenoDetriticoCalculations';

type RellenoDetriticoResultsProps = {
  resultados: RellenoDetriticoResultados;
};

export default function RellenoDetriticoResults({ resultados }: RellenoDetriticoResultsProps) {
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
          <span className="text-gray-600 text-sm">Costo Material Relleno (US$/Ton)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoMaterialRelleno) ? resultados.costoMaterialRelleno.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Costo Total Relleno (US$/Ton)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoTotalRelleno) ? resultados.costoTotalRelleno.toFixed(2) : '-'}</span>
        </div>
      </div>
    </div>
  );
}
