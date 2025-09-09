import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingActionButtons } from "@/components/ui/floating-action-buttons"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Calabar Tech Conference 2025 | Innovating for Growth",
  description:
    "Join us November 28-29, 2025 at Calabar International Convention Centre for the premier tech conference in Cross River. Building the future of technology together.",
  keywords: [
    "tech conference",
    "Calabar",
    "technology",
    "innovation",
    "Cross River",
    "Nigeria",
    "developers",
    "entrepreneurs",
  ],
  authors: [{ name: "Calabar Tech Conference" }],
  creator: "Calabar Tech Conference",
  publisher: "Calabar Tech Conference",
  openGraph: {
    title: "Calabar Tech Conference 2025 | Innovating for Growth",
    description:
      "Join us November 28-29, 2025 at Calabar International Convention Centre for the premier tech conference in Cross River.",
    url: "https://calabartech2025.com",
    siteName: "Calabar Tech Conference 2025",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calabar Tech Conference 2025 | Innovating for Growth",
    description:
      "Join us November 28-29, 2025 at Calabar International Convention Centre for the premier tech conference in Cross River.",
    creator: "@CalabarTech2025",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <FloatingActionButtons />
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
