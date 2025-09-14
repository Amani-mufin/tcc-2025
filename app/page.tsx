import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { AboutPreview } from "@/components/home/about-preview"
import { SpeakersPreview } from "@/components/home/speakers-preview"
import { SponsorsCarousel } from "@/components/home/sponsors-carousel"
import { RegistrationCards } from "@/components/register/registration-cards"
import { TeamPreview } from "@/components/home/team-preview"
import { ScheduleSection } from '@/components/home/schedule-section';
import { VenueSection } from '@/components/home/venue-section';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutPreview />
        <SpeakersPreview />
        <SponsorsCarousel />
        <RegistrationCards />
        <TeamPreview />
        <ScheduleSection />
        <VenueSection />
      </main>
      <Footer />
    </div>
  )
}
