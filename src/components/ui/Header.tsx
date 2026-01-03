'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900">
            LUICCIAN
          </Link>

          <div className="relative flex items-center gap-6">
            {/* Menu Links - aparecen al lado izquierdo del botón */}
            {isMenuOpen && (
              <div className="animate-in fade-in slide-in-from-right flex items-center gap-6">
                <Link
                  href="calculadora"
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
                >
                  Calculator
                </Link>
                <Link
                  href="about"
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
                >
                  About
                </Link>
                <Link
                  href="contact"
                  className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
                >
                  Contact
                </Link>
              </div>
            )}

            {/* Dots Button - Cuadrados */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative h-6 w-6"
              aria-label="Menu"
            >
              {/* Dots cuadrados en las esquinas - se acercan al centro cuando el menú está abierto */}
              <div
                className={`absolute h-1 w-1 bg-slate-900 transition-all duration-300 ${
                  isMenuOpen ? 'top-1.5 left-1.5' : 'top-1 left-1'
                }`}
              ></div>
              <div
                className={`absolute h-1 w-1 bg-slate-900 transition-all duration-300 ${
                  isMenuOpen ? 'top-1.5 right-1.5' : 'top-1 right-1'
                }`}
              ></div>
              <div
                className={`absolute h-1 w-1 bg-slate-900 transition-all duration-300 ${
                  isMenuOpen ? 'bottom-1.5 left-1.5' : 'bottom-1 left-1'
                }`}
              ></div>
              <div
                className={`absolute h-1 w-1 bg-slate-900 transition-all duration-300 ${
                  isMenuOpen ? 'right-1.5 bottom-1.5' : 'right-1 bottom-1'
                }`}
              ></div>

              {/* Cuadrado central - aparece cuando el menú está abierto */}
              {isMenuOpen && (
                <div className="animate-in fade-in zoom-in absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 bg-slate-900 duration-200"></div>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
