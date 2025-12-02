
import type { CostoVoladuraResultsData } from '../../scripts/costoVoladuraCalculations';

type CostoVoladuraResultsProps = {
  resultados: CostoVoladuraResultsData;
};

export default function CostoVoladuraResults({ resultados }: CostoVoladuraResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white h-fit">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">RESULTADOS</h2>
        <p className="text-sm text-gray-500 mt-1">Costo de Voladura</p>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Costo de Voladura</span>
          <span className="font-medium text-gray-900">{isValid(resultados.costoVoladuraPorTonelada) ? `${resultados.costoVoladuraPorTonelada.toFixed(3)} US$/Ton` : '- US$/Ton'}</span>
        </div>
      </div>
    </div>
  );
}
