"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Building, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const highlights = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Gateway to Central Africa with excellent connectivity and infrastructure development.",
    stats: "Cross River State",
  },
  {
    icon: Users,
    title: "Growing Tech Community",
    description: "Vibrant community of developers, entrepreneurs, and innovators driving change.",
    stats: "500+ Tech Professionals",
  },
  {
    icon: Building,
    title: "Government Support",
    description: "Strong government backing for digital transformation and tech ecosystem development.",
    stats: "Policy Support",
  },
  {
    icon: Zap,
    title: "Innovation Potential",
    description: "Untapped potential for technological solutions to local and regional challenges.",
    stats: "Emerging Market",
  },
]

const cityStats = [
  { label: "Population", value: "1.2M+" },
  { label: "Universities", value: "5+" },
  { label: "Tech Startups", value: "50+" },
  { label: "Internet Penetration", value: "65%" },
]

export function WhyCalabar() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Why <span className="text-primary">Calabar</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover why Calabar is the perfect location for Nigeria's next major tech conference and the emerging
              opportunities in Cross River State.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                The Rising Tech Hub of Southern Nigeria
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Calabar is rapidly emerging as a significant player in Nigeria's tech ecosystem. With its strategic
                location, growing educational institutions, and government support for digital transformation, the city
                presents unique opportunities for technology innovation and investment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The state government's commitment to building a digital economy, combined with the city's rich cultural
                heritage and tourism potential, creates a unique environment where technology can drive both economic
                growth and social impact.
              </p>

              {/* City Stats */}
              <div className="grid grid-cols-2 gap-4">
                {cityStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-background rounded-lg border border-border"
                  >
                    <div className="text-2xl font-serif font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image Gallery */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Calabar cityscape"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=150&width=300"
                  alt="Tech workspace in Calabar"
                  className="w-full h-36 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/placeholder.svg?height=150&width=300"
                  alt="University campus"
                  className="w-full h-36 object-cover rounded-lg"
                />
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Government building"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <ScrollReveal key={highlight.title} delay={index * 0.1}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {highlight.stats}
                    </Badge>
                    <h3 className="font-serif font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </Card>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
