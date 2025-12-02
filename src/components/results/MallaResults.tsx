
import type { MallaResultados } from '../../scripts/mallaCalculations';

type MallaResultadosProps = {
  resultados: MallaResultados;
};

export default function MallaResultados({ resultados }: MallaResultadosProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white h-fit">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">RESULTADOS</h2>
        <p className="text-sm text-gray-500 mt-1">Malla</p>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Burde</span>
          <span className="font-medium text-gray-900">{isValid(resultados.burden) ? `${resultados.burden.toFixed(2)} m` : '- m'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Espaciamiento</span>
          <span className="font-medium text-gray-900">{isValid(resultados.espaciamiento) ? `${resultados.espaciamiento.toFixed(2)} m` : '- m'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Volumen (rotura x taladro)</span>
          <span className="font-medium text-gray-900">{isValid(resultados.volumenRotaTaladro) ? `${resultados.volumenRotaTaladro.toFixed(2)} m³` : '- m³'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Tonelaje / Taladro</span>
          <span className="font-medium text-gray-900">{isValid(resultados.tonelaje) ? `${resultados.tonelaje.toFixed(2)} Ton/taladro` : '- Ton/taladro'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Libras de anfo</span>
          <span className="font-medium text-gray-900">{isValid(resultados.librasAnfo) ? `${resultados.librasAnfo.toFixed(2)} lib anfo/taladro` : '- lib anfo/taladro'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Altura de Carga</span>
          <span className="font-medium text-gray-900">{isValid(resultados.alturaCarga) ? `${resultados.alturaCarga.toFixed(2)} m` : '- m'}</span>
        </div>
      </div>
    </div>
  );
}
