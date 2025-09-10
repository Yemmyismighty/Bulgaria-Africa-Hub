"use client"

import { Header } from "@/components/homepage_sections/header"
import { Footer } from "@/components/homepage_sections/footer"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { BookOpen, CarTaxiFront, HandHelping, GraduationCap, UserRoundCog, UserRoundPen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ContactCTA from "@/components/custom_components/ContactCard"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"


const services = [
    {
      icon: UserRoundPen,
      title: "Skilled Workers",
      description:
        "Connecting professionals to job opportunities in Bulgaria.",
      features: ["Market Research", "Partnership Matching", "Investment Facilitation"],
      image:"/image-9D8DT43.jpg",
    },
    {
      icon: UserRoundCog,
      title: "Entrepreneurs & Investors",
      description:
        "Advising African businesses on expanding into Bulgaria and leveraging EU market opportunities.",
      features: ["Language Courses", "Cultural Workshops", "Exchange Programs"],
      image:"/image-EF5WFVY.jpg",
    },
]

const images = [
    "/bulgaria-view.webp",
    "/Veliko-Tarnovo-Bulgaria.jpg",
    "/Rila_monastry-Bulgaria-scaled.webp",
]


export default function WorkandInvestPage() {
    const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: header0Ref, isVisible: header0Visible } = useScrollReveal<HTMLDivElement>()
    const { ref: header1Ref, isVisible: header1Visible } = useScrollReveal<HTMLDivElement>()
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: row10Ref, isVisible: row10Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row11Ref, isVisible: row11Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })

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
            <h1 className="pt-15 text-4xl text-center md:text-5xl font-bold text-foreground mb-6">Work and Invest in Bulgaria</h1>
            <p className="text-center mt-9 md:text-lg text-muted-foreground mb-6 max-w-400">
                We provide consultancy services for:
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
                        className={"w-full h-full object-cover"}
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
                >How do we help?</h1>
                <p
                ref={header1Ref}
                className={`text-center mt-9 text-center md:text-lg md:text-left text-muted-foreground mb-6 max-w-400 transition-all duration-800 ${
                    header1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                 >We help African Businesses with the following:
                 </p>

                {/* Left Column */}
                <div
                ref={row10Ref}
                className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] transition-all duration-800 ${
                    row10Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                >
                <Image
                    src="/Partnerships-BA_Hub-scaled.webp"
                    alt="Bulgaria Africa Partnership"
                    fill
                    className="object-cover object-top"
                    priority
                />
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
                            <span className="font-bold text-base md:text-lg md:text-2xl">Services</span>

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
                                    <ol className="list-decimal ml-10 font-semibold text-xl leading-[7rem]">
                                        <li>General Advisory Services</li>
                                        <li>Joint Venture Brokerage</li>
                                        <li>Curated Tours for Business Leaders and Trade Delegations</li>
                                        <li>Registering a Trade Representative Office in Bulgaria</li>
                                    </ol>
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
