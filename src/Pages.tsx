"use client";
import { useState } from "react";
import Malla from "./sections/MallaPage";
import CostoPerforacion from "./sections/CostoPerforacionPage";
import CostoVoladura from "./sections/CostoVoladuraPage";
import RequerimientoPerforadora from "./sections/RequerimientoPerforadoraPage";
import Carguio from "./sections/CarguioPage";
import Limpieza from "./sections/LimpiezaPage";
import Transporte from "./sections/TransportePage";
import RellenoCementado from "./sections/RellenoCementadoPage";
import RellenoDetritico from "./sections/RellenoDetriticoPage";
import Preview from "./Preview";

export default function FormsSection() {
  const [showPreview, setShowPreview] = useState(false);

  if (showPreview) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center">
        <div className="w-full max-w-7xl px-4 py-6">
          <button
            onClick={() => setShowPreview(false)}
            className="mb-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            ← Volver a Formularios
          </button>
          <Preview />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold">COSTOS Y PRODUCCION</h1>
        <button
          onClick={() => setShowPreview(true)}
          className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
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
  );
}
