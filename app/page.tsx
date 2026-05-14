"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SignatureProjects } from "@/components/featured-areas"
import { FeaturesIcons } from "@/components/features-icons"
import { BuiltOnTrust } from "@/components/about-consultant"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/consultation-cta"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturesIcons />
        <SignatureProjects />
        <BuiltOnTrust />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
