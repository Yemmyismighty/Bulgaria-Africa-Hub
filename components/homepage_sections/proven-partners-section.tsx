"use client"

import LogoCarousel from "@/components/custom_components/LogoCarousel";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";


export function PartnersSection() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

    const companyLogos = [
        "/BACCIC-1536x864.jpeg",
        "/Consulate-of-Bulgaria-to-Ghana.jpeg",
        "/InterHics.jpeg",
        "/Lets-Go-Travel.jpeg",
        "/OK-World-Travel-and-Tour.jpeg",
    ];

    return (
        <section
        ref={headerRef}
        className={`py-20 bg-background transition-all duration-800 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Proven Partnerships</h2>
        <LogoCarousel images={companyLogos} speed={25} />
        </section>
    );
}
