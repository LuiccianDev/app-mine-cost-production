"use client";
import type { CarguioResultados } from '../../scripts/carguioCalculations';

type CarguioResultsProps = {
  resultados: CarguioResultados;
};

export default function CarguioResults({ resultados }: CarguioResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white h-fit">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">RESULTADOS</h2>
        <p className="text-sm text-gray-500 mt-1">Carguío</p>
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
          <span className="text-gray-700 text-base">Costo de Carguío</span>
          <span className="font-medium text-gray-900">{isValid(resultados.costoCarguio) ? `${resultados.costoCarguio.toFixed(2)} US$/Ton` : '- US$/Ton'}</span>
        </div>
      </div>
    </div>
  );
}
