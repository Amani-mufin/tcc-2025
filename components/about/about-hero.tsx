"use client"

import { motion } from "framer-motion"
import { ChevronRight, MapPin, Calendar, Users } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/geometric-tech-pattern-circuit-lines.jpg')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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
          <span className="text-foreground">About</span>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              About <span className="text-primary">Calabar Tech Conference</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              Calabar Tech Conference 2025 is the premier technology event in Cross River State, bringing together
              innovators, entrepreneurs, and thought leaders to shape the future of technology in Nigeria and beyond.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Our mission is to foster innovation, facilitate knowledge sharing, and build a thriving tech ecosystem
              that drives economic growth and social impact across the region.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-2 mx-auto">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-serif font-bold text-foreground">2</div>
                <div className="text-sm text-muted-foreground">Days</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-2 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-serif font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Attendees</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-2 mx-auto">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-serif font-bold text-foreground">CICC</div>
                <div className="text-sm text-muted-foreground">Venue</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/modern-tech-conference-calabar-nigeria-diverse-pro.jpg"
                alt="Calabar Tech Conference"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
