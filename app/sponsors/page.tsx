import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sponsorshipTiers = [
  {
    name: "Platinum",
    price: "₦1,000,000",
    features: [
      "Premium branding in all marketing materials",
      "Keynote speaking slot",
      "Large exhibition booth in a prime location",
      "4 complimentary conference passes",
    ],
  },
  {
    name: "Gold",
    price: "₦500,000",
    features: [
      "Logo on conference website and banners",
      "Speaking opportunity in a breakout session",
      "Standard exhibition booth",
      "2 complimentary conference passes",
    ],
  },
  {
    name: "Silver",
    price: "₦250,000",
    features: [
      "Logo on conference website",
      "Mention in opening and closing remarks",
      "Shared exhibition space",
      "1 complimentary conference pass",
    ],
  },
   {
    name: "Bronze",
    price: "₦100,000",
    features: [
      "Logo on conference website",
      "Mention in opening and closing remarks",
      "Shared exhibition space",
      "1 complimentary conference pass",
    ],
  },
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Become a Sponsor
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Support the Calabar Tech Conference 2025 and connect with a vibrant community of tech enthusiasts, innovators, and leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sponsorshipTiers.map((tier) => (
            <div key={tier.name} className="border rounded-lg p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-primary mb-4">{tier.name}</h3>
              <p className="text-3xl font-serif font-bold mb-6">{tier.price}</p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button className="w-full" asChild>
                  <Link href={`/sponsors/apply?tier=${tier.name}`}>Select Tier</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            For custom sponsorship packages or inquiries, please contact our team.
          </p>
          <Button size="lg" asChild>
            <Link href="mailto:sponsors@calabartcc.com">Email for Sponsorship</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
