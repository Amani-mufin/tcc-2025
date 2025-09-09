"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SessionCard } from "./session-card"
import { ScheduleFilters } from "./schedule-filters"
import { motion } from "framer-motion"

export interface Session {
  id: string
  title: string
  description: string
  speaker: string
  speakerTitle: string
  time: string
  duration: string
  track: string
  type: "keynote" | "workshop" | "panel" | "networking" | "break"
  venue: string
  capacity?: number
  isBookmarked?: boolean
}

const day1Sessions: Session[] = [
  {
    id: "d1-1",
    title: "Registration & Welcome Coffee",
    description: "Check-in, networking, and welcome refreshments",
    speaker: "Conference Team",
    speakerTitle: "Organizers",
    time: "08:00",
    duration: "60 min",
    track: "General",
    type: "networking",
    venue: "Main Lobby",
  },
  {
    id: "d1-2",
    title: "Opening Keynote: The Future of African Tech",
    description:
      "An inspiring look at the technological transformation happening across Africa and how Cross River State is positioned to lead this revolution.",
    speaker: "Dr. Amina Hassan",
    speakerTitle: "AI Research Director, Google DeepMind",
    time: "09:00",
    duration: "45 min",
    track: "Keynote",
    type: "keynote",
    venue: "Main Auditorium",
    capacity: 1000,
  },
  {
    id: "d1-3",
    title: "AI & Machine Learning in Emerging Markets",
    description:
      "Exploring practical applications of AI and ML technologies in developing economies, with focus on local solutions and challenges.",
    speaker: "Dr. Amina Hassan",
    speakerTitle: "AI Research Director, Google DeepMind",
    time: "10:00",
    duration: "60 min",
    track: "AI/ML",
    type: "workshop",
    venue: "Tech Lab A",
    capacity: 50,
  },
  {
    id: "d1-4",
    title: "Coffee Break & Networking",
    description: "Refreshments and networking opportunities",
    speaker: "Conference Team",
    speakerTitle: "Organizers",
    time: "11:00",
    duration: "30 min",
    track: "General",
    type: "break",
    venue: "Exhibition Hall",
  },
  {
    id: "d1-5",
    title: "Blockchain & DeFi: Building Financial Infrastructure",
    description:
      "How blockchain technology is revolutionizing financial services across Africa, with practical examples and implementation strategies.",
    speaker: "Chidi Okonkwo",
    speakerTitle: "Blockchain Architect, Binance",
    time: "11:30",
    duration: "60 min",
    track: "Blockchain",
    type: "workshop",
    venue: "Innovation Hub",
    capacity: 75,
  },
  {
    id: "d1-6",
    title: "Startup Funding Panel: From Idea to Scale",
    description:
      "A panel discussion with successful entrepreneurs and investors about navigating the funding landscape in Africa.",
    speaker: "Sarah Chen & Panel",
    speakerTitle: "Startup Founder & CEO, TechVenture Labs",
    time: "13:00",
    duration: "75 min",
    track: "Startup",
    type: "panel",
    venue: "Main Auditorium",
    capacity: 1000,
  },
  {
    id: "d1-7",
    title: "Lunch & Networking",
    description: "Catered lunch with networking opportunities",
    speaker: "Conference Team",
    speakerTitle: "Organizers",
    time: "14:15",
    duration: "60 min",
    track: "General",
    type: "networking",
    venue: "Exhibition Hall",
  },
]

