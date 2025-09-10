"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function HeroCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0, })
  const [mounted, setMounted] = useState(false)

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
    <div className="w-full max-w-md mx-auto text-center">
      <div className="grid grid-cols-4 gap-4">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="p-3">
            <div className="text-5xl font-bold text-primary">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="text-lg text-primary/80 uppercase">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
