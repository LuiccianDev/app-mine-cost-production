"use client";
import React from 'react';

export type CostoVoladuraResultsData = {
  // Consumos
  consumoAnfo: number;
  consumoDinamita: number;
  consumoRetardos: number;
  consumoPentacord: number;
  consumoCamion: number;
  consumoChispeo: number;
  consumoManoObra: number;
  
  // Totales por item
  totalAnfo: number;
  totalDinamita: number;
  totalRetardos: number;
  totalPentacord: number;
  totalCamion: number;
  totalChispeo: number;
  totalManoObra: number;
  
  // Total general
  costoTotalPorTaladro: number;
  costoVoladuraPorTonelada: number;
};

type CostoVoladuraResultsProps = {
  results: CostoVoladuraResultsData;
};

export default function CostoVoladuraResults({ results }: CostoVoladuraResultsProps) {
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
          <span className="font-medium text-gray-900">{isValid(results.costoVoladuraPorTonelada) ? `${results.costoVoladuraPorTonelada.toFixed(3)} US$/Ton` : '- US$/Ton'}</span>
        </div>
      </div>
    </div>
  );
}
