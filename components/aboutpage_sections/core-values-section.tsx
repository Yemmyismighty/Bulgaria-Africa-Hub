"use client"

import { Compass, Puzzle, HeartHandshake, Network } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const coreValues = [
  {
    title: "Connection",
    description:
      "We believe in the power of human connection to spark innovation, and shared success.",
    icon: Compass,
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty and transparency in all that we do — building trust through our actions.",
    icon: Puzzle,
  },
  {
    title: "Empowerment",
    description:
      "We don’t just create access — we equip people with the tools and knowledge to thrive.",
    icon: HeartHandshake,
  },
  {
    title: "Cultural Respect",
    description:
      "We celebrate diversity and promote mutual respect in every interaction.",
    icon: Network,
  },
];

export function CoreValues() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()
  return (
    <section
      ref={headerRef}
      className={`py-16 transition-all duration-800 ${
        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
        <p className="text-muted-foreground mb-12">
          Values that drive us to offer stellar services to you.
        </p>

        <div className="grid gap-4 sm:gap-0 sm:grid-cols-2">
            {coreValues.map((value, index) => (
                <div
                key={index}
                className={`
                    flex items-start gap-4 p-6 border bg-white 
                    hover:bg-emerald-200 transition-all duration-300 group
                    ${index === 0 ? "rounded-t-xl sm:rounded-tl-xl sm:rounded-tr-none" : ""}
                    ${index === 1 ? "sm:rounded-tr-xl" : ""}
                    ${index === coreValues.length - 2 ? "sm:rounded-bl-xl" : ""}
                    ${index === coreValues.length - 1 ? "rounded-b-xl sm:rounded-br-xl sm:rounded-bl-none" : ""}
                `}
                >
                {/* Icon wrapper */}
                <div
                    className="p-3 rounded-lg bg-emerald-100 text-black 
                            group-hover:bg-black group-hover:text-white 
                            transition-colors duration-300"
                >
                    <value.icon className="w-6 h-6" />
                </div>

                {/* Text content */}
                <div className="text-left">
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground text-xl">{value.description}</p>
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
