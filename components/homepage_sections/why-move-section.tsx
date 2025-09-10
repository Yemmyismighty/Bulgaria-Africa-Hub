"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Check } from "lucide-react"
import Link from "next/link"

export function WhyMoveSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section
      ref={headerRef}
      className={`py-20 bg-background transition-all duration-800 ${
        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center md:gap-40">

            {/* Left Column - Image */}
          <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <Image
              src="/7-lakes-coworking.webp"
              alt="Bulgaria Africa Partnership"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Right Column - Text */}
          <div>
            <h2 className="text-3xl text-center md:text-left text-4xl font-bold text-foreground mb-6">
              Why Move to Bulgaria?
            </h2>
            <p className="text-center md:text-left text-lg text-muted-foreground mb-6 max-w-xl">
              <strong>Bulgaria is more than just a destination — it’s a gateway to opportunity.</strong> Whether you’re looking to advance your education, build a career, invest, or explore, here’s why Bulgaria stands out as a smart move:
            </p>
            <ul className="list-none text-center md:text-left text-lg text-muted-foreground mb-6 max-w-xl space-y-2">
                {[
                    "Strategic Location",
                    "Affordable Living",
                    "Rich Cultural Heritage",
                    "Growing Economy",
                    "Educational Excellence",
                    "Natural Beauty",
                ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-black shrink-0" />
                    <strong>{item}</strong>
                    </li>
                ))}
                </ul>
            <div className="text-center md:text-left">
              <Link href="/tourism-in-bulgaria" passHref legacyBehavior>
                <button className="px-6 py-3 rounded-md border border-foreground text-foreground hover:bg-primary hover:text-primary-foreground transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
