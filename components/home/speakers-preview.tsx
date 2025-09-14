'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SpeakerCard } from '@/components/speakers/speaker-card'
import { speakers } from '@/lib/speakers-data'
import { motion, AnimatePresence } from 'framer-motion'

export function SpeakersPreview() {
  const [showFullSpeakers, setShowFullSpeakers] = useState(false)

  const previewSpeakers = speakers.slice(0, 3)
  const additionalSpeakers = speakers.slice(3)

  return (
    <section id="speakers-section" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Featured Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are excited to welcome a diverse group of speakers to the Calabar Tech Conference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
          <AnimatePresence>
            {showFullSpeakers &&
              additionalSpeakers.map((speaker, index) => (
                <motion.div
                  key={speaker.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <SpeakerCard speaker={speaker} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <div className="text-center">
          <Button size="lg" onClick={() => setShowFullSpeakers(!showFullSpeakers)}>
            {showFullSpeakers ? "Show Less" : "View All Speakers"}
          </Button>
        </div>
      </div>
    </section>
  )
}
