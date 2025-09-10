"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Donut,
  DonutChart,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  {
    role: "Developers & Designers",
    count: 40,
    fill: "var(--color-gold)",
  },
  {
    role: "Entrepreneurs & Startups",
    count: 25,
    fill: "var(--color-silver)",
  },
  {
    role: "Investors & Industry Leaders",
    count: 15,
    fill: "var(--color-bronze)",
  },
  { role: "Students & Early-Career Talent", count: 10, fill: "var(--color-muted)" },
  { role: "Policy Makers & Ecosystem Drivers", count: 10, fill: "var(--color-foreground)" },
]

const chartConfig = {
  count: {
    label: "Count",
  },
  gold: {
    label: "Developers & Designers",
    color: "hsl(var(--chart-1))",
  },
  silver: {
    label: "Entrepreneurs & Startups",
    color: "hsl(var(--chart-2))",
  },
  bronze: {
    label: "Investors & Industry Leaders",
    color: "hsl(var(--chart-3))",
  },
  muted: {
    label: "Students & Early-Career Talent",
    color: "hsl(var(--chart-4))",
  },
  foreground: {
    label: "Policy Makers & Ecosystem Drivers",
    color: "hsl(var(--chart-5))",
  },
}

export function AttendeeMetrics() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Attendee Metrics – Tech Conference Calabar 2025
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A diverse gathering of innovators, creators, and leaders shaping the
            future of tech in Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Audience Composition</CardTitle>
                <CardDescription>
                  A breakdown of our expected attendees.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square h-[300px]"
                >
                  <ResponsiveContainer>
                    <DonutChart>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={chartData}
                        dataKey="count"
                        nameKey="role"
                        innerRadius={100}
                        strokeWidth={5}
                        outerRadius={140}
                        cy={150}
                        cx="50%"
                      >
                        <Donut />
                      </Pie>
                    </DonutChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Total Attendees: 100%
                </div>
                <div className="leading-none text-muted-foreground">
                  Showing distribution of attendee types.
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-serif mb-3">
                Key Insights
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <strong>Networking Powerhouse:</strong> The conference is
                  designed to connect innovators across diverse sectors.
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <strong>Cross-Disciplinary Learning:</strong> Attendees gain
                  exposure to new ideas, trends, and practical solutions.
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <strong>Impact-Oriented Community:</strong> Beyond tech,
                  it’s about building a thriving ecosystem in Cross River State.
                </li>
              </ul>
            </div>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                <strong>Developers & Designers (40%):</strong> Passionate
                creators building the next wave of products, apps, and
                experiences.
              </p>
              <p>
                <strong>Entrepreneurs & Startups (25%):</strong> Founders,
                innovators, and emerging businesses seeking collaboration,
                exposure, and investment.
              </p>
              <p>
                <strong>Investors & Industry Leaders (15%):</strong> Angel
                investors, VCs, and executives looking to back bold ideas and
                talent.
              </p>
              <p>
                <strong>Students & Early-Career Talent (10%):</strong> The
                next generation of African tech leaders eager to learn and
                connect.
              </p>
              <p>
                <strong>Policy Makers & Ecosystem Drivers (10%):</strong>{" "}
                Government officials, NGOs, and ecosystem builders shaping the
                future of tech in Nigeria and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}