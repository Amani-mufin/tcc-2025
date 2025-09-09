"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const sponsors = {
  platinum: [
    { name: "TechCorp Global", logo: "/tech-company-logo-platinum.jpg" },
    { name: "Innovation Labs", logo: "/innovation-labs-logo-platinum.jpg" },
  ],
  gold: [
    { name: "StartupHub Africa", logo: "/startup-hub-logo-gold.jpg" },
    { name: "Digital Solutions Inc", logo: "/digital-solutions-logo-gold.jpg" },
    { name: "CloudTech Systems", logo: "/cloud-tech-logo-gold.jpg" },
  ],
  silver: [
    { name: "DevTools Pro", logo: "/dev-tools-logo-silver.jpg" },
    { name: "AI Innovations", logo: "/ai-innovations-logo-silver.jpg" },
    { name: "CyberSec Solutions", logo: "/cybersec-logo-silver.jpg" },
    { name: "DataFlow Systems", logo: "/dataflow-logo-silver.jpg" },
  ],
  bronze: [
    { name: "CodeCraft", logo: "/codecraft-logo-bronze.jpg" },
    { name: "WebDev Studio", logo: "/webdev-studio-logo-bronze.jpg" },
    { name: "MobileTech", logo: "/mobiletech-logo-bronze.jpg" },
    { name: "AppForge", logo: "/appforge-logo-bronze.jpg" },
    { name: "TechStart", logo: "/placeholder.svg?height=40&width=120" },
  ],
}

function SponsorTier({
  title,
  sponsors: tierSponsors,
  delay = 0,
}: {
  title: string
  sponsors: typeof sponsors.platinum
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="text-center text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
        {title} Sponsors
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
        {tierSponsors.map((sponsor, index) => (
          <motion.div
            key={sponsor.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          >
            <img
              src={sponsor.logo || "/placeholder.svg"}
              alt={`${sponsor.name} logo`}
              className="h-auto max-w-full opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

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

        <div className="space-y-12">
          <SponsorTier title="Platinum" sponsors={sponsors.platinum} delay={0.1} />
          <SponsorTier title="Gold" sponsors={sponsors.gold} delay={0.2} />
          <SponsorTier title="Silver" sponsors={sponsors.silver} delay={0.3} />
          <SponsorTier title="Bronze" sponsors={sponsors.bronze} delay={0.4} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
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
