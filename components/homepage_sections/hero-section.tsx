"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Link from "next/link"

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className={`relative -mx-8 md:-mx-10 lg:-mx-12 min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-muted to-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/BA-Partnership-2048x1365.webp"
          alt="Bulgaria Africa Partnership"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75 sm:bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-6xl font-bold text-foreground text-white mb-6 text-balance transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Connecting Bulgaria and Africa to unlock economic opportunities for All
        </h1>
        <p
          className={`text-xl md:text-2xl text-muted-foreground text-white mb-8 max-w-3xl mx-auto text-pretty transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          At Bulgaria Africa Hub, we believe that the future of global prosperity lies in meaningful cross-continental connections.
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link href="/exploring-opportunities-in-west-africa" passHref legacyBehavior>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>


          <Link href="/about" passHref legacyBehavior>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
