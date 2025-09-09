"use client"

import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FilterBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedExpertise: string[]
  onExpertiseChange: (expertise: string[]) => void
  expertiseOptions: string[]
}

export function FilterBar({
  searchQuery,
  onSearchChange,
  selectedExpertise,
  onExpertiseChange,
  expertiseOptions,
}: FilterBarProps) {
  const toggleExpertise = (expertise: string) => {
    if (selectedExpertise.includes(expertise)) {
      onExpertiseChange(selectedExpertise.filter((exp) => exp !== expertise))
    } else {
      onExpertiseChange([...selectedExpertise, expertise])
    }
  }

  const clearAllFilters = () => {
    onSearchChange("")
    onExpertiseChange([])
  }

  const hasActiveFilters = searchQuery || selectedExpertise.length > 0

  return (
    <div className="mb-8 space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search speakers by name, company, or expertise..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4"
        />
      </div>

      {/* Filter Tags */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-foreground">Filter by Expertise</h3>
          <AnimatePresence>
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear All
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-2">
          {expertiseOptions.map((expertise) => {
            const isSelected = selectedExpertise.includes(expertise)
            return (
              <motion.div key={expertise} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Badge
                  variant={isSelected ? "default" : "outline"}
                  className={`cursor-pointer transition-colors duration-200 ${
                    isSelected ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-muted"
                  }`}
                  onClick={() => toggleExpertise(expertise)}
                >
                  {expertise}
                </Badge>
              </motion.div>
            )
          })}
        </div>

        {/* Active Filters Display */}
        <AnimatePresence>
          {selectedExpertise.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span>Active filters:</span>
              <div className="flex flex-wrap gap-1">
                {selectedExpertise.map((expertise) => (
                  <Badge
                    key={expertise}
                    variant="secondary"
                    className="text-xs cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => toggleExpertise(expertise)}
                  >
                    {expertise}
                    <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
