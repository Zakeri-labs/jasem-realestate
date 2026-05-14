"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from './app-context'
import { Building2, Key, TrendingUp, Headphones } from 'lucide-react'

const features = [
  {
    id: 1,
    icon: Building2,
    titleEn: 'Real Estate',
    subtitleEn: 'Buy & Sell',
    titleFa: 'خرید و فروش',
    subtitleFa: 'ملک',
  },
  {
    id: 2,
    icon: Key,
    titleEn: 'Property',
    subtitleEn: 'Rentals',
    titleFa: 'اجاره',
    subtitleFa: 'ملک',
  },
  {
    id: 3,
    icon: TrendingUp,
    titleEn: 'Secure',
    subtitleEn: 'Investment',
    titleFa: 'سرمایه گذاری',
    subtitleFa: 'مطمئن',
  },
  {
    id: 4,
    icon: Headphones,
    titleEn: 'Expert',
    subtitleEn: 'Consulting',
    titleFa: 'خدمات',
    subtitleFa: 'مشاوره',
  },
]

export function FeaturesIcons() {
  const { theme, isRTL } = useApp()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971505454567`, '_blank')
  }

  return (
    <section ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 relative z-10">
        {/* Creative Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6 ${
            theme === 'light' ? 'text-neutral-900' : 'text-white'
          }`}>
            {isRTL ? "خدمات ما" : "Our Services"}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full opacity-50" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-12 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={handleWhatsApp}
              className={`group relative flex flex-col items-center p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-500 cursor-pointer ${
                theme === 'light'
                ? 'hover:bg-neutral-900/5 hover:backdrop-blur-xl'
                : 'hover:bg-white/5 hover:shadow-2xl hover:shadow-primary/5'
              }`}
            >
              {/* Icon Container - Dynamic & Sophisticated */}
              <div className="relative mb-4 sm:mb-8 flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Main Icon Plate */}
                <div className={`relative flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-6 ${
                  theme === 'light' ? 'bg-neutral-100 shadow-lg shadow-neutral-200' : 'bg-white/5 shadow-2xl shadow-black/20'
                }`}>
                  <feature.icon className={`h-7 w-7 sm:h-10 sm:w-10 transition-colors duration-500 group-hover:text-primary ${
                    theme === 'light' ? 'text-neutral-900' : 'text-white'
                  }`} />
                  
                  {/* Decorative corner element */}
                  <div className="absolute -bottom-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-primary/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>

              {/* Text - Clean & Elegant */}
              <div className={`space-y-1 sm:space-y-3 ${isRTL ? 'text-right' : 'text-left'} flex flex-col items-center`}>
                <h3 className={`text-lg sm:text-2xl font-semibold tracking-tight text-center ${
                  theme === 'light' ? 'text-neutral-900' : 'text-white'
                }`}>
                  {isRTL ? feature.titleFa : feature.titleEn}
                </h3>
                <p className={`text-xs sm:text-base font-medium leading-relaxed max-w-[150px] sm:max-w-[200px] text-center ${
                  theme === 'light' ? 'text-neutral-500' : 'text-white/40'
                }`}>
                  {isRTL ? feature.subtitleFa : feature.subtitleEn}
                </p>
              </div>

              {/* Hover line indicator */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
