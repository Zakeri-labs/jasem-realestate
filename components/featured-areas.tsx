"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useApp } from './app-context'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  {
    id: 1,
    name: 'Jumeirah Bay',
    properties: '190+ Properties',
    image: '/images/jumeirah-bay.webp',
  },
  {
    id: 2,
    name: 'Palm Jumeirah',
    properties: '250+ Properties',
    image: '/images/palm-jumeirah.webp',
  },
  {
    id: 3,
    name: 'Sobha Hartland',
    properties: '120+ Properties',
    image: '/images/downtown-dubai.webp',
  },
  {
    id: 4,
    name: 'Dubai Marina',
    properties: '300+ Properties',
    image: '/images/dubai-marina.webp',
  },
  {
    id: 5,
    name: 'Emirates Hills',
    properties: '85+ Properties',
    image: '/images/emirates-hills.webp',
  },
]

export function SignatureProjects() {
  const { theme, t, isRTL } = useApp()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Section Header */}
        <div className={`mb-16 flex items-end justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={isRTL ? 'text-right w-full' : 'text-left w-full'}
          >
            <h2 className={`font-serif text-4xl font-medium tracking-tight sm:text-5xl ${
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            }`}>
              {t('featuredAreas')}
            </h2>
          </motion.div>
        </div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "start",
              direction: isRTL ? "rtl" : "ltr",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6 py-10 px-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="group relative flex flex-col overflow-hidden rounded-[3rem] glass-card transition-all duration-300 hover:shadow-2xl"
                  >
                    <div className="relative aspect-[1/1.2] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    
                    {/* Content Area - Glassmorphic & Reduced Height */}
                    <div className={`flex items-center justify-between px-8 py-6 glass-card border-none rounded-none border-t border-white/10 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                      <div className="flex flex-col">
                        <h3 className={`text-[1.3rem] font-semibold tracking-tight ${
                          theme === 'light' ? 'text-neutral-900' : 'text-white'
                        }`}>
                          {project.name}
                        </h3>
                        <p className={`text-[0.95rem] font-medium ${
                          theme === 'light' ? 'text-neutral-500' : 'text-white/50'
                        }`}>
                          {project.properties}
                        </p>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                          theme === 'light' ? 'bg-neutral-900/5 text-neutral-900' : 'bg-white/10 text-white'
                        }`}
                      >
                        <Arrow className="h-5 w-5 stroke-[2.5px]" />
                      </motion.div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className={`mt-12 flex items-center gap-4 ${isRTL ? 'flex-row-reverse justify-start' : 'justify-end'}`}>
              <CarouselPrevious className="static translate-y-0 h-12 w-12 border-white/10 bg-white/5 hover:bg-white/10" />
              <CarouselNext className="static translate-y-0 h-12 w-12 border-white/10 bg-white/5 hover:bg-white/10" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

