import  { type LimpiezaResultados } from "@/src/types/limpieza.types";

type LimpiezaResultsProps = {
  resultados: LimpiezaResultados;
};

export default function LimpiezaResults({ resultados }: LimpiezaResultsProps) {
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
          <span className="text-gray-600 text-sm">Requerimiento de Scoops</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.requerimientoScoops) ? resultados.requerimientoScoops.toFixed(2) : '-'}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-600 text-sm">Costo de Limpieza (US$/Ton)</span>
          <span className="font-medium text-gray-900 text-sm">{isValid(resultados.costoLimpieza) ? resultados.costoLimpieza.toFixed(2) : '-'}</span>
        </div>
      </div>
    </div>
  );
}
