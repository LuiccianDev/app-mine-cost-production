'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export default function About() {
  return (
    <section className="flex min-h-screen items-center py-10">
      <div className="container mx-auto w-full px-4 sm:px-8">
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-3xl font-light">about.</h2>
        </div>

        <div className="mb-8">
          <motion.p
            className="max-w-3xl text-2xl leading-tight font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            I design and build web systems for the mining industry, applying modern technologies to
            optimize processes, enhance data management, and support smarter decision-making.
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 lg:pl-40 xl:pl-80">
          <div className="relative w-full max-w-sm">
            <motion.div
              className="aspect-4/5 overflow-hidden rounded-lg bg-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/img/logo.webp" //! change img for your photo
                alt="About"
                width={350}
                height={467}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>
          </div>

          <div className="max-w-xl space-y-3">
            <motion.p
              className="text-2xl leading-tight text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              I focus on developing efficient and practical solutions, creating systems that improve
              workflows, data analysis, and real-world problem solving.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
