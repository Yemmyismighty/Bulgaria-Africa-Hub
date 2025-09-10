"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const team = [
    {
        name: "Aboagye Mintah",
        image: "/Aboagye-Mintah.jpg",
        role: "CEO & Founder",
    },
    {
        name: "Nathan Mintah",
        image: "/Nathan-Mintah.jpg",
        role: "CTO",
    },
    {
        name: "Charles Adeyemi",
        image: "/Feyisade.jpg",
        role: "Country Director - Nigeria",
    },
]

export function MeetTheTeam() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

    return (
        <section
        ref={headerRef}
        className={`py-20 bg-background transition-all duration-800 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member, index) => (
                    <div
                    key={index}
                    className="group rounded-xl overflow-hidden shadow-lg bg-white"
                    >
                    {/* Image wrapper */}
                    <div className="relative w-full h-[400px]">
                        <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition duration-500 group-hover:brightness-75"
                        />

                        {/* Role Tag */}
                        <span
                        className="absolute top-4 left-4 bg-white text-black text-sm font-medium 
                                    px-3 py-1 rounded-md shadow"
                        >
                        {member.role}
                        </span>
                    </div>

                    {/* Name panel */}
                    <div
                        className="p-4 bg-white transition-transform duration-500 
                                group-hover:-translate-y-8"
                    >
                        <p className="text-lg font-semibold text-gray-900">
                        {member.name}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}