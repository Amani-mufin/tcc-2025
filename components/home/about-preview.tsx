'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { useState } from 'react'

export function AboutSection() {
}
export function AboutPreview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="about-section" className="relative py-16 lg:py-24 bg-muted/20 dark:bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8 lg:mb-0"
            >
              <Image
                src="/modern-tech-conference-calabar-nigeria-diverse-pro.jpg"
                alt="About Tech Conference Calabar"
                layout="fill"
                loading='lazy'
                objectFit="cover"
                className="transform transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </ScrollReveal>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                Where Innovation Meets <span className="text-primary">Community</span>
              </h2>
              <div className="prose prose-lg prose-p:text-muted-foreground dark:prose-p:text-muted-foreground/80 max-w-none">
                <p className="mb-6">
                  The Calabar Tech Conference is a community-driven initiative
                  dedicated to fostering innovation, collaboration, and growth in
                  the tech landscape of Cross River State and beyond. Our mission
                  is to create a vibrant platform for learning, networking, and
                  community development.
                </p>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                    key="more-about-text"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="mb-8">
                      From AI and blockchain to sustainable tech solutions, our
                      conference brings together the brightest minds to share
                      insights, forge partnerships, and drive meaningful change in the
                      African tech ecosystem.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
              <Button size="lg" onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? "Show Less" : "Learn More"}
                  <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              </motion.div>
          </div>
        </div>
      </div>
    </div>
  )}
