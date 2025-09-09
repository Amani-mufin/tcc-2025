"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bookmark, Filter } from "lucide-react"

interface ScheduleFiltersProps {
  selectedTrack: string
  onTrackChange: (track: string) => void
  selectedType: string
  onTypeChange: (type: string) => void
  trackOptions: string[]
  typeOptions: string[]
  bookmarkedCount: number
}

export function ScheduleFilters({
  selectedTrack,
  onTrackChange,
  selectedType,
  onTypeChange,
  trackOptions,
  typeOptions,
  bookmarkedCount,
}: ScheduleFiltersProps) {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filter Schedule
        </h2>
        {bookmarkedCount > 0 && (
          <Badge variant="secondary" className="flex items-center gap-1">
            <Bookmark className="w-3 h-3" />
            {bookmarkedCount} bookmarked
          </Badge>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Track Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-foreground mb-2">Filter by Track</label>
          <Select value={selectedTrack} onValueChange={onTrackChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select track" />
            </SelectTrigger>
            <SelectContent>
              {trackOptions.map((track) => (
                <SelectItem key={track} value={track}>
                  {track}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Type Filter */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-foreground mb-2">Filter by Type</label>
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {typeOptions.map((type) => (
                <SelectItem key={type} value={type}>
                  {type === "All Types" ? type : type.charAt(0).toUpperCase() + type.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          <Button
            variant="outline"
            onClick={() => {
              onTrackChange("All Tracks")
              onTypeChange("All Types")
            }}
            className="bg-transparent"
          >
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  )
}
