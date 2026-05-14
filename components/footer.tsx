"use client"

import { motion } from 'framer-motion'
import { useApp } from './app-context'
import { Instagram, Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/jasem.realestate', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

const navLinks = ['buy', 'rent', 'projects', 'offPlan', 'about', 'contact'] as const

export function Footer() {
  const { t, isRTL } = useApp()
  const currentYear = new Date().getFullYear()

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971505454567`, '_blank')
  }

  return (
    <footer className="relative bg-[#011023] text-white dark:bg-white dark:text-black transition-colors duration-300">
      {/* Top Wave */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-12 w-full fill-[#fefdfc] dark:fill-[#011023] transition-colors duration-300"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1280px] px-4 pb-8 pt-20 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 gap-8 lg:grid-cols-4 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-4 font-serif text-2xl font-bold uppercase tracking-tight">JASEM AL AWADI</h3>
              <p className="mb-6 text-sm text-white/70 dark:text-black/70 leading-relaxed">
                {t('footerTagline')}
              </p>
              
              {/* Social Links */}
              <div className={`flex gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 dark:bg-black/10 transition-colors hover:bg-white/20 dark:hover:bg-black/20"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/50 dark:text-black/50">
                {t('quickLinks')}
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      className="text-sm text-white/70 dark:text-black/70 transition-colors hover:text-white dark:hover:text-black"
                    >
                      {t(link)}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/50 dark:text-black/50">
                {t('contactUs')}
              </h4>
              <ul className="space-y-6">
                <li className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 dark:bg-black/5">
                    <MapPin className="h-5 w-5 text-white/50 dark:text-black/50" />
                  </div>
                  <span className="text-sm text-white/70 dark:text-black/70 leading-relaxed">
                    Business Bay, Dubai<br />
                    United Arab Emirates
                  </span>
                </li>
                <li className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 dark:bg-black/5">
                    <Phone className="h-5 w-5 text-white/50 dark:text-black/50" />
                  </div>
                  <a href="tel:+971505454567" className="text-sm text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black font-medium">
                    +971 50 545 4567
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* WhatsApp CTA Section */}
          <div className="col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl bg-white/5 dark:bg-black/5 p-8 border border-white/10 dark:border-black/10"
            >
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white dark:text-black">
                {isRTL ? 'ارتباط مستقیم' : 'Direct Contact'}
              </h4>
              <p className="mb-6 text-sm text-white/60 dark:text-black/60 leading-relaxed">
                {isRTL 
                  ? 'برای مشاوره رایگان و فوری در واتساپ با ما در ارتباط باشید.' 
                  : 'Get instant expert advice via WhatsApp chat.'}
              </p>
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white dark:bg-black px-6 py-4 text-sm font-bold text-[#011023] dark:text-white transition-all hover:bg-white/90 dark:hover:bg-black/90"
              >
                <MessageCircle className="h-5 w-5" />
                {isRTL ? 'ارسال پیام در واتساپ' : 'Chat on WhatsApp'}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 dark:border-black/10 pt-8 sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}
        >
          <p className="text-sm text-white/50 dark:text-black/50">
            © {currentYear} Jasem Al Awadi Real Estate. {t('allRightsReserved')}
          </p>
          <div className={`flex gap-6 text-sm text-white/50 dark:text-black/50 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a href="#" className="hover:text-white dark:hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-white dark:hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-white dark:hover:text-black">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
