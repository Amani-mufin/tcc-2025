"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Mic, Building } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const timelineEvents = [
  {
    year: "2020",
    title: "The Vision",
    description: "Initial concept for a major tech conference in Cross River State was born.",
    icon: Building,
    status: "completed",
  },
  {
    year: "2021",
    title: "Community Building",
    description: "Started building the local tech community through meetups and workshops.",
    icon: Users,
    status: "completed",
  },
  {
    year: "2022",
    title: "First Gathering",
    description: "Organized the first small-scale tech meetup with 50 local developers.",
    icon: Mic,
    status: "completed",
  },
  {
    year: "2023",
    title: "Growing Network",
    description: "Expanded to quarterly events with 200+ attendees and regional speakers.",
    icon: Users,
    status: "completed",
  },
  {
    year: "2024",
    title: "Planning Phase",
    description: "Secured venue, sponsors, and began planning for the inaugural conference.",
    icon: Calendar,
    status: "completed",
  },
  {
    year: "2025",
    title: "Calabar Tech Conference",
    description: "The premier tech conference launches with 1000+ attendees and international speakers.",
    icon: Mic,
    status: "upcoming",
  },
]

export function ConferenceTimeline() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a simple idea to the premier tech conference in Cross River State. Here's how we've built this
              community over the years.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:transform lg:-translate-x-0.5" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0

              return (
                <ScrollReveal key={event.year} delay={index * 0.1}>
                  <div
                    className={`relative flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex-row`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background lg:transform lg:-translate-x-1/2 z-10" />

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className={`w-full lg:w-5/12 ml-12 lg:ml-0 ${
                        isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                      }`}
                    >
                      <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                              event.status === "completed" ? "bg-primary/10" : "bg-accent/10"
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                event.status === "completed" ? "text-primary" : "text-accent-foreground"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-serif font-bold text-foreground">{event.title}</h3>
                              <Badge
                                variant={event.status === "completed" ? "secondary" : "default"}
                                className="text-xs"
                              >
                                {event.year}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
