import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AppProvider } from '@/components/app-context'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jasem Al Awadi Real Estate | Luxury Properties in Dubai',
  description: 'Discover ultra-premium properties in Dubai with Jasem Al Awadi Real Estate. 39 years of trusted expertise in luxury living, smart investments, and premium lifestyle.',
  keywords: ['Dubai real estate', 'luxury properties', 'Palm Jumeirah', 'Downtown Dubai', 'Dubai Marina', 'Emirates Hills', 'investment', 'premium lifestyle'],
  authors: [{ name: 'Jasem Al Awadi' }],
  openGraph: {
    title: 'Jasem Al Awadi Real Estate | Luxury Properties in Dubai',
    description: 'Discover ultra-premium properties in Dubai with 39 years of trusted expertise.',
    type: 'website',
    locale: 'en_AE',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f0e8' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1527' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background`}
        suppressHydrationWarning
      >
        <AppProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </AppProvider>
      </body>
    </html>
  )
}
