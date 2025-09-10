import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { AboutPreview } from "@/components/home/about-preview"
import { SponsorsCarousel } from "@/components/home/sponsors-carousel"
import { RegistrationCards } from "@/components/register/registration-cards"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutPreview />
        <SponsorsCarousel />
        <RegistrationCards />
      </main>
      <Footer />
    </div>
  )
}
