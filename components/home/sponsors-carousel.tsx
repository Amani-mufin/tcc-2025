"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"

const sponsors = [
    { name: "TechCorp Global", logo: "/tech-company-logo-platinum.jpg", tier: "Platinum" },
    { name: "Innovation Labs", logo: "/innovation-labs-logo-platinum.jpg", tier: "Platinum" },
    { name: "StartupHub Africa", logo: "/startup-hub-logo-gold.jpg", tier: "Gold" },
    { name: "Digital Solutions Inc", logo: "/digital-solutions-logo-gold.jpg", tier: "Gold" },
    { name: "CloudTech Systems", logo: "/cloud-tech-logo-gold.jpg", tier: "Gold" },
    { name: "DevTools Pro", logo: "/dev-tools-logo-silver.jpg", tier: "Silver" },
    { name: "AI Innovations", logo: "/ai-innovations-logo-silver.jpg", tier: "Silver" },
    { name: "CyberSec Solutions", logo: "/cybersec-logo-silver.jpg", tier: "Silver" },
    { name: "DataFlow Systems", logo: "/dataflow-logo-silver.jpg", tier: "Silver" },
    { name: "CodeCraft", logo: "/codecraft-logo-bronze.jpg", tier: "Bronze" },
    { name: "WebDev Studio", logo: "/webdev-studio-logo-bronze.jpg", tier: "Bronze" },
    { name: "MobileTech", logo: "/mobiletech-logo-bronze.jpg", tier: "Bronze" },
    { name: "AppForge", logo: "/appforge-logo-bronze.jpg", tier: "Bronze" },
    { name: "TechStart", logo: "/placeholder.svg?height=40&width=120", tier: "Bronze" },
]

export function SponsorsCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">Our Amazing Sponsors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're grateful to our sponsors who make this conference possible and support the growth of the tech
            ecosystem in Cross River.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {sponsors.map((sponsor, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="p-2 text-center h-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer p-4 rounded-lg bg-background/50 flex flex-col items-center justify-around h-full"
                  >
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                    <Badge variant="outline" className="mt-3">
                      {sponsor.tier}
                    </Badge>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Interested in sponsoring the conference?</p>
          <motion.a
            href="/sponsors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Become a Sponsor
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}