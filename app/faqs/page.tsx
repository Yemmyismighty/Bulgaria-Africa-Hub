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


const faqs = [
  {
    q: "What services does Bulgaria Africa Hub offer?",
    a: "We provide end-to-end services in four key areas: <strong>Education, Trade & Investment, Skilled Work Placement, and Tourism</strong>. Whether you're looking to study, do business, find employment, or explore Bulgaria, we're your trusted partner every step of the way.",
  },
  {
    q: "What makes Bulgaria different from other European destinations?",
    a: "Bulgaria offers <strong>EU-quality services at a lower cost,</strong> a <strong>welcoming environment, diverse cultures,</strong> and <strong>fewer visa hurdles</strong> compared to countries like the UK, Canada, or Germany. It’s Europe’s best-kept secret for smart, affordable opportunities.",
  },
  {
    q: "Why should I consider studying in Bulgaria?",
    a: "Bulgaria offers <strong>affordable tuition, English-taught programs</strong>, and <strong>globally recognized degrees</strong>. As an EU country, it also offers <strong>visa-free travel across Europe</strong> and potential pathways to <strong>residency or citizenship</strong> after graduation—all at a fraction of the cost of Western Europe.",
  },
  {
    q: "I'm an investor/entrepreneur - can BAHUB help me enter the Bulgarian market?",
    a: "Yes. We provide tailored support for African entrepreneurs looking to <strong>invest or expand into Bulgaria,</strong> including <strong>TRO registration, joint venture brokerage, B2B matchmaking,</strong> and <strong>market entry consulting.</strong>",
  },
  {
    q: "Can international students work while studying in Bulgaria?",
    a: "Yes. International students in Bulgaria are legally allowed to <strong>work part-time during their studies</strong>, which helps support living expenses and gain valuable experience.",
  },
  {
    q: "Do you provide support when I arrive in Bulgaria?",
    a: "Yes, our <strong>soft landing services</strong> include <strong>airport pickup, housing support, city orientation,</strong> and ongoing advice to help you settle comfortably in Bulgaria.",
  },
  {
    q: "What's a Trade Representative Office and how can it benefit my business?",
    a: "A <strong>Trade Representative Office (TRO)</strong> lets your Ghanaian or African business legally establish a <strong>non-commercial presence in Bulgaria</strong>. You can <strong>appoint up to three representatives</strong>, gain residency rights, explore EU markets, attend trade events, and promote your services across Europe.",
  },
  {
    q: "Who is eligible to use your services?",
    a: "We work with <strong>students, professionals, business owners, investors, and tourists</strong> from across Africa. If you're looking to access opportunities in Bulgaria, we’re ready to support you.",
  },
  {
    q: "Does Bulgaria Africa Hub assist with visa applications?",
    a: "Absolutely. We <strong>provide professional visa support services</strong> for students, skilled workers, businesspeople, and tourists—ensuring your documentation is complete, compliant, and submitted on time.",
  },
  {
    q: "Where is Bulgaria Africa Hub located?",
    a: "We are based <strong>inside the Bulgarian Consulate in Accra</strong>:<br> 📍 No. 8 Kakramadu Road, Cantonments, Accra, Ghana.<br>Feel free to call us on <strong>+233 244 995 156</strong> or email us at <strong>info@bulgariaafricahub.com</strong> to book a consultation.",
},
];


export default function FaqsPage() {
    const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: header0Ref, isVisible: header0Visible } = useScrollReveal<HTMLDivElement>()

    return (
    <div className="min-h-screen bg-background">
        <Header />
        <main className="px-8 md:px-10 lg:px-12">
        <div
            ref={headingRef}
            className={`container max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-800 ${
                headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <h1 className="pt-15 text-4xl text-center md:text-5xl font-bold text-foreground mb-6">Your Common Queries Answered</h1>
            <p className="text-center mt-9 md:text-lg text-muted-foreground mb-6 max-w-400">
                Frequently asked questions from inquirers like you
            </p>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            ref={header0Ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-800 ${
                header0Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            >
                {faqs.map((item, idx) => (
                    <Disclosure key={idx}>
                    {({ open }) => (
                        <div className="rounded-lg border bg-white">
                        <DisclosureButton
                            className="w-full flex items-center justify-between p-6 text-left
                                    rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-ring"
                        >
                            <span className="font-medium text-base md:text-lg">{item.q}</span>

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
                            <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-6">
                                <p className="text-muted-foreground"
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                ></p>
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>
                    )}
                    </Disclosure>
                ))}
            </div>
        </div>

    <ContactCTA />
        </main>
        <Footer />
    </div>
    )
}
