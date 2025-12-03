"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50">
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
              className="relative w-6 h-6 "
              aria-label="Menu"
            >
              {/* Dots cuadrados en las esquinas - se acercan al centro cuando el menú está abierto */}
              <div className={`absolute w-1 h-1 bg-slate-900 transition-all duration-300 ${
                isMenuOpen ? 'top-1.5 left-1.5' : 'top-1 left-1'
              }`}></div>
              <div className={`absolute w-1 h-1 bg-slate-900 transition-all duration-300 ${
                isMenuOpen ? 'top-1.5 right-1.5' : 'top-1 right-1'
              }`}></div>
              <div className={`absolute w-1 h-1 bg-slate-900 transition-all duration-300 ${
                isMenuOpen ? 'bottom-1.5 left-1.5' : 'bottom-1 left-1'
              }`}></div>
              <div className={`absolute w-1 h-1 bg-slate-900 transition-all duration-300 ${
                isMenuOpen ? 'bottom-1.5 right-1.5' : 'bottom-1 right-1'
              }`}></div>
              
              {/* Cuadrado central - aparece cuando el menú está abierto */}
              {isMenuOpen && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-slate-900 animate-in fade-in zoom-in duration-200"></div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
