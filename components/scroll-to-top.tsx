"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronUp, MessageCircle } from 'lucide-react'
import { useApp } from './app-context'

export function ScrollToTop() {
  const { isRTL, theme } = useApp()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const openWhatsApp = () => {
    window.open(`https://wa.me/971505454567`, '_blank')
  }

  return (
    <div className={`fixed bottom-8 ${isRTL ? 'left-8' : 'right-8'} z-50 flex flex-col gap-4`}>
      <AnimatePresence>
        {isVisible && (
          <>
            {/* WhatsApp Floating Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={openWhatsApp}
              className={`flex h-14 w-14 items-center justify-center rounded-full border shadow-2xl backdrop-blur-xl transition-all p-0 overflow-hidden ${
                theme === 'light' 
                ? 'bg-neutral-900/80 border-neutral-700' 
                : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
              aria-label="Contact on WhatsApp"
            >
              <div className="relative h-8 w-8">
                <Image
                  src="/images/WhatsApp_icon.webp"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.button>

            {/* Scroll To Top Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-8 w-8" />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
