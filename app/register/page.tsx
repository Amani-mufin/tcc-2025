import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/register/registration-form"

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main>
        <RegistrationForm />
      </main>
      <Footer />
    </>
  )
}
