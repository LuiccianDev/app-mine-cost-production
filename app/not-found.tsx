'use client'

import Link from 'next/link'
import { motion, press, animate } from 'motion/react'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    press('.button-press-not-found', (element) => {
      animate(element, { scale: 0.95 }, { type: 'spring', stiffness: 1000 })
      return () => animate(element, { scale: 1 }, { type: 'spring', stiffness: 500 })
    })
  }, [])
  return (
    <div className="relative flex min-h-screen items-start justify-between p-8 md:p-16">
      {/* Contenido principal */}
      <div className="flex flex-col items-start justify-start pt-16">
        <motion.span
          className="font-title text-9xl font-bold tracking-tight text-black"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          PAGE
        </motion.span>
        <motion.span
          className="font-title text-9xl font-bold tracking-tight text-black"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        >
          NOT
        </motion.span>

        <motion.span
          className="font-title text-9xl font-bold tracking-tight text-black"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          FOUND
        </motion.span>

        {/* Botón Back Home */}
        <motion.div
          className="button-press-not-found"
          whileHover={{
            scale: [null, 1.05],
            transition: {
              duration: 0.5,
              times: [0, 0.6],
              ease: ['easeInOut'],
            },
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link
            href="/"
            className="mt-12 inline-block rounded-sm bg-gray-100 px-6 py-3 text-sm font-normal text-black"
          >
            Back Home
          </Link>
        </motion.div>
      </div>

      {/* 404 abajo derecha */}
      <motion.div
        className="self-end text-right"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="text-2xl font-bold text-black md:text-3xl">404</span>
      </motion.div>
    </div>
  )
}
