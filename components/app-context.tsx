"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'fa' | 'ar' | 'ru'
type Theme = 'light' | 'dark'

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  isRTL: boolean
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    buy: 'Buy',
    rent: 'Rent',
    projects: 'Projects',
    offPlan: 'Off-plan',
    about: 'About',
    contact: 'Contact',
    consultation: 'Book Consultation',
    
    // Hero
    heroTitle: 'Find Your Dream Property in Dubai',
    heroSubtitle: 'Luxury living. Smart investment. Premium lifestyle.',
    exploreProperties: 'Explore Properties',
    bookConsultation: 'Book Consultation',
    
    // Search
    location: 'Location',
    propertyType: 'Property Type',
    priceRange: 'Price Range',
    bedsBaths: 'Beds & Baths',
    search: 'Search',
    anyLocation: 'Any Location',
    anyType: 'Any Type',
    anyPrice: 'Any Price',
    anyBeds: 'Any',
    
    // Featured Areas
    featuredAreas: 'Signature Projects',
    featuredAreasSubtitle: 'Discover Dubai\'s most prestigious neighborhoods',
    viewProperties: 'View Properties',
    viewAllProjects: 'View All Projects',
    
    // Property Types
    villa: 'Villa',
    apartment: 'Apartment',
    penthouse: 'Penthouse',
    townhouse: 'Townhouse',
    
    // Premium Listings
    premiumListings: 'Premium Listings',
    premiumListingsSubtitle: 'Handpicked luxury properties for discerning buyers',
    beds: 'Beds',
    baths: 'Baths',
    sqft: 'Sq.Ft',
    viewDetails: 'View Details',
    
    // About Consultant
    aboutConsultant: 'Your Trusted Partner',
    aboutConsultantSubtitle: 'With 39 years of Dubai expertise',
    yearsExperience: 'Years in Dubai',
    propertiesSold: 'Properties Sold',
    happyClients: 'Happy Clients',
    developerPartners: 'Developer Partners',
    aboutDescription: 'Jasem Al Awadi brings nearly four decades of deep-rooted expertise in Dubai real estate. As a trusted consultant, we specialize in investment consulting, direct developer purchases, and installment properties across Dubai\'s most prestigious locations.',
    languagesSpoken: 'Languages Spoken',
    arabic: 'Arabic',
    english: 'English',
    urdu: 'Urdu',
    russian: 'Russian',
    
    // Blog
    latestBlog: 'Latest from Our Blog',
    readMore: 'Read More',
    
    // Footer
    footerTagline: 'Luxury Real Estate Excellence',
    quickLinks: 'Quick Links',
    contactUs: 'Contact Us',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
  },
  fa: {
    // Header
    buy: 'خرید',
    rent: 'اجاره',
    projects: 'پروژه‌ها',
    offPlan: 'پیش‌فروش',
    about: 'درباره ما',
    contact: 'تماس',
    consultation: 'رزرو مشاوره',
    
    // Hero
    heroTitle: 'ملک رویایی خود را در دبی پیدا کنید',
    heroSubtitle: 'زندگی لوکس. سرمایه‌گذاری هوشمند. سبک زندگی ممتاز.',
    exploreProperties: 'مشاهده املاک',
    bookConsultation: 'رزرو مشاوره',
    
    // Search
    location: 'موقعیت',
    propertyType: 'نوع ملک',
    priceRange: 'محدوده قیمت',
    bedsBaths: 'اتاق و حمام',
    search: 'جستجو',
    anyLocation: 'همه مناطق',
    anyType: 'همه انواع',
    anyPrice: 'همه قیمت‌ها',
    anyBeds: 'همه',
    
    // Featured Areas
    featuredAreas: 'پروژه‌های شاخص',
    featuredAreasSubtitle: 'معتبرترین محله‌های دبی را کشف کنید',
    viewProperties: 'مشاهده املاک',
    viewAllProjects: 'مشاهده همه پروژه‌ها',
    
    // Property Types
    villa: 'ویلا',
    apartment: 'آپارتمان',
    penthouse: 'پنت‌هاوس',
    townhouse: 'تاون‌هاوس',
    
    // Premium Listings
    premiumListings: 'املاک ویژه',
    premiumListingsSubtitle: 'املاک لوکس منتخب برای خریداران خاص',
    beds: 'خواب',
    baths: 'حمام',
    sqft: 'فوت مربع',
    viewDetails: 'جزئیات',
    
    // About Consultant
    aboutConsultant: 'شریک مورد اعتماد شما',
    aboutConsultantSubtitle: 'با ۳۹ سال تجربه در دبی',
    yearsExperience: 'سال در دبی',
    propertiesSold: 'ملک فروخته شده',
    happyClients: 'مشتری راضی',
    developerPartners: 'شریک سازنده',
    aboutDescription: 'جاسم العوضی نزدیک به چهار دهه تخصص عمیق در املاک دبی دارد. به عنوان یک مشاور مورد اعتماد، ما در مشاوره سرمایه‌گذاری، خرید مستقیم از سازنده و املاک اقساطی در معتبرترین مناطق دبی تخصص داریم.',
    languagesSpoken: 'زبان‌های گفتاری',
    arabic: 'عربی',
    english: 'انگلیسی',
    urdu: 'اردو',
    russian: 'روسی',

    // Blog
    latestBlog: 'آخرین مقالات وبلاگ',
    readMore: 'بیشتر بخوانید',

    // Built on Trust
    builtOnTrust: 'بنا شده بر اعتماد',
    focusOnYou: 'تمرکز بر شما',
    
    // Footer
    footerTagline: 'برتری در املاک لوکس',
    quickLinks: 'لینک‌های سریع',
    contactUs: 'تماس با ما',
    followUs: 'ما را دنبال کنید',
    allRightsReserved: 'کلیه حقوق محفوظ است.',
  },
  ar: {
    // Header
    buy: 'شراء',
    rent: 'إيجار',
    projects: 'المشاريع',
    offPlan: 'على الخارطة',
    about: 'عنا',
    contact: 'اتصل بنا',
    consultation: 'احجز استشارة',
    
    // Hero
    heroTitle: 'اعثر على عقار أحلامك في دبي',
    heroSubtitle: 'حياة فاخرة. استثمار ذكي. نمط حياة مميز.',
    exploreProperties: 'استكشف العقارات',
    bookConsultation: 'احجز استشارة',
    
    // Search
    location: 'الموقع',
    propertyType: 'نوع العقار',
    priceRange: 'نطاق السعر',
    bedsBaths: 'الغرف والحمامات',
    search: 'بحث',
    anyLocation: 'أي موقع',
    anyType: 'أي نوع',
    anyPrice: 'أي سعر',
    anyBeds: 'الكل',
    
    // Featured Areas
    featuredAreas: 'المشاريع المميزة',
    featuredAreasSubtitle: 'اكتشف أرقى أحياء دبي',
    viewProperties: 'عرض العقارات',
    viewAllProjects: 'عرض جميع المشاريع',
    
    // Property Types
    villa: 'فيلا',
    apartment: 'شقة',
    penthouse: 'بنتهاوس',
    townhouse: 'تاون هاوس',
    
    // Premium Listings
    premiumListings: 'العقارات المميزة',
    premiumListingsSubtitle: 'عقارات فاخرة مختارة للمشترين المميزين',
    beds: 'غرف',
    baths: 'حمامات',
    sqft: 'قدم مربع',
    viewDetails: 'عرض التفاصيل',
    
    // About Consultant
    aboutConsultant: 'شريكك الموثوق',
    aboutConsultantSubtitle: 'مع 39 عاماً من الخبرة في دبي',
    yearsExperience: 'سنة في دبي',
    propertiesSold: 'عقار مباع',
    happyClients: 'عميل سعيد',
    developerPartners: 'شريك مطور',
    aboutDescription: 'يقدم جاسم العوضي ما يقارب أربعة عقود من الخبرة العميقة في عقارات دبي. كمستشار موثوق، نحن متخصصون في الاستشارات الاستثمارية والشراء المباشر من المطورين والعقارات بالتقسيط في أرقى مواقع دبي.',
    languagesSpoken: 'اللغات المحكية',
    arabic: 'العربية',
    english: 'الإنجليزية',
    urdu: 'الأردية',
    russian: 'الروسية',

    // Blog
    latestBlog: 'آخر المقالات',
    readMore: 'اقرأ المزيد',
    
    // Footer
    footerTagline: 'التميز في العقارات الفاخرة',
    quickLinks: 'روابط سريعة',
    contactUs: 'اتصل بنا',
    followUs: 'تابعنا',
    allRightsReserved: 'جميع الحقوق محفوظة.',
  },
  ru: {
    // Header
    buy: 'Купить',
    rent: 'Аренда',
    projects: 'Проекты',
    offPlan: 'Новостройки',
    about: 'О нас',
    contact: 'Контакты',
    consultation: 'Консультация',
    
    // Hero
    heroTitle: 'Найдите недвижимость мечты в Дубае',
    heroSubtitle: 'Роскошная жизнь. Умные инвестиции. Премиальный стиль.',
    exploreProperties: 'Смотреть объекты',
    bookConsultation: 'Записаться',
    
    // Search
    location: 'Локация',
    propertyType: 'Тип объекта',
    priceRange: 'Цена',
    bedsBaths: 'Спальни',
    search: 'Поиск',
    anyLocation: 'Все районы',
    anyType: 'Все типы',
    anyPrice: 'Любая цена',
    anyBeds: 'Все',
    
    // Featured Areas
    featuredAreas: 'Знаковые проекты',
    featuredAreasSubtitle: 'Откройте для себя самые престижные районы Дубая',
    viewProperties: 'Смотреть объекты',
    viewAllProjects: 'Все проекты',
    
    // Property Types
    villa: 'Вилла',
    apartment: 'Апартаменты',
    penthouse: 'Пентхаус',
    townhouse: 'Таунхаус',
    
    // Premium Listings
    premiumListings: 'Премиум предложения',
    premiumListingsSubtitle: 'Отобранная элитная недвижимость',
    beds: 'Спальни',
    baths: 'Ванные',
    sqft: 'Кв.футы',
    viewDetails: 'Подробнее',
    
    // About Consultant
    aboutConsultant: 'Ваш надежный партнер',
    aboutConsultantSubtitle: '39 лет опыта в Дубае',
    yearsExperience: 'Лет в Дубае',
    propertiesSold: 'Продано объектов',
    happyClients: 'Довольных клиентов',
    developerPartners: 'Партнеры-застройщики',
    aboutDescription: 'Джасем Аль Авади обладает почти сорокалетним опытом работы на рынке недвижимости Дубая. Мы специализируемся на инвестиционном консалтинге и прямой покупке у застройщиков.',
    languagesSpoken: 'Языки',
    arabic: 'Арабский',
    english: 'Английский',
    urdu: 'Урду',
    russian: 'Русский',

    // Blog
    latestBlog: 'Последние статьи',
    readMore: 'Читать далее',
    
    // Footer
    footerTagline: 'Превосходство в элитной недвижимости',
    quickLinks: 'Ссылки',
    contactUs: 'Контакты',
    followUs: 'Мы в соцсетях',
    allRightsReserved: 'Все права защищены.',
  },
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [theme, setThemeState] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check system preference for theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const savedLanguage = localStorage.getItem('language') as Language | null
    
    if (savedTheme) {
      setThemeState(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else {
      // Default to dark as requested, or follow system if preferred
      setThemeState('dark')
      document.documentElement.classList.add('dark')
    }
    
    if (savedLanguage) {
      setLanguageState(savedLanguage)
      document.documentElement.dir = savedLanguage === 'en' ? 'ltr' : 'rtl'
      document.documentElement.lang = savedLanguage
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl'
    document.documentElement.lang = lang
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const isRTL = language === 'fa' || language === 'ar'

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, isRTL, t }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
