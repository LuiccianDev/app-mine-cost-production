'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
export default function Products() {
  return (
    <section className="flex min-h-screen items-center py-16">
      <div className="container mx-auto w-full px-8">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-light">feature.</h2>
          <motion.p
            className="max-w-md text-2xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Specialized tools for mining calculations with intuitive interface and accurate
            real-time results.
          </motion.p>
        </div>

        <div className="space-y-16 md:space-y-24">
          <div className="flex items-center gap-8 md:gap-12">
            <div className="relative w-full max-w-3xl">
              <motion.div
                className="aspect-video overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  src="/img/mockup1.webp"
                  alt="Mockup 1"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
            <div className="max-w-2xl space-y-3 pl-20 text-2xl">
              <h3 className="text-gray-900">Accurate Calculations</h3>
              <motion.p
                className="leading-tight text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Intuitive interface to perform drilling pattern, blasting, and operational cost
                calculations with real-time results.
              </motion.p>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center gap-8 md:gap-12">
            <div className="relative w-full max-w-3xl">
              <motion.div
                className="aspect-video overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                  src="/img/mockup2.webp"
                  alt="Mockup 2"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
            <div className="max-w-2xl space-y-3 pr-20 text-2xl">
              <h3 className="text-gray-900">Easy Export</h3>
              <motion.p
                className="leading-tight text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Generate professional PDF reports with all your calculations and parameters to share
                with your team.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
