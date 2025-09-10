"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/homepage_sections/header"
import { Footer } from "@/components/homepage_sections/footer"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { BookOpen, CarTaxiFront, HandHelping, GraduationCap, GroupIcon, UsersRound, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ContactCTA from "@/components/custom_components/ContactCard"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"


const services = [
    {
      icon: BookOpen,
      title: "Custom Travel Planning",
      description:
        "No two travelers are the same. That’s why we offer tailor-made itineraries based on your interests.",
      features: ["Market Research", "Partnership Matching", "Investment Facilitation"],
      image:"/image-9D8DT43.jpg",
    },
    {
      icon: HandHelping,
      title: "Visa Assistance",
      description:
        "Professional support throughout the application process.",
      features: ["Language Courses", "Cultural Workshops", "Exchange Programs"],
      image:"/image-EF5WFVY.jpg",
    },
    {
      icon: CarTaxiFront,
      title: "Airport Transfers & Local Transport",
      description:
        "Arrive stress-free with our airport pick-up service and reliable transport across cities and tourist attractions. Multilingual guides and drivers available.",
      features: ["Trade Missions", "Export Assistance", "Regulatory Guidance"],
      image:"/image-SZ2WRKJ.png",
      imagePosition: "top",
    },
    {
      icon: UsersRound,
      title: "Group & Solo Tour Packages",
      description: "Whether you’re traveling alone, with family, or as part of a group, we offer personalized tour packages that suit every travel style and budget.",
      features: ["Policy Dialogue", "Diplomatic Events", "Official Visits"],
      image:"/image-SZ2WRKJ.png",
      imagePosition: "top",
    },
]

const images = [
    "/bulgaria-view.webp",
    "/Veliko-Tarnovo-Bulgaria.jpg",
    "/Rila_monastry-Bulgaria-scaled.webp",
]


export default function TourismPage() {
    const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: header0Ref, isVisible: header0Visible } = useScrollReveal<HTMLDivElement>()
    const { ref: header1Ref, isVisible: header1Visible } = useScrollReveal<HTMLDivElement>()
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: row10Ref, isVisible: row10Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row11Ref, isVisible: row11Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })

    const [index, setIndex] = useState(0);
    
    useEffect(() => {
    const interval = setInterval(
        () => setIndex((prev) => (prev + 1) % images.length),
        4000 // switch every 4s
    );
    return () => clearInterval(interval);
    }, []);

    return (
    <div className="min-h-screen bg-background">
        <Header />
        <main className="px-8 md:px-10 lg:px-12">
        <div
            ref={headingRef}
            className={`container max-w-[700px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-800 ${
                headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <h1 className="pt-15 text-4xl text-center md:text-5xl font-bold text-foreground mb-6">Tourism in Bulgaria</h1>
            <p className="text-center mt-9 md:text-lg text-muted-foreground mb-6 max-w-400">
                We curate personalized travel experiences, showcasing Bulgaria’s breathtaking landscapes, historical landmarks, and cultural heritage.
            </p>
        </div>

        <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <Card
                key={index}
                className={`relative bg-background border-border rounded-lg overflow-hidden 
        hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 ${
                    index % 2 === 0 ? "delay-0" : "delay-300"
                } ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                {/* Background Image */}
                {service.image && (
                    <div className="absolute inset-0 z-0">
                    <img
                        src={service.image}
                        alt={service.title}
                        className={`w-full h-full object-cover ${service.imagePosition === "top" ? "object-top" : "object-center"}`}
                    />
                    <div className="absolute inset-0 bg-black/75 sm:bg-black/75" />
                    </div>
                )}

                {/* Card Content */}
                <div className="relative z-10">
                    <CardHeader>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                    </div>
                    </CardHeader>
                    <CardContent>
                    <p className="text-white mb-4">{service.description}</p>
                    {service.title === "Scholarship Program Available" && (
                        <Button
                            variant="outline"
                            className="border border-white text-white hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                            Get Started
                        </Button>
                        )}
                    </CardContent>
                </div>
                </Card>
            ))}
            </div>
        </div>
        </section>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <h1
                ref={header0Ref}
                className={`pt-15 text-4xl text-center md:text-left md:text-5xl font-bold text-foreground mb-6 transition-all duration-800 ${
                    header0Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                >5 Unique benefits of Touring Bulgaria</h1>
                <p
                ref={header1Ref}
                className={`text-center mt-9 text-center md:text-lg md:text-left text-muted-foreground mb-6 max-w-400 transition-all duration-800 ${
                    header1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                 >Discover the beauty, history, and charm of Bulgaria — with travel experiences tailored for African explorers. Whether you’re visiting for the first time or returning to dive deeper, we’re here to make your journey seamless, enriching, and unforgettable.
                 </p>

                {/* Left Column */}
                <div
                ref={row10Ref}
                className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] transition-all duration-800 ${
                    row10Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                >
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

                <div
                  ref={row11Ref}
                    className={`transition-all duration-800 ${
                        row11Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Disclosure defaultOpen>
                    {({ open }) => (
                    <div className="rounded-lg border bg-white">
                    <DisclosureButton
                            className="w-full flex items-center justify-between p-6 text-left
                                    rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-ring"
                        >
                            <span className="font-medium text-base md:text-lg">Why Tour Bulgaria?</span>

                            {/* Icon square on the right */}
                            <span
                            className={
                                "ml-4 inline-flex items-center justify-center w-9 h-9 rounded-sm shadow-sm transition-colors " +
                                (open ? "bg-black text-white" : "bg-black text-white")
                            }
                            aria-hidden
                            >
                            {open ? <Minus size={16} /> : <Plus size={16} />}
                            </span>
                        </DisclosureButton>

                        {/* Animated panel */}
                        <AnimatePresence initial={false}>
                            {open && (
                            <DisclosurePanel static>
                            <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-6">
                                    <ul className="list-disc ml-5 leading-loose">
                                        <li><b>Low Cost of Living</b>– Affordable accommodation, transportation, and daily expenses compared to most European countries.</li>
                                        <li><b>Excellent Healthcare System</b> – Access to high-quality medical care at relatively low costs.</li>
                                        <li><b>Efficient Public Transport</b> – Well-developed and inexpensive public transport system across cities.</li>
                                        <li><b>Mild Climate & Beautiful Nature</b> – Four distinct seasons, with stunning mountains, beaches, and historical sites.</li>
                                        <li><b>Business & Employment Opportunities</b> – Bulgaria has a growing economy with increasing opportunities for skilled professionals and entrepreneurs.</li>
                                    </ul>
                                </div>
                            </motion.div>
                            </DisclosurePanel>
                            )}
                        </AnimatePresence>
                        </div>
                    )}
                    </Disclosure>
                  </div>
            </div>
        </div>

    <ContactCTA />
        </main>
        <Footer />
    </div>
    )
}
