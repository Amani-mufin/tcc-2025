'use client'

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { conferenceSchedule } from "@/lib/schedule-data"
import { motion, AnimatePresence } from "framer-motion"
import { User, CalendarPlus, CalendarMinus } from "lucide-react"

export function ScheduleSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeTab, setActiveTab] = useState("day-1");
  const previewEvents = conferenceSchedule[0].events.slice(0, 3);

  const renderEvent = (event: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 w-28 text-right pr-4">
        <p className="font-bold text-primary text-sm md:text-base">{event.time}</p>
      </div>
      <div className="relative w-full pl-4">
        <div className="absolute left-0 top-1 bottom-1 w-px bg-primary/20"></div>
        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary"></div>
        <div className={`p-4 rounded-lg w-full ${event.isBreak ? 'bg-muted/50' : 'bg-card border'}`}>
          <h3 className="font-bold text-base md:text-lg text-foreground">{event.title}</h3>
          {event.speaker && (
            <div className="flex items-center mt-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{event.speaker}</span>
            </div>
          )}
          <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="schedule" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
            Conference Schedule
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Two days packed with insightful talks, workshops, and networking opportunities.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-4xl mx-auto space-y-6">
                {previewEvents.map(renderEvent)}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="full-schedule"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl mx-auto"
            >
               <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  {conferenceSchedule.map((day) => (
                    <TabsTrigger key={day.day} value={`day-${day.day}`}>
                      Day {day.day} <span className="hidden sm:inline-block ml-2">- {day.date}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {conferenceSchedule.map((day) => (
                  <TabsContent key={day.day} value={`day-${day.day}`}>
                    <div className="mt-8 space-y-6">
                      {day.events.map(renderEvent)}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? (
              <CalendarMinus className="mr-2 h-5 w-5" />
            ) : (
              <CalendarPlus className="mr-2 h-5 w-5" />
            )}
            {isExpanded ? "Show Less" : "View Full Schedule"}
          </Button>
        </div>

      </div>
    </section>
  )
}
