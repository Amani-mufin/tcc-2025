"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const sponsorshipTiers = ["Platinum", "Gold", "Silver", "Bronze"];

function SponsorForm() {
  const searchParams = useSearchParams();
  const [tier, setTier] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const tierFromQuery = searchParams.get("tier");
    if (tierFromQuery && sponsorshipTiers.includes(tierFromQuery)) {
      setTier(tierFromQuery);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleTierChange = (value: string) => {
    setTier(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to a server.
    console.log("Form submitted:", { ...formValues, tier });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex-grow container mx-auto px-4 py-16 lg:py-24 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Thank You for Your Interest!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your sponsorship application has been received. Our team will review your submission and get back to you shortly.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            In the meantime, you can join our prospective sponsors WhatsApp group to connect with the organizing team directly.
          </p>
          <Button size="lg" asChild>
            <Link href="https://chat.whatsapp.com/your-group-link" target="_blank">
              Join WhatsApp Group
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
          Sponsorship Application
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Fill out the form below to apply for a sponsorship package. We're excited to partner with you!
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              name="companyName"
              type="text"
              required
              value={formValues.companyName}
              onChange={handleInputChange}
            />
          </div>
           <div>
            <Label htmlFor="contactName">Contact Name</Label>
            <Input
              id="contactName"
              name="contactName"
              type="text"
              required
              value={formValues.contactName}
              onChange={handleInputChange}
            />
          </div>
           <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>
           <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formValues.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="tier">Sponsorship Tier</Label>
             <Select onValueChange={handleTierChange} value={tier} required>
              <SelectTrigger id="tier">
                <SelectValue placeholder="Select a tier" />
              </SelectTrigger>
              <SelectContent>
                {sponsorshipTiers.map((tierName) => (
                  <SelectItem key={tierName} value={tierName}>
                    {tierName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              value={formValues.message}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Button type="submit" size="lg" className="w-full">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default function SponsorApplyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <SponsorForm />
      </Suspense>
      <Footer />
    </div>
  );
}
