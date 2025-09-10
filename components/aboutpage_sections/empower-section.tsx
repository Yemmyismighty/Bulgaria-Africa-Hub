"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function EmpowerAboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section
      ref={headerRef}
      className={`py-20 bg-background transition-all duration-800 ${
        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-3xl text-center md:text-left text-4xl font-bold text-foreground mb-6">
              Bridging Continents, <br /> Empowering People
            </h2>
            <p className="text-center md:text-left text-lg text-muted-foreground mb-6 max-w-xl">
              We exist to empower students, professionals, investors, and travelers to explore new horizons, build meaningful connections, and contribute to shared prosperity.
            </p>
          </div>

          <div className="flex gap-4 w-full h-[500px] md:h-[600px]">
            <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/image-new-7CFUSGU.png"
                alt="Partnership Image 1"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Study-in-Bulgaria-BA-hub.jpg"
                alt="Partnership Image 2"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
