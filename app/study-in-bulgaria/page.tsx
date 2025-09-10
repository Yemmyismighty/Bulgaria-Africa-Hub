"use client"

import { Header } from "@/components/homepage_sections/header"
import { Footer } from "@/components/homepage_sections/footer"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { BookOpen, Globe, TrendingUp, MessageSquare, BedDoubleIcon, HandHelping, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ContactCTA from "@/components/custom_components/ContactCard"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"


const services = [
    {
      icon: BookOpen,
      title: "University & Program Selection",
      description:
        "Guidance on choosing the right institution and academic program.",
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
      icon: BedDoubleIcon,
      title: "Soft Landing Services",
      description:
        "Accommodation assistance, airport pick-up, and orientation to help students integrate into their new environment.",
      features: ["Trade Missions", "Export Assistance", "Regulatory Guidance"],
      image:"/image-SZ2WRKJ.png",
      imagePosition: "top",
    },
    {
      icon: GraduationCap,
      title: "Scholarship Program Available",
      description: "Are you passionate about Agriculture, Food Science, or the Environment? This is your chance to study in Bulgaria for FREE, at one of the top agricultural universities in the EU ; the Agricultural University of Plovdiv in BULGARIA!",
      features: ["Policy Dialogue", "Diplomatic Events", "Official Visits"],
      image:"/image-SZ2WRKJ.png",
      imagePosition: "top",
    },
  ]

export default function StudyPage() {
    const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: header0Ref, isVisible: header0Visible } = useScrollReveal<HTMLDivElement>()
    const { ref: header1Ref, isVisible: header1Visible } = useScrollReveal<HTMLDivElement>()
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: row10Ref, isVisible: row10Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row11Ref, isVisible: row11Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row20Ref, isVisible: row20Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row21Ref, isVisible: row21Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })



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
            <h1 className="pt-15 text-4xl text-center md:text-5xl font-bold text-foreground mb-6">Study in Bulgaria</h1>
            <p className="text-center mt-9 md:text-lg text-muted-foreground mb-6 max-w-400">
              We offer 360-degree services to prospective African students, ensuring a smooth transition from application to settlement in Bulgaria. Our services include:
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
                >10 Reasons why you need to study in Bulgaria</h1>
                <p
                ref={header1Ref}
                className={`text-center md:text-left mt-9 md:text-lg text-muted-foreground mb-6 max-w-400 transition-all duration-800 ${
                    header1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                 >Choosing where to study is one of the most important decisions you’ll ever make — and Bulgaria offers a unique blend of quality, affordability, and opportunity that makes it an ideal destination for African students.
                 </p>

                {/* Left Column */}
                <div
                ref={row10Ref}
                className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] transition-all duration-800 ${
                    row10Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                >
                <Image
                    src="/image-DXXLCBB.jpg"
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
                            <span className="font-medium text-base md:text-lg">Why choose Bulgaria?</span>

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
                                        <li><b>Affordable Tuition Fees & Living Costs</b>– Compared to Western Europe, Bulgaria offers top-quality education at a fraction of the cost.</li>
                                        <li><b>Globally Recognized Degrees</b> – Bulgarian universities adhere to EU educational standards and their degrees are recognized worldwide.</li>
                                        <li><b>English-Taught Programs</b> – Many universities offer courses in English, eliminating language barriers for international students.</li>
                                        <li><b>Gateway to Europe</b> – As an EU member, Bulgaria offers students visa-free travel across Europe.</li>
                                        <li><b>Diverse Study Programs</b> – From Medicine to Engineering and Business, Bulgaria offers a wide range of academic disciplines.</li>
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

                <div
                  ref={row20Ref}
                    className={`transition-all duration-800 ${
                        row20Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Disclosure defaultOpen>
                    {({ open }) => (
                    <div className="rounded-lg border bg-white">
                    <DisclosureButton
                            className="w-full flex items-center justify-between p-6 text-left
                                    rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-ring"
                        >
                            <span className="font-medium text-base md:text-lg">Why choose Bulgaria?</span>

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
                                    <li><b>Safe & Welcoming Environment </b>– Bulgaria is known for its hospitality and peaceful atmosphere.</li>
                                    <li><b>Cultural Diversity</b> – A rich mix of Eastern and Western traditions, making it an exciting place to live and study.</li>
                                    <li><b>Opportunities for Work While Studying</b> – International students can work part-time during their studies.</li>
                                    <li><b>Pathway to EU Residency & Citizenship</b> – Studying in Bulgaria can be a stepping stone to long-term residence in Europe.</li>
                                    <li><b>Vibrant Student Community</b> – Bulgaria hosts students from across the world, fostering an international and dynamic learning experience.</li>
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

                <div
                ref={row21Ref}
                className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] transition-all duration-800 ${
                    row21Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                >
                <Image
                    src="/bulgaria-view.webp"
                    alt="Bulgaria Africa Partnership"
                    fill
                    className="object-cover object-top"
                    priority
                />
                </div>
            </div>
        </div>

    <ContactCTA />
        </main>
        <Footer />
    </div>
    )
}
