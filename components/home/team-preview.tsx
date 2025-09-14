'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TeamMemberCard } from '@/components/team/team-member-card'
import { teamMembers } from '@/lib/team-data'
import { motion, AnimatePresence } from "framer-motion"

export function TeamPreview() {
  const [showFullTeam, setShowFullTeam] = useState(false)

  const previewMembers = teamMembers.slice(0, 3)
  const additionalMembers = teamMembers.slice(3)

  return (
    <section id="team-section" className="py-16 lg:py-24 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Calabar Tech Conference is organized by a passionate team of volunteers dedicated to making a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
          <AnimatePresence>
            {showFullTeam &&
              additionalMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => setShowFullTeam(!showFullTeam)}>
            {showFullTeam ? "Show Less" : "View Full Team"}
          </Button>
        </div>
      </div>
    </section>
  )
}
