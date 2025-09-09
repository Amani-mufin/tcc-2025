"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Target, Users, Lightbulb } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const highlights = [
  {
    icon: Target,
    title: "Innovation Focus",
    description: "Cutting-edge technologies and emerging trends shaping the future of tech in Africa.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Connect with like-minded professionals, entrepreneurs, and thought leaders.",
  },
  {
    icon: Lightbulb,
    title: "Knowledge Sharing",
    description: "Learn from industry experts through workshops, panels, and interactive sessions.",
  },
]

export function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
              Where Innovation Meets <span className="text-primary">Community</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Calabar Tech Conference 2025 is more than just an event—it's a catalyst for technological advancement
              in Cross River State and beyond. Join us as we explore the intersection of innovation, entrepreneurship,
              and community development.
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              From AI and blockchain to sustainable tech solutions, our conference brings together the brightest minds
              to share insights, forge partnerships, and drive meaningful change in the African tech ecosystem.
            </p>
            <Button size="lg" asChild>
              <Link href="/about">
                Learn More About the Conference
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Image and Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-8 mb-8">
              <img
                src="/modern-tech-conference-calabar-nigeria-diverse-pro.jpg"
                alt="Calabar Tech Conference 2025"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="p-4 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif font-semibold text-foreground mb-1">{highlight.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
