"use client"

import { Header } from "@/components/homepage_sections/header"
import { Footer } from "@/components/homepage_sections/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { MapPin, Phone, Clock, Mail } from "lucide-react"


const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "Address",
    value: "Inside the Consulate of Bulgaria, No.10 Kakramadu Rd, East Cantonments, Accra.",
  },
  {
    icon: <Phone className="w-6 h-6 text-white" />,
    title: "Mobile",
    value: "(+233) 24 499 5156",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "Availability",
    value: "Daily 09 am - 05 pm",
  },
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Email",
    value: "info@bulgariaafricahub.com",
  },
];



export default function ContactUsPage() {
    const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal()

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
            <h1 className="pt-15 text-4xl text-center md:text-5xl font-bold text-foreground mb-6">Connect with Our Team</h1>
            <p className="text-center mt-9 md:text-lg text-muted-foreground mb-6 max-w-400">
                For inquiries about studying, working, investing, or visiting Bulgaria.
            </p>
        </div>

        <section
        ref={cardsRef}
        className={`py-20 transition-all duration-1000 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid gap-2 2xl:grid-cols-2">
                <div className="flex justify-center items-end">
                    <div className="w-full  max-w-md bg-gray-100 text-gray-900 rounded-lg p-6 md:p-8 shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">Get in Touch With Us</h2>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input
                            aria-label="Full name"
                            name="name"
                            placeholder="Full name"
                            className="w-full rounded-md border border-gray-200 px-3 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white"
                            />
                            <input
                            aria-label="Email address"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className="w-full rounded-md border border-gray-200 px-3 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white"
                            />
                        </div>

                        <div>
                            <input
                            aria-label="Phone number"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full rounded-md border border-gray-200 px-3 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white"
                            />
                        </div>

                        <div>
                            <textarea
                            aria-label="Message"
                            name="message"
                            placeholder="Type your message here...."
                            rows={6}
                            className="w-full rounded-md border border-gray-200 px-3 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white"
                            />
                        </div>

                        <div className="p-6 pt-0">
                            <button
                            type="submit"
                            className=" w-full inline-block bg-black text-white rounded-md px-6 py-2.5 hover:opacity-95 transition"
                            >
                            Submit
                            </button>
                        </div>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactInfo.map((item, idx) => (
                        <div
                        key={idx}
                        className="flex items-center gap-4 p-6 rounded-lg border border-gray-200 bg-white shadow-sm"
                        >
                        {/* Fixed-size Icon box */}
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded bg-black">
                            {item.icon}
                        </div>

                        {/* Text content */}
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{item.title}</h4>
                            <p className="text-gray-600">{item.value}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section>
        </main>
        <Footer />
    </div>
    )
}