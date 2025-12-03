"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tight">
            LUICCIAN
          </Link>

          <div className="relative flex items-center gap-6">
            {/* Menu Links - aparecen al lado izquierdo del botón */}
            {isMenuOpen && (
              <div className="flex items-center gap-6 animate-in fade-in slide-in-from-right">
                <Link href="#calculadora" className="text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">
                  Calculadora
                </Link>
                <Link href="#features" className="text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">
                  Características
                </Link>
                <Link href="#about" className="text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">
                  Acerca de
                </Link>
                <Link 
                  href="#contact" 
                  className="text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors"
                >
                  Contacto
                </Link>
              </div>
            )}

            {/* Dots Button - Cuadrados */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-6 h-6 hover:bg-slate-100 rounded transition-colors"
              aria-label="Menu"
            >
              {/* Dots cuadrados en las esquinas */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-slate-900"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-slate-900"></div>
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-slate-900"></div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-slate-900"></div>
              
              {/* Cuadrado central - aparece cuando el menú está abierto */}
              {isMenuOpen && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-slate-900"></div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
