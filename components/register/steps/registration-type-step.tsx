"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Mic, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import type { RegistrationData } from "../registration-form"

interface RegistrationTypeStepProps {
  data: RegistrationData
  updateData: (data: Partial<RegistrationData>) => void
  onNext: () => void
}

const registrationTypes = [
  {
    id: "attendee" as const,
    title: "Conference Attendee",
    description: "Join us for two days of learning, networking, and innovation",
    price: "₦15,000",
    priceNote: "Early Bird Special",
    icon: Calendar,
    features: [
      "Access to all sessions and workshops",
      "Networking opportunities",
      "Conference materials and swag bag",
      "Lunch and refreshments included",
      "Certificate of attendance",
    ],
    popular: true,
  },
  {
    id: "volunteer" as const,
    title: "Conference Volunteer",
    description: "Help make the conference amazing while gaining valuable experience",
    price: "Free",
    priceNote: "+ Benefits",
    icon: Users,
    features: [
      "Behind-the-scenes conference experience",
      "Direct networking with speakers",
      "Volunteer certificate and recommendation",
      "Free conference t-shirt and materials",
      "Community service hours recognition",
    ],
    popular: false,
  },
  {
    id: "speaker" as const,
    title: "Conference Speaker",
    description: "Share your expertise with the tech community",
    price: "By Invitation",
    priceNote: "Application Required",
    icon: Mic,
    features: [
      "Speaking opportunity at premier tech event",
      "Full conference access",
      "Speaker dinner and networking",
      "Professional recording of your session",
      "Travel and accommodation support",
    ],
    popular: false,
  },
]

export function RegistrationTypeStep({ data, updateData, onNext }: RegistrationTypeStepProps) {
  const handleTypeSelect = (type: "attendee" | "volunteer" | "speaker") => {
    updateData({ type })
  }

  const canProceed = data.type !== ""

  return (
    <Card className="p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Choose Your Registration Type</h2>
        <p className="text-muted-foreground">
          Select how you'd like to participate in Calabar Tech Conference 2025. Each option offers unique benefits and
          experiences.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {registrationTypes.map((type, index) => {
          const Icon = type.icon
          const isSelected = data.type === type.id
          return (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative"
            >
              {type.popular && (
                <Badge className="absolute -top-2 left-4 z-10 bg-accent text-accent-foreground">Most Popular</Badge>
              )}
              <Card
                className={`p-6 cursor-pointer transition-all duration-300 h-full ${
                  isSelected
                    ? "border-primary shadow-lg ring-2 ring-primary/20"
                    : "hover:border-primary/50 hover:shadow-md"
                }`}
                onClick={() => handleTypeSelect(type.id)}
              >
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                  <div className="text-center">
                    <div className="text-2xl font-serif font-bold text-foreground">{type.price}</div>
                    <div className="text-sm text-muted-foreground">{type.priceNote}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Button
                    variant={isSelected ? "default" : "outline"}
                    className={`w-full ${isSelected ? "" : "bg-transparent"}`}
                    onClick={() => handleTypeSelect(type.id)}
                  >
                    {isSelected ? "Selected" : "Select This Option"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext} disabled={!canProceed} size="lg">
          Continue to Personal Information
          <CheckCircle className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  )
}
