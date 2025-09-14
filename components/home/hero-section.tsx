'use client'

import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { HeroCountdown } from "@/components/home/hero-countdown"

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("stats-section")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen min-h-[660px] flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('/geometric-tech-pattern-circuit-lines.jpg')] opacity-5 bg-cover bg-center" />

        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg hidden md:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full hidden md:block"
          animate={{
            y: [0, 30, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-accent/30 rotate-45 hidden md:block"
          animate={{
            y: [0, -15, 0],
            rotate: [45, 225, 405],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-6 text-balance"
          >
            Tech Conference Calabar <span className="text-primary">2025</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty"
          >
            Innovating for Growth: Building the Future of Technology in Cross River & Beyond
          </motion.p>

          {/* Event Details */}
          <HeroCountdown />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 mb-12"
          >
            <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6 h-auto" asChild>
              <Link href="https://luma.com/5t04wsl8?tk=L47on9">
                <Calendar className="w-5 h-5 mr-2" />
                Register Now
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base px-8 py-6 h-auto bg-transparent"
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf7RI1RuFzoTmN-Imavk_mw9l9xRNPZ5fiJcnZWQjdyrHgPFw/viewform">
                <Users className="w-5 h-5 mr-2" />
                Become a Speaker
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
          <span className="sr-only">Scroll to next section</span>
        </motion.button>
      </div>
    </section>
  )
}
