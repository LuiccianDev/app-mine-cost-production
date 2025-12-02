
import type { RequerimientoPerforadoraResultados } from '../../scripts/requerimientoPerforadoraCalculations';

type RequerimientoPerforadoraResultsProps = {
  resultados: RequerimientoPerforadoraResultados;
};

export default function RequerimientoPerforadoraResults({ resultados }: RequerimientoPerforadoraResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white h-fit">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">RESULTADOS</h2>
        <p className="text-sm text-gray-500 mt-1">Requerimiento de Perforadora</p>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Nº Perforadoras</span>
          <span className="font-medium text-gray-900">{isValid(resultados.numeroPerforadoras) ? `${resultados.numeroPerforadoras.toFixed(2)} Perforadoras` : '- Perforadoras'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Metros Perforado</span>
          <span className="font-medium text-gray-900">{isValid(resultados.metrosPerforadosPorDia) ? `${resultados.metrosPerforadosPorDia.toFixed(2)} m/día` : '- m/día'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Pies Perforado</span>
          <span className="font-medium text-gray-900">{isValid(resultados.piesPerforadosPorDia) ? `${resultados.piesPerforadosPorDia.toFixed(2)} pies/día` : '- pies/día'}</span>
        </div>
      </div>
    </div>
  );
}
