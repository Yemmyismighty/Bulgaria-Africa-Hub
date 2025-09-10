"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Link from "next/link"

export function AboutSection() {
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
              Unlocking Opportunity, <br /> Bridging Continents.
            </h2>
            <p className="text-center md:text-left text-lg text-muted-foreground mb-6 max-w-xl">
              Bulgaria Africa Hub is a specialized agency dedicated to fostering and deepening relations
              between Bulgaria and African countries. We focus on four key sectors: Education, Tourism,
              Trade &amp; Investment Promotion, and Cultural Exchange.
            </p>
            <div className="text-center md:text-left">
              <Link href="/about" passHref legacyBehavior>
                <button className="px-6 py-3 rounded-md border border-foreground text-foreground hover:bg-primary hover:text-primary-foreground transition">
                  More about us
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <Image
              src="/Business-partners-BA-Hub-scaled.webp"
              alt="Bulgaria Africa Partnership"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
