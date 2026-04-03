'use client'

import Image from 'next/image'
import { motion, press, animate } from 'motion/react'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    press('.button-press-hero', (element) => {
      animate(element, { scale: 0.95 }, { type: 'spring', stiffness: 1000 })
      return () => animate(element, { scale: 1 }, { type: 'spring', stiffness: 500 })
    })
  }, [])
  return (
    <section className="relative h-[calc(100vh-5rem)] w-full">
      <div className="container mx-auto flex h-full flex-col justify-between px-8 pt-10 pb-20">
        {/* Parte superior - Título y foto */}
        <div className="flex items-start justify-between">
          {/* Título izquierda arriba */}
          <div className="font-title text-[12rem] leading-none">
            <div className="relative overflow-hidden">
              <motion.h1
                className="text-slate-900"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                LUICCIAN
              </motion.h1>
            </div>
            <div className="relative -mt-10 overflow-hidden">
              <motion.h1
                className="text-slate-900"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                MINE
              </motion.h1>
            </div>
          </div>

          {/* Imagen circular derecha arriba */}
          <motion.div
            className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl md:h-48 md:w-48"
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/img/perfil.webp" //! change img for your photo
              alt="Luiccian Mine"
              fill
              sizes="(min-width: 768px) 192px, 160px"
              className="object-cover"
              quality={75}
            />
          </motion.div>
        </div>

        {/* Parte inferior - Email y descripción */}
        <div className="flex items-end justify-between">
          {/* Email izquierda abajo */}
          <motion.div
            className="flex items-center gap-2 text-slate-700"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-base">contacto@luiccianmine.com</span>
            <button className="rounded p-1 transition-colors hover:bg-slate-200">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </motion.div>

          {/* Descripción derecha abajo */}
          <div className="max-w-xl space-y-4 text-right">
            <motion.p
              className="text-3xl leading-tight text-slate-900"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Hello, I&apos;m a specialist in mining cost and production calculation with detailed
              analysis — based in operations optimization, working remote. Let&apos;s create!
            </motion.p>

            <motion.a
              href="/calculadora"
              className="button-press-hero inline-flex items-center gap-2 rounded bg-slate-900 px-8 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-slate-800"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 }, backgroundColor: '#000' }}
            >
              Start Calculation
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
