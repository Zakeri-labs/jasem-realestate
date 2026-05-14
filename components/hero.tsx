"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useApp } from './app-context'
import { ArrowRight, ArrowLeft, Play, X } from 'lucide-react'
import { SearchBar } from './search-bar'
import { useIsMobile } from '@/hooks/use-mobile'

export function Hero() {
  const { theme, t, isRTL, language } = useApp()
  const isMobile = useIsMobile()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const heroImages = {
    light: '/images/hiro-light.webp',
    dark: '/images/hiro-dark.webp',
    mobileLight: '/images/mobile-hiro-light.webp',
    mobileDark: '/images/mobile-hiro-dark.webp'
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971505454567`, '_blank')
  }

  return (
    <section className="relative min-h-screen lg:h-screen lg:min-h-[700px] z-[30] flex flex-col">
      {/* Background Images with Theme Transition */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className={`absolute inset-0 ${isRTL ? 'scale-x-[-1]' : ''}`}
        >
          <Image
            src={
              isMobile 
                ? (theme === 'light' ? heroImages.mobileLight : heroImages.mobileDark)
                : (theme === 'light' ? heroImages.light : heroImages.dark)
            }
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        {/* Overlay for readability */}
        <div className={`absolute inset-0 transition-colors duration-1000 ${
          theme === 'light' ? 'bg-black/5' : 'bg-transparent'
        }`} />
        
        {/* Smoother transition border at bottom */}
        <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t pointer-events-none ${
          theme === 'light' ? 'from-[#fefdfc] to-transparent' : 'from-[#011023] to-transparent'
        }`} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center px-6 pb-20 pt-44 sm:pt-52 lg:px-12 lg:pb-20 lg:pt-20">
        {/* Founder Card for Mobile - Above Title */}
        <div className="lg:hidden mb-8">
          <FounderCard 
            theme={theme} 
            language={language} 
            isRTL={isRTL} 
            handleWhatsApp={handleWhatsApp}
            isVideoPlaying={isVideoPlaying}
            setIsVideoPlaying={setIsVideoPlaying}
            isMobile={true}
            isActive={isMobile}
          />
        </div>

        <div className={`max-w-xl ${isRTL ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`mb-6 font-serif text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl ${
              theme === 'light' ? 'text-neutral-900' : 'text-white'
            }`}
          >
            <span className="text-balance">{t('heroTitle')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-10 max-w-md text-base leading-relaxed ${
              theme === 'light' ? 'text-neutral-800' : 'text-white/80'
            }`}
          >
            {t('heroSubtitle')}
          </motion.p>

          {/* CTA Buttons Container */}
          <div className={`flex flex-col gap-4 mb-5 mt-5 ${
            isRTL 
              ? 'items-end' 
              : (language === 'en' || language === 'ru' ? 'items-start' : '')
          } lg:flex-row lg:items-center lg:mb-0 lg:mt-0`}>
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-fit"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className={`group flex items-center justify-center gap-3 rounded-full glass-card glass-shine px-8 py-4 text-sm font-semibold transition-all ${
                  theme === 'light' ? 'text-primary-glass' : 'text-white'
                } ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('exploreProperties')}
                <Arrow className={`h-4 w-4 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </motion.button>
            </motion.div>

            {/* Watch Video Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-fit"
            >
              <motion.button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex items-center justify-center gap-3 rounded-full glass-card px-6 py-3 text-sm font-semibold transition-all border border-white/10 ${
                  theme === 'light' ? 'text-neutral-900' : 'text-white'
                } ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                  {isVideoPlaying ? <X className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
                </div>
                <span>{isVideoPlaying ? (isRTL ? 'بستن ویدئو' : 'Close video') : (isRTL ? 'مشاهده ویدئو' : 'Watch video')}</span>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Founder Card for Desktop - Absolute */}
        <div className="hidden lg:block">
          <FounderCard 
            theme={theme} 
            language={language} 
            isRTL={isRTL} 
            handleWhatsApp={handleWhatsApp}
            isVideoPlaying={isVideoPlaying}
            setIsVideoPlaying={setIsVideoPlaying}
            isMobile={false}
            isActive={!isMobile}
          />
        </div>
      </div>

      {/* Search Bar Container - Fixed for all breakpoints */}
      <div className="relative z-[40] w-full mt-auto px-6 pb-12 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-[1200px] lg:px-0 lg:pb-0">
        <SearchBar />
      </div>
    </section>
  )
}

function FounderCard({ theme, language, isRTL, handleWhatsApp, isVideoPlaying, setIsVideoPlaying, isMobile, isActive }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        y: 0,
        width: isVideoPlaying ? (isMobile ? '100%' : 600) : (isMobile ? '100%' : 380),
      }}
      transition={{ 
        duration: 0.7, 
        ease: [0.23, 1, 0.32, 1],
      }}
      className={isMobile ? "relative z-20" : `absolute bottom-[180px] z-20 ${isRTL ? 'left-6 lg:left-12' : 'right-6 lg:right-12'} overflow-hidden sm:bottom-[200px] lg:bottom-[220px]`}
    >
      <motion.div 
        className={`h-full w-full rounded-[1.2rem] p-4 shadow-2xl glass-card relative transition-all duration-700 ease-[0.23,1,0.32,1] ${
          isVideoPlaying ? 'aspect-video' : ''
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!isVideoPlaying ? (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={handleWhatsApp}
              className={`flex items-center gap-5 cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {/* Profile Image */}
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/20 bg-white p-1 sm:h-24 sm:w-24">
                <div className="relative h-full w-full rounded-full overflow-hidden">
                  <Image
                    src="/images/jasem.webp"
                    alt="Jasem Al Awadi"
                    fill
                    className="object-cover scale-125 origin-center"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className={`font-serif text-xl font-medium mb-0.5 sm:text-2xl ${
                  theme === 'light' ? 'text-neutral-900' : 'text-white'
                }`}>
                  {language === 'fa' ? 'جاسم العوضی' : language === 'ar' ? 'جاسم العوضي' : language === 'ru' ? 'Джасем Аль Авади' : 'Jasem Al Awadi'}
                </h3>
                <p className="text-primary font-medium tracking-wide text-[10px] mb-2 uppercase sm:text-xs">
                  {language === 'fa' ? 'موسس و مدیرعامل' : language === 'ar' ? 'المؤسس والمدیر التنفيذي' : language === 'ru' ? 'Основатель и гендиректор' : 'Founder & CEO'}
                </p>
                <p className={`text-xs leading-relaxed max-w-[180px] sm:text-sm sm:max-w-[200px] ${
                  theme === 'light' ? 'text-neutral-600' : 'text-white/70'
                }`}>
                  {language === 'fa' 
                    ? 'شریک مورد اعتماد شما در یافتن املاک استثنایی.' 
                    : language === 'ar'
                    ? 'شريكك الموثوق في العثور على عقارات استثنائية.'
                    : language === 'ru'
                    ? 'Ваш надежный партнер в поиске исключительной недвижимости.'
                    : 'Your trusted partner in finding exceptional properties.'
                  }
                </p>
              </div>
            </motion.div>
          ) : isActive ? (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black overflow-hidden rounded-[1rem]"
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVideoPlaying(false);
                }}
                className="absolute top-3 right-3 z-30 h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md"
              >
                <X className="h-4 w-4 text-white" />
              </button>
              
              {/* Video Player */}
              <div className="relative h-full w-full">
                <video
                  autoPlay
                  controls
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/22.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
