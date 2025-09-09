"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Zap, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import Link from "next/link"

const opportunities = [
  {
    role: "Volunteer Coordinator",
    department: "Operations",
    commitment: "10-15 hours/week",
    description: "Help manage our amazing volunteer team and ensure smooth event operations.",
    skills: ["Leadership", "Communication", "Event Management"],
  },
  {
    role: "Social Media Manager",
    department: "Marketing",
    commitment: "5-10 hours/week",
    description: "Create engaging content and manage our social media presence across platforms.",
    skills: ["Social Media", "Content Creation", "Community Management"],
  },
  {
    role: "Technical Assistant",
    department: "Technology",
    commitment: "8-12 hours/week",
    description: "Support technical aspects of the conference including AV setup and live streaming.",
    skills: ["Technical Skills", "Problem Solving", "Equipment Management"],
  },
]

export function JoinTeamCTA() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Join Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of something amazing! We're looking for passionate individuals to help make Calabar Tech
              Conference 2025 a huge success.
            </p>
          </div>
        </ScrollReveal>

        {/* Benefits */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Users,
                title: "Network & Learn",
                description: "Connect with industry leaders and expand your professional network",
              },
              {
                icon: Heart,
                title: "Make an Impact",
                description: "Contribute to building the tech ecosystem in Cross River State",
              },
              {
                icon: Zap,
                title: "Gain Experience",
                description: "Develop valuable skills in event management and tech community building",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Open Positions */}
        <ScrollReveal>
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Current Opportunities</h3>
            <div className="grid lg:grid-cols-3 gap-6">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-4">
                      <h4 className="text-lg font-serif font-semibold text-foreground mb-2">{opportunity.role}</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {opportunity.department}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {opportunity.commitment}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{opportunity.description}</p>

                    <div className="mb-6">
                      <p className="text-xs font-medium text-foreground mb-2">Required Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {opportunity.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      Apply Now
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Main CTA */}
        <ScrollReveal>
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you want to volunteer for the event or join our organizing team, we'd love to have you on board.
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register?type=volunteer">
                  <Users className="w-5 h-5 mr-2" />
                  Volunteer for the Event
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href="/contact">
                  Join the Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
