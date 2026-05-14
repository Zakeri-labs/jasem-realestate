"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useApp } from './app-context'
import { MessageCircle, Send, User, Phone, MessageSquare } from 'lucide-react'

export function ContactSection() {
  const { theme, isRTL } = useApp()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    window.open(`https://wa.me/971505454567?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 relative z-10">
        <div className={`grid items-center gap-20 lg:grid-cols-2 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Left Side: Text Content */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6">
                {isRTL ? 'در تماس باشید' : 'Get in Touch'}
              </span>
              <h2 className={`mb-8 font-serif text-5xl font-medium leading-tight sm:text-6xl lg:text-7xl ${
                theme === 'light' ? 'text-neutral-900' : 'text-white'
              }`}>
                {isRTL ? 'خانه رویایی خود را پیدا کنید' : "Let's Find Your Dream Property"}
              </h2>
              <p className={`mb-12 max-w-md text-xl font-light leading-relaxed ${
                theme === 'light' ? 'text-neutral-500' : 'text-white/50'
              }`}>
                {isRTL 
                  ? 'اطلاعات خود را بفرستید تا مشاوران ما در سریع‌ترین زمان ممکن در واتساپ با شما در ارتباط باشند.'
                  : 'Send us your details, and our experts will reach out to you on WhatsApp instantly.'
                }
              </p>
              
              <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="flex -space-x-3 rtl:space-x-reverse">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-full border-2 border-white/20 bg-neutral-800 overflow-hidden">
                      <Image src={`/images/consultant.webp`} alt="Agent" width={48} height={48} className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <p className={`font-bold text-lg ${theme === 'light' ? 'text-neutral-900' : 'text-white'}`}>1,200+</p>
                  <p className={theme === 'light' ? 'text-neutral-500' : 'text-white/40'}>{isRTL ? 'مشتری راضی' : 'Happy Clients'}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Creative WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className={`relative z-10 p-1 rounded-[3rem] shadow-2xl border ${
              theme === 'light' ? 'bg-white/50 border-neutral-200 shadow-neutral-200' : 'bg-white/5 border-white/10 shadow-black/40'
            } backdrop-blur-3xl`}>
              <form onSubmit={handleWhatsApp} className="rounded-[2.8rem] p-10 space-y-8">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="relative group">
                    <User className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} h-5 w-5 transition-colors group-focus-within:text-primary ${
                      theme === 'light' ? 'text-neutral-400' : 'text-white/30'
                    }`} />
                    <input
                      type="text"
                      placeholder={isRTL ? 'نام کامل شما' : 'Your Full Name'}
                      required
                      className={`w-full bg-white/5 border rounded-2xl py-5 ${isRTL ? 'pr-12 pl-6' : 'pl-12 pr-6'} transition-all ${
                        theme === 'light' 
                        ? 'border-neutral-200 text-neutral-900 placeholder:text-neutral-400' 
                        : 'border-white/10 text-white placeholder:text-white/20 focus:border-primary/50'
                      } focus:outline-none`}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative group">
                    <Phone className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'right-4' : 'left-4'} h-5 w-5 transition-colors group-focus-within:text-primary ${
                      theme === 'light' ? 'text-neutral-400' : 'text-white/30'
                    }`} />
                    <input
                      type="tel"
                      placeholder={isRTL ? 'شماره تماس' : 'Phone Number'}
                      required
                      className={`w-full bg-white/5 border rounded-2xl py-5 ${isRTL ? 'pr-12 pl-6' : 'pl-12 pr-6'} transition-all ${
                        theme === 'light' 
                        ? 'border-neutral-200 text-neutral-900 placeholder:text-neutral-400' 
                        : 'border-white/10 text-white placeholder:text-white/20 focus:border-primary/50'
                      } focus:outline-none`}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative group">
                    <MessageSquare className={`absolute top-6 ${isRTL ? 'right-4' : 'left-4'} h-5 w-5 transition-colors group-focus-within:text-primary ${
                      theme === 'light' ? 'text-neutral-400' : 'text-white/30'
                    }`} />
                    <textarea
                      placeholder={isRTL ? 'چطور می‌توانیم به شما کمک کنیم؟' : 'How can we help you?'}
                      rows={4}
                      className={`w-full bg-white/5 border rounded-2xl py-5 ${isRTL ? 'pr-12 pl-6' : 'pl-12 pr-6'} transition-all resize-none ${
                        theme === 'light' 
                        ? 'border-neutral-200 text-neutral-900 placeholder:text-neutral-400' 
                        : 'border-white/10 text-white placeholder:text-white/20 focus:border-primary/50'
                      } focus:outline-none`}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full font-bold py-6 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg backdrop-blur-xl border ${
                    theme === 'light'
                    ? 'bg-neutral-900/10 border-neutral-200 text-neutral-900 hover:bg-neutral-900/20 shadow-neutral-200/20'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20 shadow-primary/20'
                  }`}
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-lg">{isRTL ? 'ارسال به واتساپ' : 'Send to WhatsApp'}</span>
                  <Send className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

