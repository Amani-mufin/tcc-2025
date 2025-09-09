"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CreditCard, Smartphone, Building, CheckCircle, Lock } from "lucide-react"
import { motion } from "framer-motion"
import type { RegistrationData } from "../registration-form"

interface PaymentStepProps {
  data: RegistrationData
  updateData: (data: Partial<RegistrationData>) => void
  onPrev: () => void
}

const paymentMethods = [
  {
    id: "card",
    name: "Credit/Debit Card",
    description: "Visa, Mastercard, Verve",
    icon: CreditCard,
    popular: true,
  },
  {
    id: "transfer",
    name: "Bank Transfer",
    description: "Direct bank transfer",
    icon: Building,
    popular: false,
  },
  {
    id: "mobile",
    name: "Mobile Money",
    description: "MTN, Airtel, Glo mobile money",
    icon: Smartphone,
    popular: false,
  },
]

export function PaymentStep({ data, updateData, onPrev }: PaymentStepProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleInputChange = (field: keyof RegistrationData, value: string) => {
    updateData({ [field]: value })
  }

  const getPrice = () => {
    switch (data.type) {
      case "attendee":
        return 15000
      case "volunteer":
        return 0
      case "speaker":
        return 0
      default:
        return 0
    }
  }

  const handleSubmit = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsProcessing(false)
    setIsCompleted(true)
  }

  const price = getPrice()
  const discount = data.promoCode ? price * 0.1 : 0
  const finalPrice = price - discount

  if (isCompleted) {
    return (
      <Card className="p-6 lg:p-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Registration Complete!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for registering for Calabar Tech Conference 2025. You'll receive a confirmation email shortly with
            your ticket and additional details.
          </p>
          <div className="bg-muted/30 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              <strong>Registration ID:</strong> CTC2025-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
          <Button size="lg" asChild>
            <a href="/">Return to Homepage</a>
          </Button>
        </motion.div>
      </Card>
    )
  }

  return (
    <Card className="p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Payment & Confirmation</h2>
        <p className="text-muted-foreground">
          Complete your registration by selecting a payment method and confirming your details.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Payment Methods */}
        <div className="space-y-6">
          <div>
            <Label className="text-base font-medium mb-4 block">Select Payment Method</Label>
            <RadioGroup
              value={data.paymentMethod}
              onValueChange={(value) => handleInputChange("paymentMethod", value)}
              className="space-y-3"
            >
              {paymentMethods.map((method) => {
                const Icon = method.icon
                return (
                  <div key={method.id} className="relative">
                    {method.popular && (
                      <Badge className="absolute -top-2 left-4 z-10 bg-accent text-accent-foreground text-xs">
                        Popular
                      </Badge>
                    )}
                    <Label
                      htmlFor={method.id}
                      className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                        data.paymentMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value={method.id} id={method.id} />
                      <Icon className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium text-foreground">{method.name}</div>
                        <div className="text-sm text-muted-foreground">{method.description}</div>
                      </div>
                    </Label>
                  </div>
                )
              })}
            </RadioGroup>
          </div>

          {/* Promo Code */}
          <div className="space-y-2">
            <Label htmlFor="promoCode">Promo Code (Optional)</Label>
            <Input
              id="promoCode"
              type="text"
              placeholder="Enter promo code"
              value={data.promoCode}
              onChange={(e) => handleInputChange("promoCode", e.target.value)}
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-serif font-semibold text-foreground mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Registration Type:</span>
                <span className="font-medium text-foreground capitalize">{data.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Base Price:</span>
                <span className="font-medium text-foreground">
                  {price === 0 ? "Free" : `₦${price.toLocaleString()}`}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Promo Discount:</span>
                  <span>-₦{discount.toLocaleString()}</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>{finalPrice === 0 ? "Free" : `₦${finalPrice.toLocaleString()}`}</span>
              </div>
            </div>
          </Card>

          {/* Registration Details */}
          <Card className="p-6">
            <h3 className="font-serif font-semibold text-foreground mb-4">Registration Details</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-muted-foreground">Name:</span>{" "}
                <span className="font-medium">
                  {data.firstName} {data.lastName}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Email:</span> <span className="font-medium">{data.email}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Company:</span>{" "}
                <span className="font-medium">{data.company}</span>
              </div>
            </div>
          </Card>

          {/* Security Notice */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span>Your payment information is secure and encrypted</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onPrev} className="bg-transparent">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!data.paymentMethod || isProcessing}
          size="lg"
          className="min-w-[200px]"
        >
          {isProcessing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Processing...
            </>
          ) : (
            <>
              Complete Registration
              <CheckCircle className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </Card>
  )
}
