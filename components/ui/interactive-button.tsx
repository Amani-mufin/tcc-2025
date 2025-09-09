"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface InteractiveButtonProps extends ButtonProps {
  children: ReactNode
  hoverScale?: number
  tapScale?: number
  glowEffect?: boolean
}

export function InteractiveButton({
  children,
  hoverScale = 1.02,
  tapScale = 0.98,
  glowEffect = false,
  className,
  ...props
}: InteractiveButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      className={glowEffect ? "relative" : ""}
    >
      {glowEffect && (
        <motion.div
          className="absolute inset-0 bg-primary/20 rounded-lg blur-lg"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <Button className={`relative ${className}`} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
