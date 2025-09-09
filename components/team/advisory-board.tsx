"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Award, Users } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const advisors = [
  {
    id: "1",
    name: "Dr. Ngozi Okonkwo",
    title: "Former CTO, Interswitch",
    expertise: "Fintech & Digital Payments",
    bio: "Pioneer in African fintech with 20+ years experience building payment infrastructure across the continent.",
    image: "/placeholder.svg?height=200&width=200",
    achievements: ["Built Nigeria's first digital payment platform", "Advisor to 15+ fintech startups"],
  },
  {
    id: "2",
    name: "Tunde Kehinde",
    title: "Co-founder, Lidya",
    expertise: "Startup Ecosystem",
    bio: "Serial entrepreneur and investor focused on building the next generation of African tech companies.",
    image: "/placeholder.svg?height=200&width=200",
    achievements: ["Raised $100M+ for African startups", "Mentor to 50+ entrepreneurs"],
  },
  {
    id: "3",
    name: "Prof. Adebola Adeyemi",
    title: "Director, University of Lagos Tech Hub",
    expertise: "Education & Research",
    bio: "Academic leader driving technology education and research initiatives across Nigerian universities.",
    image: "/placeholder.svg?height=200&width=200",
    achievements: ["Published 50+ research papers", "Trained 1000+ tech professionals"],
  },
  {
    id: "4",
    name: "Funmi Adewara",
    title: "VP Engineering, Flutterwave",
    expertise: "Engineering Leadership",
    bio: "Engineering executive with expertise in scaling tech teams and building world-class products.",
    image: "/placeholder.svg?height=200&width=200",
    achievements: ["Led teams of 200+ engineers", "Built products serving 10M+ users"],
  },
]

export function AdvisoryBoard() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Advisory <span className="text-primary">Board</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry leaders and experts providing strategic guidance to ensure the conference delivers maximum value
              to our community.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <ScrollReveal key={advisor.id} delay={index * 0.1}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    {/* Advisor Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={advisor.image || "/placeholder.svg"}
                        alt={advisor.name}
                        className="w-20 h-20 rounded-2xl object-cover"
                      />
                    </div>

                    {/* Advisor Info */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl font-serif font-bold text-foreground mb-1">{advisor.name}</h3>
                        <p className="text-primary font-medium mb-2">{advisor.title}</p>
                        <Badge variant="outline" className="text-xs">
                          {advisor.expertise}
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{advisor.bio}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {advisor.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-accent-foreground flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Advisory Board Stats */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Building,
                stat: "100+",
                label: "Combined Years Experience",
              },
              {
                icon: Users,
                stat: "50+",
                label: "Startups Mentored",
              },
              {
                icon: Award,
                stat: "25+",
                label: "Industry Awards",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-serif font-bold text-foreground mb-2">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
