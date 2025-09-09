"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Globe, Clock } from "lucide-react"
import { motion } from "framer-motion"
import type { Speaker } from "./speakers-grid"

interface SpeakerCardProps {
  speaker: Speaker
  onClick: () => void
}

export function SpeakerCard({ speaker, onClick }: SpeakerCardProps) {
  if (speaker.isComingSoon) {
    return (
      <Card className="p-6 text-center hover:shadow-md transition-shadow duration-300 border-dashed border-2 border-muted-foreground/20">
        <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
          <Clock className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="font-serif font-semibold text-foreground mb-2">{speaker.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{speaker.bio}</p>
        <Badge variant="outline" className="text-xs">
          Coming Soon
        </Badge>
      </Card>
    )
  }

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <div onClick={onClick}>
          {/* Speaker Image */}
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={speaker.image || "/placeholder.svg"}
              alt={speaker.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Speaker Info */}
          <div className="p-6">
            <h3 className="font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
              {speaker.name}
            </h3>
            <p className="text-sm font-medium text-primary mb-1">{speaker.title}</p>
            <p className="text-sm text-muted-foreground mb-4">{speaker.company}</p>

            {/* Bio Preview */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{speaker.bio}</p>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {speaker.expertise.slice(0, 2).map((exp) => (
                <Badge key={exp} variant="secondary" className="text-xs">
                  {exp}
                </Badge>
              ))}
              {speaker.expertise.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{speaker.expertise.length - 2} more
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="px-6 pb-6">
          <div className="flex items-center gap-2">
            {speaker.social.twitter && (
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0" asChild onClick={(e) => e.stopPropagation()}>
                <a
                  href={speaker.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
            )}
            {speaker.social.linkedin && (
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0" asChild onClick={(e) => e.stopPropagation()}>
                <a
                  href={speaker.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            )}
            {speaker.social.website && (
              <Button size="sm" variant="ghost" className="w-8 h-8 p-0" asChild onClick={(e) => e.stopPropagation()}>
                <a
                  href={speaker.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Globe className="w-4 h-4" />
                  <span className="sr-only">Website</span>
                </a>
              </Button>
            )}
            <Button size="sm" variant="outline" className="ml-auto text-xs bg-transparent" onClick={onClick}>
              View Details
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
