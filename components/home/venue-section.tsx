'use client'

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export function VenueSection() {
  return (
    <section id="venue" className="py-16 lg:py-24 bg-muted/20 dark:bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
            Venue
          </h2>
          <div className="flex items-center justify-center mt-4 text-lg text-muted-foreground">
            <MapPin className="w-5 h-5 mr-2 text-primary" />
            <span>Calabar International Convention Centre</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            className="dark:invert dark:hue-rotate-180"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.78769229007!2d8.352989315305145!3d4.958850940549033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106a11e3b231c80f%3A0x62e21012351d8ea7!2sCalabar%20International%20Convention%20Centre!5e0!3m2!1sen!2sng!4v1678886583345!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Calabar International Convention Centre Map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
