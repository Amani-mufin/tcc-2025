"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Globe } from "lucide-react"
import { motion } from "framer-motion"
import type { Speaker } from "./speakers-grid"

interface SpeakerModalProps {
  speaker: Speaker
  isOpen: boolean
  onClose: () => void
}

export function SpeakerModal({ speaker, isOpen, onClose }: SpeakerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{speaker.name} - Speaker Details</DialogTitle>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Speaker Header */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={speaker.image || "/placeholder.svg"}
                alt={speaker.name}
                className="w-32 h-32 rounded-2xl object-cover mx-auto sm:mx-0"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">{speaker.name}</h2>
              <p className="text-lg font-medium text-primary mb-1">{speaker.title}</p>
              <p className="text-base text-muted-foreground mb-4">{speaker.company}</p>

              {/* Social Links */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                {speaker.social.twitter && (
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={speaker.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </a>
                  </Button>
                )}
                {speaker.social.linkedin && (
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={speaker.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {speaker.social.website && (
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={speaker.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Expertise Tags */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-3">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {speaker.expertise.map((exp) => (
                <Badge key={exp} variant="secondary">
                  {exp}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-3">About {speaker.name.split(" ")[0]}</h3>
            <p className="text-muted-foreground leading-relaxed">{speaker.bio}</p>
          </div>

          {/* Additional Info */}
          {!speaker.isComingSoon && (
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground text-center">
                Don't miss {speaker.name.split(" ")[0]}'s session at Calabar Tech Conference 2025!
                <br />
                <span className="font-medium">Check the schedule for session details.</span>
              </p>
            </div>
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
