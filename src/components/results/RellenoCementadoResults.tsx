"use client";
import type { RellenoCementadoResultados } from '../../scripts/rellenoCementadoCalculations';

type RellenoCementadoResultsProps = {
  resultados: RellenoCementadoResultados;
};

export default function RellenoCementadoResults({ resultados }: RellenoCementadoResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white h-fit">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">RESULTADOS</h2>
        <p className="text-sm text-gray-500 mt-1">Relleno Cementado</p>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Tonelada por Pase</span>
          <span className="font-medium text-gray-900">{isValid(resultados.toneladaPorPase) ? `${resultados.toneladaPorPase.toFixed(2)} Ton/pase` : '- Ton/pase'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Nº de Pases por Hora</span>
          <span className="font-medium text-gray-900">{isValid(resultados.numeroPasesPorHora) ? `${resultados.numeroPasesPorHora.toFixed(2)} Pase/Hr` : '- Pase/Hr'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Producción</span>
          <span className="font-medium text-gray-900">{isValid(resultados.produccionTonPorHora) ? `${resultados.produccionTonPorHora.toFixed(2)} Ton/Hr` : '- Ton/Hr'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Producción</span>
          <span className="font-medium text-gray-900">{isValid(resultados.produccionTonPorDia) ? `${resultados.produccionTonPorDia.toFixed(2)} Ton/día` : '- Ton/día'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Requerimiento de Scoop</span>
          <span className="font-medium text-gray-900">{isValid(resultados.requerimientoScoop) ? `${resultados.requerimientoScoop.toFixed(2)} Scoop` : '- Scoop'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Costo de Transporte</span>
          <span className="font-medium text-gray-900">{isValid(resultados.costoTransporte) ? `${resultados.costoTransporte.toFixed(2)} US$/Ton` : '- US$/Ton'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Costo Material Relleno 2.5%</span>
          <span className="font-medium text-gray-900">{isValid(resultados.costoMaterialRelleno35) ? `${resultados.costoMaterialRelleno35.toFixed(2)} US$/Ton` : '- US$/Ton'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Costo Total Relleno 2.5%</span>
          <span className="font-medium text-gray-900">{isValid(resultados.costoTotalRelleno35) ? `${resultados.costoTotalRelleno35.toFixed(2)} US$/Ton` : '- US$/Ton'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Costo Material Relleno 3.0%</span>
          <span className="font-medium text-gray-900">{isValid(resultados.costoMaterialRelleno30) ? `${resultados.costoMaterialRelleno30.toFixed(2)} US$/Ton` : '- US$/Ton'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Costo Total Relleno 3.0%</span>
          <span className="font-medium text-gray-900">{isValid(resultados.costoTotalRelleno30) ? `${resultados.costoTotalRelleno30.toFixed(2)} US$/Ton` : '- US$/Ton'}</span>
        </div>
      </div>
    </div>
  );
}
