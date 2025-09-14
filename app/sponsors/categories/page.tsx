
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Sponsor & Partner - Calabar Tech Conference",
  description: "Explore the different sponsorship and partnership categories available at the Calabar Tech Conference.",
};

export default function SponsorCategoriesPage() {
  const sponsorTiers = [
    {
      name: "Platinum Sponsor",
      benefits: [
        "Keynote speaking slot",
        "Premium branding and media coverage",
        "Large exhibition space",
        "Multiple complimentary passes",
      ],
    },
    {
      name: "Gold Sponsor",
      benefits: [
        "Speaking opportunity",
        "Prominent branding",
        "Exhibition space",
        "Complimentary passes",
      ],
    },
    {
      name: "Silver Sponsor",
      benefits: [
        "Logo on event materials",
        "Exhibition booth",
        "Networking opportunities",
        "Discounted passes",
      ],
    },
    {
      name: "Bronze Sponsor",
      benefits: [
        "Logo on website",
        "Acknowledgement during event",
        "Access to networking sessions",
      ],
    },
    {
      name: "Startup Supporter",
      benefits: [
        "Special recognition for supporting local innovation",
        "Logo on startup-focused materials",
        "Engagement with emerging startups",
      ],
    },
  ];

  const partnerTiers = [
    {
      name: "Media Partner",
      description: "Amplify our reach and gain brand exposure. We offer logo placement, social media mentions, and access to our attendees.",
      benefits: [
        "Logo on our website and marketing materials",
        "Social media promotion",
        "Press passes to the event",
      ],
    },
    {
      name: "Community Partner",
      description: "Engage with tech communities. Help with promotion and content.",
      benefits: [
        "Booth space at the conference",
        "Opportunity to host a meetup or workshop",
        "Promotion to our audience",
      ],
    },
    {
      name: "University Partner",
      description: "Connect with the next generation of tech talent. Showcase your programs and connect with students.",
      benefits: [
        "Special ticket prices for students and faculty",
        "Opportunity to host a recruiting session",
        "Branding as an official university partner",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Sponsorship Tiers
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              We offer a range of sponsorship packages to fit your company's goals and budget. Partner with us to connect with a diverse audience of tech enthusiasts, professionals, and innovators.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sponsorTiers.map((tier) => (
              <div key={tier.name} className="border rounded-lg p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-4">{tier.name}</h2>
                <ul className="space-y-2 text-muted-foreground flex-grow">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full" asChild>
                  <Link href="/sponsors/apply">Become a {tier.name}</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Partnership Opportunities
              </h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                We also offer partnership opportunities for media, communities, and universities.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {partnerTiers.map((tier) => (
                <div key={tier.name} className="border rounded-lg p-6 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {tier.description}
                  </p>
                  <ul className="space-y-2 text-muted-foreground flex-grow">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full" asChild>
                    <Link href="mailto:partners@calabartcc.com">Become a {tier.name}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-4">
              For custom sponsorship packages or inquiries, please contact our team.
            </p>
            <Button size="lg" asChild>
              <Link href="mailto:sponsors@calabartcc.com">Email for Sponsorship</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
