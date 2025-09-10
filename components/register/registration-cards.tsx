"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const registrationTypes = [
  {
    title: "Conference Attendee",
    description: "Be part of Calabar’s largest tech gathering — learn, network, and grow.",
    benefits: [
      "Access to all sessions and workshops",
      "Networking opportunities with industry leaders",
      "Conference materials (digital + physical swag)",
      "Lunch and refreshments included",
      "Certificate of participation",
    ],
    cta: "Register as Attendee",
    type: "attendee",
    popular: true,
  },
  {
    title: "Conference Speaker",
    description: "Share your expertise with a vibrant African tech community.",
    benefits: [
      "Speaking opportunity at a premier tech event",
      "Full conference access",
      "Exclusive speaker dinner + networking",
      "Professional recording of your session",
      "Travel and accommodation support (if applicable)",
    ],
    cta: "Apply as Speaker",
    type: "speaker",
    popular: false,
  },
  {
    title: "Conference Sponsor",
    description: "Showcase your brand and support innovation in Africa.",
    benefits: [
      "Brand visibility across all event platforms",
      "Exhibition booth & product showcase",
      "Access to curated networking sessions",
      "Recognition in press + digital campaigns",
      "Partnership opportunities with startups and investors",
    ],
    cta: "Partner as Sponsor",
    type: "sponsor",
    popular: false,
  },
]

export function RegistrationCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Join Us at Calabar Tech 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The conference is free for all attendees. Choose your participation type below to get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {registrationTypes.map((type, index) => (
            <Card
              key={index}
              className={`flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-${index * 200}`}
            >
              {type.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {type.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/register?type=${type.type}`}>{type.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
