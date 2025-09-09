"use client"

import { Card } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To create a platform that fosters innovation, facilitates knowledge sharing, and builds connections that drive technological advancement in Cross River State and across Africa.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To establish Calabar as a leading tech hub in Nigeria, where innovation thrives, startups flourish, and technology solutions address real-world challenges.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Innovation, inclusivity, collaboration, and impact. We believe in the power of technology to transform communities and create opportunities for all.",
  },
  {
    icon: Lightbulb,
    title: "Our Impact",
    description:
      "Building a sustainable tech ecosystem that creates jobs, attracts investment, and positions Cross River State as a destination for technology innovation.",
  },
]

export function MissionVision() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Mission, Vision & <span className="text-primary">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to building a thriving technology ecosystem that benefits everyone in our community and
              beyond.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-foreground mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
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
