import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamMemberCard } from "@/components/team/team-member-card"
import { teamMembers } from "@/lib/team-data"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the dedicated individuals who are working to make the Calabar Tech Conference a success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
