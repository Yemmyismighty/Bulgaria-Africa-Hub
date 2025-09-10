"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function PartnershipsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 })

  const partnerships = [
    {
      country: "South Africa",
      projects: 12,
      sector: "Technology & Mining",
      image: "/south-africa-mining.jpg",
    },
    {
      country: "Nigeria",
      projects: 8,
      sector: "Agriculture & Energy",
      image: "/AdobeStock_430334400-scaled.jpeg",
    },
    {
      country: "Kenya",
      projects: 15,
      sector: "Tourism & Education",
      image: "/mercy.jpg",
    },
    {
      country: "Ghana",
      projects: 6,
      sector: "Manufacturing & Trade",
      image: "/steel-production-plant-commissioned.jpg",
    },
    {
      country: "Morocco",
      projects: 10,
      sector: "Infrastructure & Finance",
      image: "/images.jpeg",
    },
    {
      country: "Ethiopia",
      projects: 7,
      sector: "Healthcare & Development",
      image: "/images (1).jpeg",
    },
  ]

  return (
    <section id="partnerships" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Active Partnerships</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our ongoing collaborations across the African continent
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerships.map((partnership, index) => (
            <Card
              key={index}
              className={`bg-card border-border hover:shadow-lg transition-all duration-800 overflow-hidden ${`delay-${index * 100}`} ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="aspect-video relative">
                <img
                  src={partnership.image || "/placeholder.svg"}
                  alt={`Partnership with ${partnership.country}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{partnership.country}</h3>
                  <p className="text-sm opacity-90">{partnership.projects} Active Projects</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Focus Sector</span>
                  <span className="text-sm font-semibold text-primary">{partnership.sector}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          ref={statsRef}
          className={`mt-16 text-center transition-all duration-800 ${
            statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "58+", label: "Active Projects", delay: "delay-0" },
              { value: "25+", label: "Partner Countries", delay: "delay-200" },
              { value: "€2.5M", label: "Investment Facilitated", delay: "delay-400" },
              { value: "150+", label: "Business Connections", delay: "delay-600" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-800 ${stat.delay} ${
                  statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
