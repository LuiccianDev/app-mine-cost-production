'use client'
import { motion, press, animate } from 'motion/react'
import { useEffect } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    press('.button-press', (element) => {
      animate(element, { scale: 0.95 }, { type: 'spring', stiffness: 1000 })
      return () => animate(element, { scale: 1 }, { type: 'spring', stiffness: 500 })
    })
  }, [])

  return (
    <footer className="relative flex h-screen w-full flex-col bg-black px-8 py-12 text-white md:px-16 lg:px-20">
      <div className="flex h-full w-full flex-col justify-between">
        {/* Top Section - Social Links */}
        <motion.div
          className="flex justify-end gap-6 pt-8 text-white md:gap-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <a
            href="https://www.linkedin.com/in/william-guevara-lazaro-79274b2a3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light transition-colors hover:text-gray-400"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/luiccian_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light transition-colors hover:text-gray-400"
          >
            Instagram
          </a>
          <a
            href="https://github.com/LuiccianDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light transition-colors hover:text-gray-400"
          >
            Github
          </a>
          <a
            href="https://luiccian.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-light transition-colors hover:text-gray-400"
          >
            Blog
          </a>
        </motion.div>

        {/* Middle Section - Main Text and CTA */}
        <div className="flex max-w-5xl flex-1 flex-col items-start justify-center py-24">
          <motion.h2
            className="mb-8 text-4xl leading-tight font-light"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Curious about what we can create <span className="text-gray-500">together?</span>
            <br />
            Let&apos;s bring something <span className="text-gray-500">extraordinary</span> to life!
          </motion.h2>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <motion.a
              whileHover={{
                scale: [null, 1.05],
                transition: {
                  duration: 0.5,
                  times: [0, 0.6],
                  ease: ['easeInOut'],
                },
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              href="/contact"
              className="button-press rounded-sm bg-white px-6 py-3 text-sm font-normal text-black transition-colors"
            >
              Get in Touch
            </motion.a>
            <div className="flex items-center gap-2 text-sm font-light">
              <motion.span
                className="size-3 rounded-full"
                animate={{
                  opacity: [1, 0.4, 1],
                  backgroundColor: ['#00fff2', '#00fff2', '#00fff2'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span>Available For Work</span>
            </div>
          </div>
        </div>

        {/* Bottom Section - Footer Info */}
        <div className="flex items-center justify-between gap-8 pb-8 text-sm font-light md:grid-cols-3">
          {/* Center - Credits */}
          <div className="space-y-0.5">
            <p>Designed & Developed</p>
            <p>by Luiccian 香 {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
