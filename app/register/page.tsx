import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/register/registration-form"

export const metadata = {
  title: "Register | Calabar Tech Conference 2025",
  description:
    "Register for Calabar Tech Conference 2025. Join us November 28-29 for two days of innovation, learning, and networking.",
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Register for <span className="text-primary">Calabar Tech 2025</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Secure your spot at the premier tech conference in Cross River State. Join us for two days of
                innovation, learning, and networking.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
