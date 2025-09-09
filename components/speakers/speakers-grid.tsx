"use client"

import { useState, useMemo } from "react"
import { SpeakerCard } from "./speaker-card"
import { FilterBar } from "./filter-bar"
import { SpeakerModal } from "./speaker-modal"
import { motion } from "framer-motion"

export interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  image: string
  expertise: string[]
  social: {
    twitter?: string
    linkedin?: string
    website?: string
  }
  isComingSoon?: boolean
}

const speakers: Speaker[] = [
  {
    id: "1",
    name: "Dr. Amina Hassan",
    title: "AI Research Director",
    company: "Google DeepMind",
    bio: "Leading AI researcher with 15+ years experience in machine learning and natural language processing. Pioneer in ethical AI development for emerging markets.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["AI/ML", "Ethics", "Research"],
    social: {
      twitter: "https://twitter.com/aminahassan",
      linkedin: "https://linkedin.com/in/aminahassan",
    },
  },
  {
    id: "2",
    name: "Chidi Okonkwo",
    title: "Blockchain Architect",
    company: "Binance",
    bio: "Blockchain expert and cryptocurrency advocate. Built decentralized finance solutions serving millions of users across Africa.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Blockchain", "DeFi", "Cryptocurrency"],
    social: {
      linkedin: "https://linkedin.com/in/chidiokonkwo",
      website: "https://chidiokonkwo.com",
    },
  },
  {
    id: "3",
    name: "Sarah Chen",
    title: "Startup Founder & CEO",
    company: "TechVenture Labs",
    bio: "Serial entrepreneur who has built and scaled multiple tech startups. Passionate about fostering innovation in emerging markets.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Startup", "Entrepreneurship", "Venture Capital"],
    social: {
      twitter: "https://twitter.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      website: "https://sarahchen.co",
    },
  },
  {
    id: "4",
    name: "Prof. Kwame Asante",
    title: "Tech Policy Advisor",
    company: "African Union",
    bio: "Leading voice in technology policy and digital transformation across Africa. Advisor to governments on digital infrastructure development.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Policy", "Digital Transformation", "Government"],
    social: {
      linkedin: "https://linkedin.com/in/kwameasante",
    },
  },
  {
    id: "5",
    name: "Maya Patel",
    title: "Head of Design",
    company: "Figma",
    bio: "Award-winning product designer with expertise in user experience and design systems. Advocate for inclusive design practices.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Design", "UX/UI", "Product"],
    social: {
      twitter: "https://twitter.com/mayapatel",
      linkedin: "https://linkedin.com/in/mayapatel",
    },
  },
  {
    id: "6",
    name: "David Okafor",
    title: "CTO",
    company: "Paystack",
    bio: "Technology leader driving fintech innovation across Africa. Expert in building scalable payment infrastructure for emerging markets.",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["Fintech", "Infrastructure", "Payments"],
    social: {
      linkedin: "https://linkedin.com/in/davidokafor",
      website: "https://davidokafor.dev",
    },
  },
  // Coming Soon speakers
  {
    id: "7",
    name: "More Speakers",
    title: "Coming Soon",
    company: "TBA",
    bio: "We are finalizing our speaker lineup. More amazing speakers will be announced soon!",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["TBA"],
    social: {},
    isComingSoon: true,
  },
  {
    id: "8",
    name: "More Speakers",
    title: "Coming Soon",
    company: "TBA",
    bio: "We are finalizing our speaker lineup. More amazing speakers will be announced soon!",
    image: "/placeholder.svg?height=300&width=300",
    expertise: ["TBA"],
    social: {},
    isComingSoon: true,
  },
]

const expertiseOptions = [
  "AI/ML",
  "Blockchain",
  "Startup",
  "Policy",
  "Design",
  "Fintech",
  "Infrastructure",
  "Research",
  "UX/UI",
  "Product",
]

export function SpeakersGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  const filteredSpeakers = useMemo(() => {
    return speakers.filter((speaker) => {
      const matchesSearch =
        speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        speaker.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        speaker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        speaker.expertise.some((exp) => exp.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesExpertise =
        selectedExpertise.length === 0 || selectedExpertise.some((exp) => speaker.expertise.includes(exp))

      return matchesSearch && matchesExpertise
    })
  }, [searchQuery, selectedExpertise])

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedExpertise={selectedExpertise}
          onExpertiseChange={setSelectedExpertise}
          expertiseOptions={expertiseOptions}
        />

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredSpeakers.length} of {speakers.length} speakers
          </p>
        </div>

        {/* Speakers Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SpeakerCard speaker={speaker} onClick={() => setSelectedSpeaker(speaker)} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredSpeakers.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground text-lg">No speakers found matching your criteria.</p>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
          </motion.div>
        )}

        {/* Speaker Modal */}
        {selectedSpeaker && (
          <SpeakerModal speaker={selectedSpeaker} isOpen={!!selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
        )}
      </div>
    </section>
  )
}
