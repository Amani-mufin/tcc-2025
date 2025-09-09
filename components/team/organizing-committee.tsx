"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const teamMembers = [
  {
    id: "1",
    name: "Adaora Okafor",
    role: "Conference Director",
    department: "Leadership",
    bio: "Experienced event organizer with 10+ years in tech conferences. Previously organized major events across West Africa.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/adaoraokafor",
      twitter: "https://twitter.com/adaoraokafor",
      email: "adaora@calabartech2025.com",
    },
  },
  {
    id: "2",
    name: "Emeka Nwankwo",
    role: "Technical Lead",
    department: "Technology",
    bio: "Full-stack developer and tech community leader. Passionate about building platforms that connect people.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/emekanwankwo",
      twitter: "https://twitter.com/emekanwankwo",
      email: "emeka@calabartech2025.com",
    },
  },
  {
    id: "3",
    name: "Fatima Abdullahi",
    role: "Partnerships Manager",
    department: "Business Development",
    bio: "Strategic partnerships expert with extensive network in the African tech ecosystem.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/fatimaabdullahi",
      email: "fatima@calabartech2025.com",
    },
  },
  {
    id: "4",
    name: "Kemi Adebayo",
    role: "Marketing Director",
    department: "Marketing",
    bio: "Digital marketing strategist specializing in tech events and community building.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/kemiadebayo",
      twitter: "https://twitter.com/kemiadebayo",
      email: "kemi@calabartech2025.com",
    },
  },
  {
    id: "5",
    name: "Chinedu Okoro",
    role: "Operations Manager",
    department: "Operations",
    bio: "Logistics and operations expert ensuring smooth execution of all conference activities.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/chineduokoro",
      email: "chinedu@calabartech2025.com",
    },
  },
  {
    id: "6",
    name: "Aisha Mohammed",
    role: "Community Manager",
    department: "Community",
    bio: "Community building specialist focused on creating inclusive and engaging experiences.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "https://linkedin.com/in/aishamohammed",
      twitter: "https://twitter.com/aishamohammed",
      email: "aisha@calabartech2025.com",
    },
  },
]

const departments = ["All", "Leadership", "Technology", "Business Development", "Marketing", "Operations", "Community"]

export function OrganizingCommittee() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Organizing <span className="text-primary">Committee</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals working behind the scenes to bring you an exceptional conference
              experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Department Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <Badge
                key={dept}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {dept}
              </Badge>
            ))}
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.1}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Member Image */}
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-serif font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-1">{member.role}</p>
                      <Badge variant="secondary" className="text-xs">
                        {member.department}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex items-center gap-2">
                      {member.social.linkedin && (
                        <Button size="sm" variant="ghost" className="w-8 h-8 p-0" asChild>
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button size="sm" variant="ghost" className="w-8 h-8 p-0" asChild>
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {member.social.email && (
                        <Button size="sm" variant="ghost" className="w-8 h-8 p-0" asChild>
                          <a
                            href={`mailto:${member.social.email}`}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
