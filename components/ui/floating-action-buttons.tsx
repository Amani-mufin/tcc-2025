"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calendar, Users, Mail, ArrowUp, Plus, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export function FloatingActionButtons() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const fabItems = [
    {
      icon: Calendar,
      label: "Register Now",
      href: "/register",
      color: "bg-primary hover:bg-primary/90 text-primary-foreground",
    },
    {
      icon: Users,
      label: "Volunteer",
      href: "/register?type=volunteer",
      color: "bg-accent hover:bg-accent/90 text-accent-foreground",
    },
    {
      icon: Mail,
      label: "Contact Us",
      href: "/contact",
      color: "bg-muted hover:bg-muted/90 text-muted-foreground",
    },
  ]

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    onClick={scrollToTop}
                    className="w-12 h-12 rounded-full shadow-lg bg-background border border-border text-foreground hover:bg-muted"
                  >
                    <ArrowUp className="w-5 h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Back to top</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAB Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-3"
            >
              {fabItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" asChild className={`w-12 h-12 rounded-full shadow-lg ${item.color}`}>
                          <Link href={item.href}>
                            <Icon className="w-5 h-5" />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left">
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
              {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </TooltipProvider>
  )
}
