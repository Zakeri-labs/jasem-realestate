"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useApp } from './app-context'
import { Bed, Bath, Maximize, Heart, ArrowRight, ArrowLeft } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Modern Waterfront Villa',
    location: 'Palm Jumeirah',
    price: '$4,500,000',
    beds: 5,
    baths: 6,
    sqft: 8500,
    image: '/images/property-1.webp',
    featured: true,
  },
  {
    id: 2,
    title: 'Luxury Sky Penthouse',
    location: 'Downtown Dubai',
    price: '$12,800,000',
    beds: 4,
    baths: 5,
    sqft: 12000,
    image: '/images/property-2.webp',
    featured: true,
  },
  {
    id: 3,
    title: 'Exclusive Beach Estate',
    location: 'Jumeirah Bay',
    price: '$18,500,000',
    beds: 7,
    baths: 9,
    sqft: 15000,
    image: '/images/property-3.webp',
    featured: true,
  },
]

export function PremiumListings() {
  const { t, isRTL, theme } = useApp()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971505454567`, '_blank')
  }

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`mb-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-end ${isRTL ? 'sm:flex-row-reverse' : ''}`}
        >
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h2 className={`mb-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            }`}>
              {t('premiumListings')}
            </h2>
            <p className={`max-w-xl text-lg ${
              theme === 'light' ? 'text-neutral-500' : 'text-white/50'
            }`}>
              {t('premiumListingsSubtitle')}
            </p>
          </div>
          <motion.button
            whileHover={{ x: isRTL ? -5 : 5 }}
            onClick={handleWhatsApp}
            className={`flex items-center gap-2 text-sm font-semibold text-primary ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('exploreProperties')}
            <Arrow className="h-4 w-4" />
          </motion.button>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={handleWhatsApp}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-neutral-900/10 transition-all duration-300 hover:shadow-xl backdrop-blur-sm cursor-pointer"
            >
              <div className="relative aspect-[1.15/1] w-full overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                
                {/* Featured Badge */}
                {property.featured && (
                  <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                    <span className="rounded-full bg-white/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/20">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content Area - Glassmorphic & Reduced Height */}
              <div className={`flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-md border-t border-white/10 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <div className="flex flex-col">
                  <h3 className={`text-[1.15rem] font-semibold tracking-tight ${
                    theme === 'light' ? 'text-neutral-900' : 'text-white'
                  }`}>
                    {property.title}
                  </h3>
                  <p className={`text-[0.85rem] font-medium ${
                    theme === 'light' ? 'text-neutral-500' : 'text-white/50'
                  }`}>
                    {property.location} • {property.price}
                  </p>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                    theme === 'light' ? 'bg-neutral-900/5 text-neutral-900' : 'bg-white/10 text-white'
                  } group-hover:bg-opacity-20`}
                >
                  <Arrow className="h-4 w-4 stroke-[2.5px]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
