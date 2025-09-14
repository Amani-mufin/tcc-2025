"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Users, Lightbulb, Briefcase, Network } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const whyAttendData = [
  {
    icon: Network,
    title: "Unparalleled Networking",
    description:
      "Connect with a vibrant community of over 1,000 tech enthusiasts, including developers, entrepreneurs, investors, and industry leaders. Forge valuable connections that can lead to collaborations, partnerships, and career opportunities.",
  },
  {
    icon: Lightbulb,
    title: "Cutting-Edge Insights",
    description:
      "Gain access to exclusive keynotes, workshops, and panel discussions from renowned speakers and experts. Learn about the latest trends in AI, blockchain, cybersecurity, cloud computing, and more, keeping you ahead of the curve.",
  },
  {
    icon: Briefcase,
    title: "Career Advancement",
    description:
      "Explore exciting career prospects at our dedicated job fair, where top tech companies will be recruiting for various roles. Showcase your skills, network with recruiters, and land your dream job in the thriving tech industry.",
  },
  {
    icon: Users,
    title: "Community & Collaboration",
    description:
      "Become part of a supportive and collaborative ecosystem that fosters innovation and growth. Share your ideas, learn from your peers, and contribute to the development of the Calabar tech community and beyond.",
  },
]

export function WhyAttend() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Why You Should <span className="text-primary">Attend</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Calabar Tech Conference 2025 is more than just an event; it's an experience. Here's what makes it unmissable:
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyAttendData.map((item, index) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <Card className="p-8 text-center h-full hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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