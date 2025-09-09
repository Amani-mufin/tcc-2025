"use client"

import { motion } from "framer-motion"
import { ChevronRight, Users, Heart, Target } from "lucide-react"
import Link from "next/link"

export function TeamHero() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center space-x-2 text-sm text-muted-foreground mb-8"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Team</span>
        </motion.nav>

        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6"
          >
            Meet Our <span className="text-primary">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12"
          >
            The passionate individuals working tirelessly to make Calabar Tech Conference 2025 an unforgettable
            experience for everyone.
          </motion.p>

          {/* Team Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Collaborative",
                description: "We work together to achieve our shared vision",
              },
              {
                icon: Heart,
                title: "Passionate",
                description: "Driven by our love for technology and community",
              },
              {
                icon: Target,
                title: "Focused",
                description: "Committed to delivering excellence in every detail",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
