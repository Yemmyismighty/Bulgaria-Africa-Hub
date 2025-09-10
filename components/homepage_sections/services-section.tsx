"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, BookOpen, TrendingUp, MessageSquare, Globe } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Link from "next/link"

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })

  const services = [
    {
      icon: BookOpen,
      title: "Study in Bulgaria",
      description:
        "We offer 360-degree services to prospective African students, ensuring a smooth transition from application to settlement in Bulgaria",
      features: ["Market Research", "Partnership Matching", "Investment Facilitation"],
      image:"/image-9D8DT43.jpg",
    },
    {
      icon: Globe,
      title: "Tour Bulgaria",
      description:
        "We curate personalized travel experiences, showcasing Bulgaria’s breathtaking landscapes, historical landmarks, and cultural heritage.",
      features: ["Language Courses", "Cultural Workshops", "Exchange Programs"],
      image:"/TravelPadi-Discount-Page-Header-scaled.webp",
    },
    {
      icon: TrendingUp,
      title: "Work & Invest in Bulgaria",
      description:
        "We provide consultancy services for skilled workers, entrepreneurs and investors",
      features: ["Trade Missions", "Export Assistance", "Regulatory Guidance"],
      image:"/image-SZ2WRKJ.png",
      imagePosition: "top",
    },
    {
      icon: MessageSquare,
      title: "Consultation & Advisory Services",
      description: "We offer advisory services on travelling from Africa to Bulgaria and what to expect.",
      features: ["Policy Dialogue", "Diplomatic Events", "Official Visits"],
      image:"/image-EF5WFVY.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted bg-gradient-to-r from-[#fef6f3] via-[#fffaf8] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Looking to expand your horizons, grow your business, or explore new destinations? Benefit from our core services
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative bg-background border-border rounded-lg overflow-hidden 
    hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 ${
                index % 2 === 0 ? "delay-0" : "delay-300"
              } ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Background Image */}
              {service.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full object-cover ${service.imagePosition === "top" ? "object-top" : "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-black/75 sm:bg-black/75" />
                </div>
              )}

              {/* Card Content */}
              <div className="relative z-10">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white mb-4">{service.description}</p>
                  <Link href="/contact-us" passHref legacyBehavior>
                    <Button
                      variant="outline"
                      className="border border-white text-white hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
