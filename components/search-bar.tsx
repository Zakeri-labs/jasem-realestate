"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Building2, Tag, ChevronDown } from 'lucide-react'
import { useApp } from './app-context'

export function SearchBar() {
  const { theme, t, isRTL } = useApp()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [location, setLocation] = useState('Dubai Marina')
  const [propertyType, setPropertyType] = useState('Apartment')
  const [priceRange, setPriceRange] = useState('AED 2M - 5M')

  const fields = [
    { id: 'location', label: t('location'), value: location, setValue: setLocation, icon: MapPin, options: ['Dubai Marina', 'Palm Jumeirah', 'Downtown Dubai', 'Business Bay'] },
    { id: 'type', label: t('propertyType'), value: propertyType, setValue: setPropertyType, icon: Building2, options: ['Apartment', 'Villa', 'Penthouse', 'Townhouse'] },
    { id: 'price', label: t('priceRange'), value: priceRange, setValue: setPriceRange, icon: Tag, options: ['AED 1M - 2M', 'AED 2M - 5M', 'AED 5M - 10M', 'AED 10M+'] },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="relative z-[50] w-full"
    >
      <div className="relative rounded-2xl p-2 shadow-2xl glass-search lg:rounded-full">
        <div className={`flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {fields.map((field, index) => (
            <div
              key={field.id}
              className={`relative flex-1 ${
                index !== fields.length - 1 ? 'lg:border-r lg:border-black/5 dark:lg:border-white/5' : ''
              } ${isRTL && index !== 0 ? 'lg:border-l lg:border-r-0 lg:border-black/5 dark:lg:border-white/5' : ''}`}
            >
              <div
                onClick={() => setOpenDropdown(openDropdown === field.id ? null : field.id)}
                className="group cursor-pointer rounded-xl px-6 py-3 transition-colors lg:rounded-none"
              >
                <div className={`flex items-center gap-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <field.icon className={`h-5 w-5 flex-shrink-0 ${theme === 'light' ? 'text-primary-glass/70' : 'text-white/60'}`} />
                  <div className={`min-w-0 flex-1 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <p className="text-[11px] uppercase tracking-wider font-medium text-secondary-glass">
                      {field.label}
                    </p>
                    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <p className="truncate text-sm font-semibold text-primary-glass">
                        {field.value}
                      </p>
                      <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform ${openDropdown === field.id ? 'rotate-180' : ''} text-secondary-glass`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {openDropdown === field.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 right-0 z-[1000] mt-4 max-h-60 overflow-y-auto rounded-2xl shadow-2xl bg-black/80 backdrop-blur-xl border border-white/10 p-2 lg:left-auto lg:min-w-[240px]"
                  >
                    {field.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          field.setValue(option)
                          setOpenDropdown(null)
                        }}
                        className={`w-full rounded-xl px-4 py-3 text-sm font-medium transition-colors ${isRTL ? 'text-right' : 'text-left'} ${
                          field.value === option
                            ? 'bg-white/10 text-white'
                            : 'text-white/60 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Search Button */}
          <div className="p-2 lg:p-0 lg:px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl py-4 transition-all glass-search glass-shine lg:h-12 lg:w-12 lg:rounded-full border-none shadow-none"
            >
              <Search className={`h-5 w-5 ${theme === 'light' ? 'text-primary-glass' : 'text-white'}`} />
              <span className={`lg:hidden font-semibold ${theme === 'light' ? 'text-primary-glass' : 'text-white'}`}>{t('search')}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