const day2Sessions: Session[] = [
  {
    id: "d2-1",
    title: "Day 2 Welcome & Coffee",
    description: "Morning refreshments and networking",
    speaker: "Conference Team",
    speakerTitle: "Organizers",
    time: "08:30",
    duration: "30 min",
    track: "General",
    type: "networking",
    venue: "Main Lobby",
  },
  {
    id: "d2-2",
    title: "Tech Policy & Digital Transformation",
    description:
      "Understanding the policy landscape for technology adoption and digital transformation across African governments.",
    speaker: "Prof. Kwame Asante",
    speakerTitle: "Tech Policy Advisor, African Union",
    time: "09:00",
    duration: "60 min",
    track: "Policy",
    type: "keynote",
    venue: "Main Auditorium",
    capacity: 1000,
  },
  {
    id: "d2-3",
    title: "Design Thinking Workshop: Building User-Centric Products",
    description:
      "Hands-on workshop on design thinking methodologies and creating products that truly serve user needs in emerging markets.",
    speaker: "Maya Patel",
    speakerTitle: "Head of Design, Figma",
    time: "10:15",
    duration: "90 min",
    track: "Design",
    type: "workshop",
    venue: "Design Studio",
    capacity: 40,
  },
  {
    id: "d2-4",
    title: "Fintech Innovation: Payment Systems for Africa",
    description:
      "Deep dive into building scalable payment infrastructure and fintech solutions for the African market.",
    speaker: "David Okafor",
    speakerTitle: "CTO, Paystack",
    time: "12:00",
    duration: "60 min",
    track: "Fintech",
    type: "workshop",
    venue: "Tech Lab B",
    capacity: 60,
  },
  {
    id: "d2-5",
    title: "Closing Keynote: Building Tomorrow's Tech Ecosystem",
    description:
      "A vision for the future of technology in Cross River State and how we can collectively build a thriving tech ecosystem.",
    speaker: "Conference Speakers Panel",
    speakerTitle: "All Keynote Speakers",
    time: "15:00",
    duration: "45 min",
    track: "Keynote",
    type: "keynote",
    venue: "Main Auditorium",
    capacity: 1000,
  },
  {
    id: "d2-6",
    title: "Closing Reception & Networking",
    description: "Final networking session with refreshments and closing remarks",
    speaker: "Conference Team",
    speakerTitle: "Organizers",
    time: "16:00",
    duration: "90 min",
    track: "General",
    type: "networking",
    venue: "Exhibition Hall",
  },
]

const trackOptions = ["All Tracks", "Keynote", "AI/ML", "Blockchain", "Startup", "Policy", "Design", "Fintech"]
const typeOptions = ["All Types", "keynote", "workshop", "panel", "networking"]

export function ScheduleTimeline() {
  const [selectedTrack, setSelectedTrack] = useState("All Tracks")
  const [selectedType, setSelectedType] = useState("All Types")
  const [bookmarkedSessions, setBookmarkedSessions] = useState<string[]>([])

  const filterSessions = (sessions: Session[]) => {
    return sessions.filter((session) => {
      const matchesTrack = selectedTrack === "All Tracks" || session.track === selectedTrack
      const matchesType = selectedType === "All Types" || session.type === selectedType
      return matchesTrack && matchesType
    })
  }

  const toggleBookmark = (sessionId: string) => {
    setBookmarkedSessions((prev) =>
      prev.includes(sessionId) ? prev.filter((id) => id !== sessionId) : [...prev, sessionId],
    )
  }

  const filteredDay1 = filterSessions(day1Sessions)
  const filteredDay2 = filterSessions(day2Sessions)

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <ScheduleFilters
          selectedTrack={selectedTrack}
          onTrackChange={setSelectedTrack}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          trackOptions={trackOptions}
          typeOptions={typeOptions}
          bookmarkedCount={bookmarkedSessions.length}
        />

        {/* Schedule Tabs */}
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 sticky top-20 z-40 bg-background/95 backdrop-blur-sm">
            <TabsTrigger value="day1" className="text-base font-medium">
              Day 1 - November 28
            </TabsTrigger>
            <TabsTrigger value="day2" className="text-base font-medium">
              Day 2 - November 29
            </TabsTrigger>
          </TabsList>

          <TabsContent value="day1" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Day 1 - November 28, 2025</h2>
                <p className="text-muted-foreground">
                  Showing {filteredDay1.length} of {day1Sessions.length} sessions
                </p>
              </div>
              <div className="space-y-4">
                {filteredDay1.map((session, index) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <SessionCard
                      session={session}
                      isBookmarked={bookmarkedSessions.includes(session.id)}
                      onToggleBookmark={() => toggleBookmark(session.id)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="day2" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Day 2 - November 29, 2025</h2>
                <p className="text-muted-foreground">
                  Showing {filteredDay2.length} of {day2Sessions.length} sessions
                </p>
              </div>
              <div className="space-y-4">
                {filteredDay2.map((session, index) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <SessionCard
                      session={session}
                      isBookmarked={bookmarkedSessions.includes(session.id)}
                      onToggleBookmark={() => toggleBookmark(session.id)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
