"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useApp } from './app-context'
import { Menu, X, Sun, Moon, ChevronDown, Search, Heart, ArrowRight, ArrowLeft } from 'lucide-react'

const navItems = ['buy', 'rent', 'projects', 'offPlan', 'about', 'contact'] as const

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
] as const

export function Header() {
  const { theme, setTheme, language, setLanguage, t, isRTL } = useApp()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971505454567`, '_blank')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <nav className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-16 w-56"
          >
            <Image
              src={theme === 'light' ? '/images/logo-light.webp' : '/images/logo-dark.webp'}
              alt="Jasem Real Estate"
              fill
              className="object-contain object-left rtl:object-right"
              priority
            />
          </motion.div>

          {/* Desktop Navigation - Center */}
          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <motion.a
                key={`${item}-${theme}`}
                href={`#${item}`}
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  theme === 'light' ? 'text-neutral-900/70 hover:text-neutral-900' : 'text-white/70 hover:text-white'
                }`}
              >
                {t(item)}
              </motion.a>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="flex h-12 w-12 lg:h-10 lg:w-10 items-center justify-center rounded-full glass-nav transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? (
                    <Sun className="h-5 w-5 lg:h-4 lg:w-4 text-neutral-900" />
                  ) : (
                    <Moon className="h-5 w-5 lg:h-4 lg:w-4 text-white" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex h-12 w-12 lg:h-10 lg:w-10 items-center justify-center rounded-full glass-nav transition-all duration-300"
              >
                <span className={`text-xs lg:text-[10px] font-semibold uppercase ${theme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
                  {language}
                </span>
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ 
                      duration: 0.2,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="absolute top-full left-1/2 mt-4 -translate-x-1/2 flex flex-col gap-3"
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                          delay: index * 0.05 
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          setLanguage(lang.code as 'en' | 'fa' | 'ar' | 'ru')
                          setIsLangOpen(false)
                        }}
                        className={`flex h-12 w-12 lg:h-10 lg:w-10 items-center justify-center rounded-full glass-nav shadow-2xl transition-all ${
                          language === lang.code ? 'ring-2 ring-white/40' : ''
                        }`}
                      >
                        <span className={`text-xs lg:text-[10px] font-semibold uppercase ${theme === 'light' ? 'text-neutral-900' : 'text-white'}`}>
                          {lang.code}
                        </span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Consultation Button - Glass Shine CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className={`hidden items-center gap-2 rounded-full glass-nav glass-shine px-6 py-2.5 text-sm font-medium transition-all duration-300 md:flex ${
                theme === 'light' ? 'text-neutral-900' : 'text-white'
              }`}
            >
              {t('consultation')}
              <Arrow className="h-4 w-4" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-12 w-12 lg:h-10 lg:w-10 items-center justify-center rounded-full glass-nav lg:hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'open' : 'closed'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className={`h-6 w-6 lg:h-5 lg:w-5 ${theme === 'light' ? 'text-primary-glass' : 'text-white'}`} />
                  ) : (
                    <Menu className={`h-6 w-6 lg:h-5 lg:w-5 ${theme === 'light' ? 'text-primary-glass' : 'text-white'}`} />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRTL ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? '100%' : '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 z-[9999] flex flex-col p-8 pt-24 lg:hidden ${
              theme === 'light' ? 'bg-white' : 'bg-neutral-950'
            }`}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`absolute top-8 ${isRTL ? 'left-8' : 'right-8'} p-2 ${
                theme === 'light' ? 'text-neutral-900' : 'text-white'
              }`}
            >
              <X className="h-8 w-8" />
            </button>

            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-4xl font-light transition-colors ${
                    theme === 'light' ? 'text-neutral-900 hover:text-neutral-600' : 'text-white hover:text-white/70'
                  }`}
                >
                  {t(item)}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto pb-12">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className={`w-full rounded-2xl py-5 text-xl font-bold shadow-lg transition-all ${
                  theme === 'light' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
                }`}
              >
                {t('consultation')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
