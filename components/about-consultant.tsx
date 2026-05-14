"use client"

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useApp } from './app-context'
import { Play, ArrowRight, ArrowLeft } from 'lucide-react'

export function BuiltOnTrust() {
  const { theme, t, isRTL, language } = useApp()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  const stats = [
    { labelEn: 'Years in Dubai', labelFa: 'سال در دبی', labelAr: 'سنة في دبي', labelRu: 'Лет в Дубае', value: 39 },
    { labelEn: 'Happy Clients', labelFa: 'مشتری راضی', labelAr: 'عميل سعيد', labelRu: 'Клиентов', value: 2768 },
  ]

  const Counter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
      if (isInView) {
        let start = 0
        const end = value
        const duration = 2000
        const increment = end / (duration / 16)
        
        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)
        return () => clearInterval(timer)
      }
    }, [isInView, value])

    return <span ref={ref}>{count.toLocaleString()}{value > 100 ? '+' : ''}</span>
  }

  const getStatLabel = (stat: any) => {
    if (language === 'fa') return stat.labelFa
    if (language === 'ar') return stat.labelAr
    if (language === 'ru') return stat.labelRu
    return stat.labelEn
  }

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className={`grid items-center gap-16 lg:grid-cols-2 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Left Content */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className={`mb-8 font-serif text-4xl font-medium leading-tight sm:text-5xl ${
                theme === 'light' ? 'text-neutral-900' : 'text-white'
              }`}
            >
              {t('builtOnTrust')}<br />
              {t('focusOnYou')}
            </motion.h2>

            {/* Stats Row */}
            <div className={`mb-12 flex flex-wrap gap-12 ${isRTL ? 'justify-end flex-row-reverse' : 'justify-start'}`}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.labelEn}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="space-y-1"
                >
                  <p className={`font-serif text-3xl font-medium ${
                    theme === 'light' ? 'text-neutral-900' : 'text-white'
                  }`}>
                    <Counter value={stat.value} />
                  </p>
                  <p className={`text-xs uppercase tracking-wider ${
                    theme === 'light' ? 'text-neutral-500' : 'text-white/40'
                  }`}>
                    {getStatLabel(stat)}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`space-y-6 ${theme === 'light' ? 'text-neutral-600' : 'text-white/70'}`}
            >
              <p className="text-lg leading-relaxed">
                {t('aboutDescription')}
              </p>
            </motion.div>
          </div>

          {/* Right Video Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-video overflow-hidden rounded-[2.5rem] shadow-2xl"
          >
            <Image
              src="/images/dubai-marina.webp"
              alt="Dubai Marina"
              fill
              className="object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl border border-white/30"
              >
                <Play className="h-6 w-6 text-white fill-white" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

