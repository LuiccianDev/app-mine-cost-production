'use client'
import CalculatorLayout from '@/src/components/CalculatorLayout'
import BackToTop from '@/src/components/ui/BackToTop'
import Header from '@/src/components/ui/Header'
import Footer from '@/src/components/ui/Footer'
import { motion } from 'motion/react'

export default function CalculadoraPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center pb-20">
        <motion.div
          className="w-full max-w-6xl px-4"
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <CalculatorLayout />
        </motion.div>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
