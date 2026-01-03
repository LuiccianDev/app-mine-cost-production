'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export default function About() {
  return (
    <section className="flex min-h-screen items-center py-10">
      <div className="container mx-auto w-full px-4 sm:px-8">
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-2xl font-light">about.</h2>
        </div>

        <div className="mb-8">
          <motion.p
            className="max-w-3xl text-4xl leading-tight font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            I collaborate with businesses of all sizes worldwide, using the latest technologies. My
            designs have also earned multiple awards.
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
                src="/img/logo.webp"
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
              className="text-xl leading-relaxed text-gray-700 sm:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              I&apos;m dedicated to crafting beautiful and highly functional designs that seamlessly
              align with my clients&apos; unique needs and long-term goals.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
