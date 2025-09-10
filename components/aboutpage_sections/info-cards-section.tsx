"use client"

import { InfoCard } from "../custom_components/InfoCard"
import { Binoculars, BinocularsIcon, Globe, Globe2, Handshake, LucideBinoculars, Target, Users } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function AboutInfoCards() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

    const cards = [
        {
        icon: Target,
        title: "Our Mission",
        description:
            "To unlock sustainable economic and human development between Bulgaria and African nations by providing high-impact, end-to-end services that connect students, professionals, entrepreneurs, and investors to real opportunities across borders.",
        bgColor: "bg-[#FCE8DE]",
        },
        {
        icon: BinocularsIcon,
        title: "Our Vision",
        description:
            "To be the leading bridge between Bulgaria and Africa—empowering people, businesses, and institutions to thrive through meaningful connections in education, trade, investment, tourism, and cultural exchange.",
        bgColor: "bg-[#E6EBF5]",
        },
        {
        icon: Globe,
        title: "Why Bulgaria?",
        description:
            "Bulgaria is more than just a destination — it’s a gateway to opportunity. Whether you’re looking to advance your education, build a career, invest, or explore, moving to Bulgaria stands out as a smart move.",
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
            <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
                <InfoCard key={idx} {...card} />
            ))}
            </div>
        </div>
        </section>
    )
}
