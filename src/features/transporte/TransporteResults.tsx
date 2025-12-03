import type { TransporteResultados } from '../../scripts/transporteCalculations';

type TransporteResultsProps = {
  resultados: TransporteResultados;
};

export default function TransporteResults({ resultados }: TransporteResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Resultados</h3>
      </div>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Ciclo Total de un Camión (min)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.cicloTotalCamion) ? resultados.cicloTotalCamion.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Nº de Viajes por Hr</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.numeroViajesPorHora) ? resultados.numeroViajesPorHora.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Producción de 1 Camión (Ton/Hr)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.produccionCamion) ? resultados.produccionCamion.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Nº Camiones por Tolva</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.numeroCamionesPorTolva) ? resultados.numeroCamionesPorTolva.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Flota de Camiones</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.flotaCamiones) ? resultados.flotaCamiones.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Camiones en Operación</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.camionesOperacion) ? resultados.camionesOperacion : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Camiones en Stand By</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.camionesStandBy) ? resultados.camionesStandBy : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Producción de Flota (Ton/Hr)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.produccionFlotaCamiones) ? resultados.produccionFlotaCamiones.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Costo de Transporte (US$/Ton)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoTransporte) ? resultados.costoTransporte.toFixed(2) : '-'}</span>
        </div>
      </div>
    </div>
  );
}
