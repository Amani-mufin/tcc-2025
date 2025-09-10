"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CheckCircle, User, Mail, Building, Briefcase } from "lucide-react"
import type { RegistrationData } from "../registration-form"

interface ConfirmationStepProps {
  data: RegistrationData
  onPrev: () => void
  onSubmit: () => void
  isSubmitting: boolean
}

export function ConfirmationStep({ data, onPrev, onSubmit, isSubmitting }: ConfirmationStepProps) {
  const detailItems = [
    {
      icon: User,
      label: "Full Name",
      value: `${data.firstName} ${data.lastName}`,
    },
    {
      icon: Mail,
      label: "Email Address",
      value: data.email,
    },
    {
      icon: Briefcase,
      label: "Job Title",
      value: data.jobTitle,
    },
    {
      icon: Building,
      label: "Company",
      value: data.company,
    },
  ]

  return (
    <Card className="p-6 lg:p-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Confirm Your Registration</h2>
        <p className="text-muted-foreground">
          Please review your details below. Since the conference is free, no payment is required.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-6 bg-muted/30">
          <h3 className="font-serif font-semibold text-foreground mb-4">Registration Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Registration Type:</span>
              <span className="font-medium text-foreground capitalize bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{data.type}</span>
            </div>
            <Separator />
            {detailItems.map((item) => (
              <div key={item.label} className="flex items-start">
                <item.icon className="w-5 h-5 text-muted-foreground mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-medium text-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onPrev} className="bg-transparent" disabled={isSubmitting}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={onSubmit}
          disabled={isSubmitting}
          size="lg"
          className="min-w-[240px]"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Submitting Registration...
            </>
          ) : (
            <>
              Confirm & Complete Registration
              <CheckCircle className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </Card>
  )
}
