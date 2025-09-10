"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useEffect, useState } from "react";

const images = [
    "/Plovdiv-Bulgaria.jpg",
    "/Rila_monastry-Bulgaria-scaled.webp",
    "/Veliko-Tarnovo-Bulgaria.jpg",
];

export function WhoWeAreSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000 // switch every 4s
    );
    return () => clearInterval(interval);
  }, []);

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
          <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
                {images.map((src, i) => (
                    <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    >
                    <Image
                        src={src}
                        alt={`Slide ${i}`}
                        fill
                        className={`object-cover transition-transform duration-[4000ms] ease-in-out ${
                        i === index ? "scale-110" : "scale-100"
                        }`}
                    />
                    </div>
                ))}
            </div>

          {/* Right Column - Text */}
          <div>
            <h2 className="text-3xl text-center md:text-left text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-center md:text-left text-lg text-muted-foreground mb-6 max-w-xl">
              <strong>Bulgaria Africa Hub</strong> is a specialized agency dedicated to fostering and deepening relations between Bulgaria and African countries. We focus on four key sectors: Education, Tourism, Trade & Investment Promotion, and Cultural Exchange. We aim to create seamless pathways for African students, professionals, entrepreneurs, investors, and tourists to explore the vast opportunities Bulgaria offers.
            </p>

            <p className="text-center md:text-left text-lg text-muted-foreground mb-6 max-w-xl">
              <strong>A Brief About Bulgaria</strong> <br></br>
              Bulgaria, located in Southeastern Europe, is a country rich in history, natural beauty, and economic opportunities. It is part of the European Union (EU), Schengen Zone, and NATO, making it an attractive destination for students, workers, and investors alike. The country offers a low cost of living, a high standard of education, and a thriving business environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
