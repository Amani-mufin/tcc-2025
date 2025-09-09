"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { RegistrationData } from "../registration-form"

interface ProfessionalDetailsStepProps {
  data: RegistrationData
  updateData: (data: Partial<RegistrationData>) => void
  onNext: () => void
  onPrev: () => void
}

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Government",
  "Non-profit",
  "Consulting",
  "Media",
  "Retail",
  "Manufacturing",
  "Other",
]

const experienceLevels = [
  "Student",
  "Entry Level (0-2 years)",
  "Mid Level (3-5 years)",
  "Senior Level (6-10 years)",
  "Executive Level (10+ years)",
]

export function ProfessionalDetailsStep({ data, updateData, onNext, onPrev }: ProfessionalDetailsStepProps) {
  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    updateData({ [field]: value })
  }

  const canProceed = data.jobTitle && data.company && data.industry && data.experience

  return (
    <Card className="p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Professional Details</h2>
        <p className="text-muted-foreground">
          Tell us about your professional background. This helps us tailor the conference experience and connect you
          with relevant opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Job Title */}
        <div className="space-y-2">
          <Label htmlFor="jobTitle">Job Title *</Label>
          <Input
            id="jobTitle"
            type="text"
            placeholder="e.g., Software Developer, Product Manager"
            value={data.jobTitle}
            onChange={(e) => handleInputChange("jobTitle", e.target.value)}
            required
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company">Company/Organization *</Label>
          <Input
            id="company"
            type="text"
            placeholder="Enter your company or organization"
            value={data.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            required
          />
        </div>

        {/* Industry */}
        <div className="space-y-2">
          <Label htmlFor="industry">Industry *</Label>
          <Select value={data.industry} onValueChange={(value) => handleInputChange("industry", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Experience Level */}
        <div className="space-y-2">
          <Label htmlFor="experience">Experience Level *</Label>
          <Select value={data.experience} onValueChange={(value) => handleInputChange("experience", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select your experience level" />
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev} className="bg-transparent">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button onClick={onNext} disabled={!canProceed} size="lg">
          Continue to Preferences
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  )
}
