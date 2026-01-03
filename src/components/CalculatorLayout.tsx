"use client";
import { useState } from "react";

import Malla from "../features/malla/MallaPage";
import CostoPerforacion from "../features/perforacion/CostoPerforacionPage";
import CostoVoladura from "../features/voladura/CostoVoladuraPage";
import RequerimientoPerforadora from "../features/requerimiento-perforadora/RequerimientoPerforadoraPage";
import Carguio from "../features/carguio/CarguioPage";
import Limpieza from "../features/limpieza/LimpiezaPage";
import Transporte from "../features/transporte/TransportePage";
import RellenoCementado from "../features/relleno/cementado/RellenoCementadoPage";
import RellenoDetritico from "../features/relleno/detritico/RellenoDetriticoPage";
import CalculatorPreview from "./CalculatorPreview";

export default function CalculatorLayout() {
  const [showPreview, setShowPreview] = useState(false);





  return (
<>
      {showPreview ? (
        <div className="w-full min-h-screen  animate-in fade-in duration-300">
          <div className="w-full max-w-7xl mx-auto px-6 py-8">
            <CalculatorPreview onBack={() => setShowPreview(false)} />
          </div>
        </div>
      ) : (
      <div className="w-full min-h-screen animate-in fade-in duration-300">
        <div className="w-full max-w-7xl mx-auto px-6 pt-8">
          <div className="  p-6 mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Costs and Production</h1>
              <p className="text-sm text-gray-500 mt-1">Mining cost calculator</p>
            </div>
            <button
              onClick={() => setShowPreview(true)}
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg transition-all flex items-center gap-2 shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Preview
            </button>
          </div>
          
          <div className="">
            <Malla />
            <CostoPerforacion />
            <CostoVoladura />
            <RequerimientoPerforadora />
            <Carguio />
            <Limpieza />
            <Transporte />
            <RellenoCementado />
            <RellenoDetritico />
          </div>
        </div>
      </div>
      )}
</>
  );
}
