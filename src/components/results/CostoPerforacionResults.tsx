"use client";
import React from 'react';

type CostoPerforacionResultsProps = {
  resultados: {
    costoPerforacionPorMetro: number;
    costoPerforacionPorTon: number;
  };
};

export default function CostoPerforacionResults({ resultados }: CostoPerforacionResultsProps) {
  const isValid = (value: number) => !isNaN(value) && isFinite(value);

  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white h-fit">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">RESULTADOS</h2>
        <p className="text-sm text-gray-500 mt-1">Costo Perforacion</p>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Costo Perforacion</span>
          <span className="font-medium text-gray-900">
            {isValid(resultados.costoPerforacionPorMetro) 
              ? `${resultados.costoPerforacionPorMetro.toFixed(2)} US$/m` 
              : '- US$/m'}
          </span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-gray-700 text-base">Costo Perforacion</span>
          <span className="font-medium text-gray-900">
            {isValid(resultados.costoPerforacionPorTon) 
              ? `${resultados.costoPerforacionPorTon.toFixed(2)} US$/Ton` 
              : '- US$/Ton'}
          </span>
        </div>
      </div>
    </div>
  );
}
