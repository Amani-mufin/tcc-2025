import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about/about-hero";
import { MissionVision } from "@/components/about/mission-vision";
import { WhyCalabar } from "@/components/about/why-calabar";
import { ConferenceTimeline } from "@/components/about/conference-timeline";
import { AttendeeMetrics } from "@/components/about/attendee-metrics";
import { WhyAttend } from "@/components/about/why-attend";

export const metadata = {
  title: "About | Calabar Tech Conference 2025",
  description:
    "Learn about Calabar Tech Conference 2025 - our mission, vision, and commitment to building the future of technology in Cross River State and beyond.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        <AboutHero />
        <MissionVision />
        <WhyCalabar />
        <WhyAttend />
        <AttendeeMetrics />
        <ConferenceTimeline />
      </main>
      <Footer />
    </div>
  );
}
