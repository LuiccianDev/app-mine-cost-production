"use client";
import type { TransporteResultados } from '../../scripts/transporteCalculations';

type TransporteResultsProps = {
  resultados: TransporteResultados;
};

export default function TransporteResults({ resultados }: TransporteResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white h-fit">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">RESULTADOS</h2>
        <p className="text-sm text-gray-500 mt-1">Transporte</p>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Ciclo Total de un Camión</span>
          <span className="font-medium text-gray-900">{isValid(resultados.cicloTotalCamion) ? `${resultados.cicloTotalCamion.toFixed(2)} min` : '- min'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Nº de Viajes por Hr</span>
          <span className="font-medium text-gray-900">{isValid(resultados.numeroViajesPorHora) ? `${resultados.numeroViajesPorHora.toFixed(2)} Viaje/Hr` : '- Viaje/Hr'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Producción de 1 Camión</span>
          <span className="font-medium text-gray-900">{isValid(resultados.produccionCamion) ? `${resultados.produccionCamion.toFixed(2)} Ton/Hr` : '- Ton/Hr'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Nº Camiones por Tolva</span>
          <span className="font-medium text-gray-900">{isValid(resultados.numeroCamionesPorTolva) ? `${resultados.numeroCamionesPorTolva.toFixed(2)} Camiones` : '- Camiones'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Flota de Camiones</span>
          <span className="font-medium text-gray-900">{isValid(resultados.flotaCamiones) ? `${resultados.flotaCamiones.toFixed(2)} Camiones` : '- Camiones'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Camiones en Operación</span>
          <span className="font-medium text-gray-900">{isValid(resultados.camionesOperacion) ? `${resultados.camionesOperacion} Camiones` : '- Camiones'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Camiones en Stand By</span>
          <span className="font-medium text-gray-900">{isValid(resultados.camionesStandBy) ? `${resultados.camionesStandBy} Camiones` : '- Camiones'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Producción de Flota</span>
          <span className="font-medium text-gray-900">{isValid(resultados.produccionFlotaCamiones) ? `${resultados.produccionFlotaCamiones.toFixed(2)} Ton/Hr` : '- Ton/Hr'}</span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Costo de Transporte</span>
          <span className="font-medium text-gray-900">{isValid(resultados.costoTransporte) ? `${resultados.costoTransporte.toFixed(2)} US$/Ton` : '- US$/Ton'}</span>
        </div>
      </div>
    </div>
  );
}
