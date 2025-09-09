"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Conference date: November 28, 2025
  const conferenceDate = new Date("2025-11-28T09:00:00").getTime()

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = conferenceDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [conferenceDate])

  if (!mounted) {
    return null
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              Conference Countdown
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">The Future Starts In</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on the most anticipated tech conference in Cross River State. Register now to secure your
              spot!
            </p>
          </div>

          {/* Countdown Display */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto mb-12">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <motion.div
                  key={unit.value} // This will trigger re-animation when value changes
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl lg:text-5xl font-serif font-bold text-primary mb-2 tabular-nums"
                >
                  {unit.value.toString().padStart(2, "0")}
                </motion.div>
                <div className="text-sm lg:text-base text-muted-foreground font-medium uppercase tracking-wide">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Event Date Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-muted/50 px-6 py-3 rounded-full"
          >
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              November 28–29, 2025 • Calabar International Convention Centre
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
