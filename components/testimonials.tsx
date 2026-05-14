"use client"

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useApp } from './app-context'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al Maktoum',
    role: 'Investor',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Working with Jasem Al Awadi was an exceptional experience. His deep knowledge of the Dubai market and his honest approach made our investment journey seamless. We purchased our dream villa in Palm Jumeirah and couldn\'t be happier.',
    avatar: 'AM',
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    role: 'Homeowner',
    location: 'London, UK',
    rating: 5,
    text: 'As an international buyer, I was nervous about purchasing property in Dubai. Jasem and his team guided me through every step, from viewing to signing. Their multilingual support was invaluable. Highly recommended!',
    avatar: 'ST',
  },
  {
    id: 3,
    name: 'محمد رضایی',
    role: 'سرمایه‌گذار',
    location: 'Tehran, Iran',
    rating: 5,
    text: 'با جاسم العوضی کار کردن تجربه‌ای فوق‌العاده بود. تخصص و صداقت ایشان در بازار دبی بی‌نظیر است. ما موفق به خرید یک آپارتمان لوکس در دانتاون دبی شدیم.',
    avatar: 'MR',
  },
  {
    id: 4,
    name: 'Viktor Petrov',
    role: 'Business Owner',
    location: 'Moscow, Russia',
    rating: 5,
    text: 'I\'ve worked with many real estate consultants globally, but Jasem\'s expertise in Dubai\'s luxury market is unmatched. He helped me build a portfolio of premium properties that have significantly appreciated in value.',
    avatar: 'VP',
  },
]

export function Testimonials() {
  const { t, isRTL } = useApp()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`mb-16 text-center`}
        >
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t('testimonials')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('testimonialsSubtitle')}
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative mx-auto max-w-4xl">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2"
          >
            <Quote className="h-24 w-24 text-primary" />
          </motion.div>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-3xl p-8 shadow-xl sm:p-12"
            >
              {/* Stars */}
              <div className="mb-6 flex justify-center gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="mb-8 text-center text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-center">
                  <div className="font-serif text-lg font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-background transition-colors hover:border-primary hover:bg-primary/5"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-background transition-colors hover:border-primary hover:bg-primary/5"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
