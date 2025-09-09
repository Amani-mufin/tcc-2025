import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SpeakersGrid } from "@/components/speakers/speakers-grid"

export const metadata = {
  title: "Speakers | Calabar Tech Conference 2025",
  description:
    "Meet our amazing lineup of speakers for Calabar Tech Conference 2025. Industry experts, thought leaders, and innovators from across Africa and beyond.",
}

export default function SpeakersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Meet Our <span className="text-primary">Speakers</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Learn from industry experts, thought leaders, and innovators who are shaping the future of technology in
                Africa and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Speakers Grid */}
        <SpeakersGrid />
      </main>
      <Footer />
    </div>
  )
}
