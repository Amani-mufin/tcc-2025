"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { RegistrationTypeStep } from "./steps/registration-type-step"
import { PersonalInfoStep } from "./steps/personal-info-step"
import { ProfessionalDetailsStep } from "./steps/professional-details-step"
import { PreferencesStep } from "./steps/preferences-step"
import { ConfirmationStep } from "./steps/confirmation-step"

export interface RegistrationData {
  type: "attendee" | "speaker" | "sponsor" | ""
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
}

const steps = [
  { id: 1, title: "Type", description: "Choose how you want to participate" },
  { id: 2, title: "Personal", description: "Tell us about yourself" },
  { id: 3, title: "Professional", description: "Your work and experience" },
  { id: 4, title: "Preferences", description: "Customize your experience" },
  { id: 5, title: "Confirm", description: "Finish and confirm" },
]

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
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
  })

  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const typeParam = searchParams.get("type") as RegistrationData["type"]
    if (typeParam && ["attendee", "speaker", "sponsor"].includes(typeParam)) {
      setFormData((prev) => ({ ...prev, type: typeParam }))
      setCurrentStep(2) // Skip to step 2 if type is in URL
    }
  }, [searchParams])

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

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setShowSuccess(true)
    // Redirect after a short delay
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <RegistrationTypeStep data={formData} updateData={updateFormData} onNext={nextStep} />
      case 2:
        return <PersonalInfoStep data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />
      case 3:
        return <ProfessionalDetailsStep data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />
      case 4:
        return <PreferencesStep data={formData} updateData={updateFormData} onNext={nextStep} onPrev={prevStep} />
      case 5:
        return <ConfirmationStep data={formData} onPrev={prevStep} onSubmit={handleSubmit} isSubmitting={isSubmitting}/>
      default:
        return <div /> // Render empty div for step 1 when type is pre-selected
    }
  }

  if (currentStep === 1 && formData.type) {
    return null; // Don't render anything for step 1 if type is already set from URL
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Progress Header */}
        {!showSuccess && (
          <Card className="p-6 lg:p-8 mb-8 animate-fade-in">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-serif font-bold text-foreground">Registration Progress</h2>
                <Badge variant="outline">
                  Step {currentStep} of {steps.length}
                </Badge>
              </div>
              <Progress value={progress} className="h-2 mb-4" />
            </div>

            <div className="flex justify-between items-center relative">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors duration-300
                      ${currentStep >= step.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                  >
                    {currentStep > step.id ? <CheckCircle className="w-5 h-5" /> : step.id}
                  </div>
                  <p className="mt-2 text-xs font-medium text-center text-muted-foreground">{step.title}</p>
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-5 left-1/2 w-full h-0.5 -z-10 transition-colors duration-300
                      ${currentStep > step.id ? "bg-primary" : "bg-muted"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* Success Popup */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Card className="p-8 lg:p-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Registration Complete!</h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    Thank you for joining Calabar Tech Conference 2025. You’ll be redirected to the homepage shortly.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Confirmation ID: <span className="font-mono bg-muted px-2 py-1 rounded">CTC2025-{formData.lastName.toUpperCase()}{Math.floor(100 + Math.random() * 900)}</span>
                  </p>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
