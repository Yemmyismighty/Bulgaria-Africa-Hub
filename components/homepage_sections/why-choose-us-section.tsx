"use client"

import { InfoCard } from "../custom_components/InfoCard"
import { Globe, Handshake, Users } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function WhyChooseUs() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

    const cards = [
        {
        icon: Globe,
        title: "Bicultural Expertise",
        description:
            "With deep roots in both regions, we understand the cultural nuances, regulations, and market dynamics.",
        bgColor: "bg-[#FCE8DE]",
        },
        {
        icon: Users,
        title: "End-to-End Support",
        description:
            "From consultation to execution, we provide hands-on guidance every step of the way.",
        bgColor: "bg-[#E6EBF5]",
        },
        {
        icon: Handshake,
        title: "Ethical & Inclusive",
        description:
            "We are committed to fostering fair, transparent, and sustainable exchanges that benefit all parties.",
        bgColor: "bg-[#B9F5E0]",
        },
    ]

    return (
        <section
        ref={headerRef}
        className={`py-20 bg-background transition-all duration-800 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
                <InfoCard key={idx} {...card} />
            ))}
            </div>
        </div>
        </section>
    )
}
