'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Speaker } from '@/lib/speakers-data'
import { Badge } from "@/components/ui/badge"

interface SpeakerCardProps {
  speaker: Speaker
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <Card className="text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col">
      <CardHeader>
        <div className="relative w-32 h-32 mx-auto">
          <Image
            src={speaker.image}
            alt={speaker.name}
            width={128}
            height={128}
            className="rounded-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-foreground">{speaker.name}</h3>
        <p className="text-primary text-sm">{speaker.title}</p>
        <p className="text-sm text-muted-foreground mb-3">{speaker.company}</p>
        <div className="mt-auto flex flex-wrap justify-center gap-2 pt-2">
            {speaker.expertise.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
        </div>
      </CardContent>
    </Card>
  )
}
