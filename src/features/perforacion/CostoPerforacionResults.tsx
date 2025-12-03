import type { CostoPerforacionResultados } from '../../scripts/costoPerforacionCalculations';

type CostoPerforacionResultsProps = {
  resultados: CostoPerforacionResultados;
};

export default function CostoPerforacionResults({ resultados }: CostoPerforacionResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resultados</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Costo Perforación (US$/m)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoPerforacionPorMetro) ? resultados.costoPerforacionPorMetro.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Costo Perforación (US$/Ton)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoPerforacionPorTon) ? resultados.costoPerforacionPorTon.toFixed(2) : '-'}</span>
        </div>
      </div>
    </div>
  );
}
