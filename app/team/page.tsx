import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamHero } from "@/components/team/team-hero"
import { OrganizingCommittee } from "@/components/team/organizing-committee"
import { AdvisoryBoard } from "@/components/team/advisory-board"
import { JoinTeamCTA } from "@/components/team/join-team-cta"

export const metadata = {
  title: "Team | Calabar Tech Conference 2025",
  description:
    "Meet the dedicated team behind Calabar Tech Conference 2025. Our organizing committee and advisory board are committed to creating an exceptional experience.",
}

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        <TeamHero />
        <OrganizingCommittee />
        <AdvisoryBoard />
        <JoinTeamCTA />
      </main>
      <Footer />
    </div>
  )
}
