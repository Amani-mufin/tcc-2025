import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScheduleTimeline } from "@/components/schedule/schedule-timeline"

export const metadata = {
  title: "Schedule | Calabar Tech Conference 2025",
  description:
    "View the complete schedule for Calabar Tech Conference 2025. Two days of inspiring talks, workshops, and networking opportunities.",
}

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Conference <span className="text-primary">Schedule</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                Two days packed with inspiring talks, hands-on workshops, and networking opportunities. Plan your
                perfect conference experience.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Keynote Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span>Workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                  <span>Networking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Timeline */}
        <ScheduleTimeline />
      </main>
      <Footer />
    </div>
  )
}
