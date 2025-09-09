import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { AboutPreview } from "@/components/home/about-preview"
import { CountdownTimer } from "@/components/home/countdown-timer"
import { SponsorsCarousel } from "@/components/home/sponsors-carousel"
import { FinalCTA } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutPreview />
        <CountdownTimer />
        <SponsorsCarousel />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
