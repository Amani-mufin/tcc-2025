"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { RegistrationTypeStep } from "./steps/registration-type-step"
import { PersonalInfoStep } from "./steps/personal-info-step"
import { ProfessionalDetailsStep } from "./steps/professional-details-step"
import { PreferencesStep } from "./steps/preferences-step"
import { PaymentStep } from "./steps/payment-step"

export interface RegistrationData {
  type: "attendee" | "volunteer" | "speaker" | ""
  // Personal Info
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  city: string
  // Professional Details
  jobTitle: string
  company: string
  industry: string
  experience: string
  // Preferences
  interests: string[]
  dietaryRestrictions: string
  accessibility: string
  tshirtSize: string
  // Payment
  paymentMethod: string
  promoCode: string
}

const steps = [
  { id: 1, title: "Registration Type", description: "Choose how you want to participate" },
  { id: 2, title: "Personal Information", description: "Tell us about yourself" },
  { id: 3, title: "Professional Details", description: "Your work and experience" },
  { id: 4, title: "Preferences", description: "Customize your experience" },
  { id: 5, title: "Payment", description: "Complete your registration" },
]

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<RegistrationData>({
    type: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    jobTitle: "",
    company: "",
    industry: "",
    experience: "",
    interests: [],
    dietaryRestrictions: "",
    accessibility: "",
    tshirtSize: "",
    paymentMethod: "",
    promoCode: "",
  })

  const updateFormData = (data: Partial<RegistrationData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = (currentStep / steps.length) * 100

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <RegistrationTypeStep data={formData} updateData={updateFormData} onNext={nextStep} />
      case 2:
        return <PersonalInfoStep data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />
      case 3:
        return (
          <ProfessionalDetailsStep data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />
        )
      case 4:
        return <PreferencesStep data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />
      case 5:
        return <PaymentStep data={formData} updateData={updateFormData} onPrev={prevStep} />
      default:
        return null
    }
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Progress Header */}
        <Card className="p-6 lg:p-8 mb-8">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-serif font-bold text-foreground">Registration Progress</h2>
              <Badge variant="outline">
                Step {currentStep} of {steps.length}
              </Badge>
            </div>
            <Progress value={progress} className="h-2 mb-4" />
          </div>

          {/* Step Indicators */}
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
                      currentStep > step.id
                        ? "bg-primary text-primary-foreground"
                        : currentStep === step.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? <CheckCircle className="w-4 h-4" /> : step.id}
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-medium text-foreground hidden sm:block">{step.title}</div>
                    <div className="text-xs text-muted-foreground hidden lg:block">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 lg:w-16 h-0.5 mx-2 transition-colors duration-200 ${
                      currentStep > step.id ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
