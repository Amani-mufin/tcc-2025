"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Calendar, Bookmark, BookmarkCheck } from "lucide-react"
import { motion } from "framer-motion"
import type { Session } from "./schedule-timeline"

interface SessionCardProps {
  session: Session
  isBookmarked: boolean
  onToggleBookmark: () => void
}

const getTrackColor = (track: string) => {
  const colors = {
    Keynote: "bg-primary text-primary-foreground",
    "AI/ML": "bg-blue-500 text-white",
    Blockchain: "bg-purple-500 text-white",
    Startup: "bg-green-500 text-white",
    Policy: "bg-orange-500 text-white",
    Design: "bg-pink-500 text-white",
    Fintech: "bg-indigo-500 text-white",
    General: "bg-muted text-muted-foreground",
  }
  return colors[track as keyof typeof colors] || "bg-muted text-muted-foreground"
}

const getTypeIcon = (type: Session["type"]) => {
  switch (type) {
    case "keynote":
      return "🎤"
    case "workshop":
      return "🛠️"
    case "panel":
      return "👥"
    case "networking":
      return "🤝"
    case "break":
      return "☕"
    default:
      return "📅"
  }
}

export function SessionCard({ session, isBookmarked, onToggleBookmark }: SessionCardProps) {
  const addToCalendar = () => {
    const startDate = new Date(`2025-11-28T${session.time}:00`)
    const endDate = new Date(startDate.getTime() + Number.parseInt(session.duration) * 60000)

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      session.title,
    )}&dates=${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${
      endDate.toISOString().replace(/[-:]/g, "").split(".")[0]
    }Z&details=${encodeURIComponent(
      `${session.description}\n\nSpeaker: ${session.speaker}\nVenue: ${session.venue}`,
    )}&location=${encodeURIComponent(session.venue)}`

    window.open(calendarUrl, "_blank")
  }

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="flex">
          {/* Time Column */}
          <div className="flex-shrink-0 w-24 lg:w-32 bg-muted/30 p-4 lg:p-6 flex flex-col items-center justify-center text-center border-r border-border">
            <div className="text-lg lg:text-xl font-serif font-bold text-foreground">{session.time}</div>
            <div className="text-xs lg:text-sm text-muted-foreground mt-1">{session.duration}</div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 lg:p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{getTypeIcon(session.type)}</span>
                  <Badge className={`text-xs ${getTrackColor(session.track)}`}>{session.track}</Badge>
                  {session.capacity && (
                    <Badge variant="outline" className="text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      {session.capacity} seats
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg lg:text-xl font-serif font-bold text-foreground mb-2 leading-tight">
                  {session.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground mb-3 leading-relaxed">{session.description}</p>
              </div>

              {/* Bookmark Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggleBookmark}
                className="flex-shrink-0 ml-4 text-muted-foreground hover:text-primary"
              >
                {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-primary" /> : <Bookmark className="w-4 h-4" />}
                <span className="sr-only">{isBookmarked ? "Remove bookmark" : "Add bookmark"}</span>
              </Button>
            </div>

            {/* Speaker Info */}
            <div className="flex items-center gap-4 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-primary">
                    {session.speaker
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{session.speaker}</div>
                  <div className="text-muted-foreground">{session.speakerTitle}</div>
                </div>
              </div>
            </div>

            {/* Session Details */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{session.venue}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{session.duration}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button size="sm" variant="outline" onClick={addToCalendar} className="bg-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                Add to Calendar
              </Button>
              {session.type === "workshop" && session.capacity && (
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Reserve Seat
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
