"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  { name: "Developers & Designers", value: 40 },
  { name: "Entrepreneurs & Startups", value: 25 },
  { name: "Investors & Industry Leaders", value: 15 },
  { name: "Students & Early-Career Talent", value: 10 },
  { name: "Policy Makers & Ecosystem Drivers", value: 10 },
]

const COLORS = ["#FFD700", "#49C3D3", "#50C878", "#FF7F50", "#9370DB"]

export function AttendeeMetrics() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Attendee Metrics – Tech Conference Calabar 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Audience Composition: A snapshot of the vibrant mix of people who
            make the Calabar Tech Conference a true powerhouse of innovation,
            collaboration, and growth.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Audience Breakdown</CardTitle>
            <CardDescription>
              Visual representation of attendee groups for the 2025 conference.
            </CardDescription>
          </CardHeader>
          <CardContent>
  <ResponsiveContainer width="100%" height={350}>
    <PieChart>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
        label={false} // disable labels around chart
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend
        layout="horizontal"
        verticalAlign="bottom"
        align="center"
      />
    </PieChart>
  </ResponsiveContainer>
</CardContent>

        </Card>
      </div>
    </section>
  )
}
