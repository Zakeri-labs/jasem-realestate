"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useApp } from './app-context'
import { ArrowRight, ArrowLeft, Calendar, Clock } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const posts = [
  {
    id: 1,
    titleEn: 'Dubai Real Estate Market Outlook 2024',
    titleFa: 'چشم‌انداز بازار املاک دبی در سال ۲۰۲۴',
    dateEn: 'May 12, 2024',
    dateFa: '۲۳ اردیبهشت ۱۴۰۳',
    readTimeEn: '5 min read',
    readTimeFa: '۵ دقیقه مطالعه',
    image: '/images/property-card.webp',
  },
  {
    id: 2,
    titleEn: 'Why Waterfront Properties Are in High Demand',
    titleFa: 'چرا املاک ساحلی تقاضای بالایی دارند؟',
    dateEn: 'Apr 28, 2024',
    dateFa: '۹ اردیبهشت ۱۴۰۳',
    readTimeEn: '4 min read',
    readTimeFa: '۴ دقیقه مطالعه',
    image: '/images/emirates-hills.webp',
  },
  {
    id: 3,
    titleEn: 'Living the Ultra-Luxury Lifestyle in Palm Jumeirah',
    titleFa: 'زندگی به سبک فوق لوکس در نخل جمیرا',
    dateEn: 'Apr 15, 2024',
    dateFa: '۲۷ فروردین ۱۴۰۳',
    readTimeEn: '6 min read',
    readTimeFa: '۶ دقیقه مطالعه',
    image: '/images/downtown-dubai.webp',
  },
  {
    id: 4,
    titleEn: 'A Guide to Buying Off-Plan Property',
    titleFa: 'راهنمای خرید املاک پیش‌فروش',
    dateEn: 'Apr 5, 2024',
    dateFa: '۱۷ فروردین ۱۴۰۳',
    readTimeEn: '6 min read',
    readTimeFa: '۶ دقیقه مطالعه',
    image: '/images/dubai-marina.webp',
  },
]

export function BlogSection() {
  const { theme, isRTL, t } = useApp()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971505454567`, '_blank')
  }

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
              {t('latestBlog')}
            </h2>
          </motion.div>
        </div>

        {/* Blog Carousel */}
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
              {posts.map((post) => (
                <CarouselItem key={post.id} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <motion.div
                    whileHover={{ y: -10 }}
                    onClick={handleWhatsApp}
                    className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={isRTL ? post.titleFa : post.titleEn}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className={`p-8 space-y-4 backdrop-blur-xl transition-colors duration-500 ${
                      theme === 'light' 
                      ? 'bg-neutral-800/40 text-white' 
                      : 'bg-white/5'
                    } ${isRTL ? 'text-right' : 'text-left'}`}>
                      <div className={`flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.15em] ${
                        theme === 'light' ? 'text-white/60' : 'text-white/40'
                      } ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {isRTL ? post.dateFa : post.dateEn}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-primary/40" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {isRTL ? post.readTimeFa : post.readTimeEn}
                        </span>
                      </div>
                      <h3 className={`font-serif text-xl font-medium leading-tight transition-colors group-hover:text-primary ${
                        theme === 'light' ? 'text-white' : 'text-white'
                      }`}>
                        {isRTL ? post.titleFa : post.titleEn}
                      </h3>
                      <div className={`flex items-center pt-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <motion.div
                          whileHover={{ x: isRTL ? -5 : 5 }}
                          className={`flex items-center gap-2 text-sm font-bold ${
                            theme === 'light' ? 'text-white' : 'text-white'
                          } ${isRTL ? 'flex-row-reverse' : ''}`}
                        >
                          {isRTL ? 'بیشتر بخوانید' : 'Read More'}
                          <Arrow className="h-4 w-4 text-primary" />
                        </motion.div>
                      </div>
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
