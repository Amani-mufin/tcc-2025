"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { RegistrationData } from "../registration-form"

interface PersonalInfoStepProps {
  data: RegistrationData
  updateData: (data: Partial<RegistrationData>) => void
  onNext: () => void
  onPrev: () => void
}

const countries = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "Egypt",
  "Morocco",
  "Ethiopia",
  "Uganda",
  "Tanzania",
  "Rwanda",
  "Other",
]

export function PersonalInfoStep({ data, updateData, onNext, onPrev }: PersonalInfoStepProps) {
  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    updateData({ [field]: value })
  }

  const canProceed = data.firstName && data.lastName && data.email && data.phone && data.country && data.city

  return (
    <Card className="p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Personal Information</h2>
        <p className="text-muted-foreground">
          Please provide your personal details. This information will be used for your conference badge and
          communications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={data.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
          />
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={data.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={data.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={data.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
          />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <Label htmlFor="country">Country *</Label>
          <Select value={data.country} onValueChange={(value) => handleInputChange("country", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            type="text"
            placeholder="Enter your city"
            value={data.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev} className="bg-transparent">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button onClick={onNext} disabled={!canProceed} size="lg">
          Continue to Professional Details
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  )
}
