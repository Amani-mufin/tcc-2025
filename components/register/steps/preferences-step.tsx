"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { RegistrationData } from "../registration-form"

interface PreferencesStepProps {
  data: RegistrationData
  updateData: (data: Partial<RegistrationData>) => void
  onNext: () => void
  onPrev: () => void
}

const interestOptions = [
  "AI & Machine Learning",
  "Blockchain & Cryptocurrency",
  "Startup & Entrepreneurship",
  "Tech Policy & Regulation",
  "UX/UI Design",
  "Fintech & Payments",
  "Cloud Infrastructure",
  "Cybersecurity",
  "Mobile Development",
  "Web Development",
]

const tshirtSizes = ["XS", "S", "M", "L", "XL", "XXL"]

export function PreferencesStep({ data, updateData, onNext, onPrev }: PreferencesStepProps) {
  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    updateData({ [field]: value })
  }

  const handleInterestToggle = (interest: string) => {
    const currentInterests = data.interests || []
    const updatedInterests = currentInterests.includes(interest)
      ? currentInterests.filter((i) => i !== interest)
      : [...currentInterests, interest]
    updateData({ interests: updatedInterests })
  }

  const canProceed = data.tshirtSize !== ""

  return (
    <Card className="p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Preferences & Requirements</h2>
        <p className="text-muted-foreground">
          Help us customize your conference experience. Let us know your interests and any special requirements.
        </p>
      </div>

      <div className="space-y-8 mb-8">
        {/* Interests */}
        <div className="space-y-4">
          <Label>Areas of Interest (Select all that apply)</Label>
          <div className="grid md:grid-cols-2 gap-3">
            {interestOptions.map((interest) => (
              <div key={interest} className="flex items-center space-x-2">
                <Checkbox
                  id={interest}
                  checked={data.interests?.includes(interest) || false}
                  onCheckedChange={() => handleInterestToggle(interest)}
                />
                <Label htmlFor={interest} className="text-sm font-normal cursor-pointer">
                  {interest}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* T-shirt Size */}
        <div className="space-y-2">
          <Label htmlFor="tshirtSize">T-shirt Size *</Label>
          <Select value={data.tshirtSize} onValueChange={(value) => handleInputChange("tshirtSize", value)}>
            <SelectTrigger className="max-w-xs">
              <SelectValue placeholder="Select your t-shirt size" />
            </SelectTrigger>
            <SelectContent>
              {tshirtSizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Dietary Restrictions */}
        <div className="space-y-2">
          <Label htmlFor="dietaryRestrictions">Dietary Restrictions or Allergies</Label>
          <Textarea
            id="dietaryRestrictions"
            placeholder="Please let us know about any dietary restrictions, allergies, or special meal requirements..."
            value={data.dietaryRestrictions}
            onChange={(e) => handleInputChange("dietaryRestrictions", e.target.value)}
            rows={3}
          />
        </div>

        {/* Accessibility */}
        <div className="space-y-2">
          <Label htmlFor="accessibility">Accessibility Requirements</Label>
          <Textarea
            id="accessibility"
            placeholder="Please describe any accessibility accommodations you need (wheelchair access, sign language interpretation, etc.)..."
            value={data.accessibility}
            onChange={(e) => handleInputChange("accessibility", e.target.value)}
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev} className="bg-transparent">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button onClick={onNext} disabled={!canProceed} size="lg">
          Continue to Payment
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  )
}
