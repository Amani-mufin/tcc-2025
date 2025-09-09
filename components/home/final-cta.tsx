"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const attendeeFeatures = [
  "Access to all sessions and workshops",
  "Networking opportunities with industry leaders",
  "Conference materials and swag bag",
  "Lunch and refreshments included",
  "Certificate of attendance",
]

const volunteerFeatures = [
  "Behind-the-scenes conference experience",
  "Direct networking with speakers and organizers",
  "Volunteer certificate and recommendation letter",
  "Free conference t-shirt and materials",
  "Community service hours recognition",
]

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Ready to Join the <span className="text-primary">Innovation</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose how you want to be part of Calabar Tech Conference 2025. Whether as an attendee or volunteer, you'll
            be contributing to the future of tech in Cross River.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Attendee Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Register as Attendee</h3>
                <p className="text-muted-foreground">Join us for two days of learning, networking, and innovation</p>
              </div>

              <div className="flex-1 mb-8">
                <h4 className="font-semibold text-foreground mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {attendeeFeatures.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <span className="text-3xl font-serif font-bold text-foreground">₦15,000</span>
                  <span className="text-muted-foreground ml-2">Early Bird</span>
                </div>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/register">
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Volunteer Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                  <Users className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Become a Volunteer</h3>
                <p className="text-muted-foreground">
                  Help make the conference amazing while gaining valuable experience
                </p>
              </div>

              <div className="flex-1 mb-8">
                <h4 className="font-semibold text-foreground mb-4">What you'll get:</h4>
                <ul className="space-y-3">
                  {volunteerFeatures.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <span className="text-3xl font-serif font-bold text-accent-foreground">Free</span>
                  <span className="text-muted-foreground ml-2">+ Benefits</span>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-accent text-accent-foreground hover:bg-accent/10 bg-transparent"
                  asChild
                >
                  <Link href="/register?type=volunteer">
                    Join as Volunteer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">Questions about registration? Need group discounts?</p>
          <Link href="/faq" className="text-primary hover:text-primary/80 font-medium transition-colors duration-200">
            Check our FAQ or contact us directly
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
