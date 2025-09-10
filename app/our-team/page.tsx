"use client"

import { Header } from "@/components/homepage_sections/header"
import { Footer } from "@/components/homepage_sections/footer"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ContactCTA from "@/components/custom_components/ContactCard"


export default function OurTeamPage() {
    const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: header0Ref, isVisible: header0Visible } = useScrollReveal<HTMLDivElement>()
    const { ref: header1Ref, isVisible: header1Visible } = useScrollReveal<HTMLDivElement>()
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: row10Ref, isVisible: row10Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row11Ref, isVisible: row11Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row20Ref, isVisible: row20Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })

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
            <h1 className="pt-15 text-4xl text-center md:text-5xl font-bold text-foreground mb-6">Meet Our Team</h1>
        </div>

        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div
                    ref={header0Ref}
                    className={`group rounded-xl overflow-hidden shadow-lg bg-white" transition-all duration-800 ${
                        header0Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    >
                        {/* Image wrapper */}
                        <div className="relative w-full h-full min-h-[500px] lg:h-full">
                            <Image
                            src="/Aboagye-Mintah.jpg"
                            alt="Aboagye Mintah"
                            fill
                            className="object-cover transition duration-500"
                            />

                            {/* Role Tag */}
                            <span
                            className="absolute top-4 left-4 bg-white text-black text-sm font-medium 
                                        px-3 py-1 rounded-md shadow"
                            >
                            CEO & Founder
                            </span>
                        </div>
                    </div>

                    <div
                    ref={header1Ref}
                    className={`transition-all duration-800 ${
                        header0Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    >
                        <h1 className="text-4xl text-left md:text-5xl font-bold text-foreground mb-6">Aboagye Mintah</h1>
                        <h3 className="font-bold ">CEO & Founder</h3>

                        <p className="mt-6 lg:text-[20px] text-muted-foreground">
                            Aboagye Mintah is the founder of <strong>Bulgaria Africa Hub</strong>, a specialized agency based inside the Bulgarian Consulate in Accra, Ghana. With a mission to connect Bulgaria and Africa—one country at a time—Bulgaria Africa Hub operates at the intersection of education, trade, investment, sports, and cultural exchange.
                        </p>

                        <p className="mt-6 lg:text-[20px] text-muted-foreground">
                            Under Aboagye’s leadership, the agency has become a pioneering platform facilitating economic partnerships and mobility pathways between African nations and Bulgaria. From establishing educational pipelines for students to building trade representative offices and fostering bilateral cultural integration, Bulgaria Africa Hub is reshaping how Africa engages with Eastern Europe.
                        </p>

                        <p className="mt-6 lg:text-[20px] text-muted-foreground">
                            Aboagye brings to this role over <strong>20 years of experience</strong> in marketing, business development, international development, and project management. His deep understanding of African markets, coupled with strategic insight into European systems, positions him as a leading connector of cross-continental opportunities.
                        </p>

                        <hr className="mt-20"></hr>
                    </div>

                    <div
                    ref={cardsRef}
                    className={`transition-all duration-800 ${
                        cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    >
                        <h1 className="text-4xl text-left md:text-5xl font-bold text-foreground mb-6">Nathan Mintah</h1>
                        <h3 className="font-bold ">Chief Technical Officer</h3>

                        <p className="mt-6 lg:text-[20px] text-muted-foreground">
                            Nathan Mintah is an innovative technology leader specializing in digital marketing, virtual events, and scalable online outreach strategies. As Chief Technical Officer of the Bulgaria Africa Hub, he spearheads the organization’s technological initiatives, advancing its mission to foster educational, tourism, trade, investment, and cultural ties between Bulgaria and Africa.                        
                        </p>

                        <p className="mt-6 lg:text-[20px] text-muted-foreground">
                            With over eight years of experience as a graphic designer, video editor, and creative brand director, Nathan has collaborated with diverse businesses, including Coco360 Company Ltd, Afriops Consult, and Zoozwa Ghana, delivering high-impact digital solutions. His expertise lies in creating compelling visual designs that strengthen brand identity and drive audience engagement. Nathan adopts a client-focused approach, ensuring tailored solutions for optimal results.
                        </p>

                        <p className="mt-6 lg:text-[20px] text-muted-foreground">
                            A graduate in Graphic and Web Design from IPMC Ghana and an ALX AiCE-certified professional, Nathan combines technical proficiency with strategic vision. Beyond his role at the Bulgaria Africa Hub, he is also the co-founder of TurkAfriq Consults, a full-service travel and consultancy agency specializing in study abroad programs, AuPair placements, and recruitment services for Turkey and Europe.
                        </p>

                        <hr className="mt-20"></hr>
                    </div>

                    <div
                    ref={row11Ref}
                    className={`group rounded-xl overflow-hidden shadow-lg bg-white" transition-all duration-800 ${
                        row11Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    >
                        {/* Image wrapper */}
                        <div className="relative w-full h-full min-h-[500px] lg:h-full">
                            <Image
                            src="/Nathan-Mintah.jpg"
                            alt="Nathan-Mintah"
                            fill
                            className="object-cover transition duration-500"
                            />

                            {/* Role Tag */}
                            <span
                            className="absolute top-4 left-4 bg-white text-black text-sm font-medium 
                                        px-3 py-1 rounded-md shadow"
                            >
                            CTO
                            </span>
                        </div>
                    </div>

                    <div
                    ref={row20Ref}
                    className={`group rounded-xl overflow-hidden shadow-lg bg-white" transition-all duration-800 ${
                        row20Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    >
                        {/* Image wrapper */}
                        <div className="relative w-full h-full min-h-[500px] lg:h-full">
                            <Image
                            src="/Feyisade.jpg"
                            alt="Charles Adeyemi"
                            fill
                            className="object-cover transition duration-500"
                            />

                            {/* Role Tag */}
                            <span
                            className="absolute top-4 left-4 bg-white text-black text-sm font-medium 
                                        px-3 py-1 rounded-md shadow"
                            >
                            Country Director - Nigeria
                            </span>
                        </div>
                    </div>

                    <div
                    ref={row10Ref}
                    className={`transition-all duration-800 ${
                        row10Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    >
                        <h1 className="text-4xl text-left md:text-5xl font-bold text-foreground mb-6">Dr. Charles Adeyemi</h1>
                        <h3 className="font-bold ">Country Director, Nigeria</h3>

                        <p className="mt-6 lg:text-[20px] text-muted-foreground">
                            Dr. Charles Adeyemi, an International Air Transport Association (IATA) Certified Travel Professional, is the Nigerian Country Director, at the Bulgaria-Africa Hub.                        
                        </p>

                        <p className="mt-6 lg:text-[20px] text-muted-foreground">
                            With a PhD in Tourism Development and nearly two decades of experience working in the education sector in Nigeria, Dr. Adeyemi has lectured at Wesley University, Elizade University, and currently lectures at Osun State University.
                        </p>

                        <p className="mt-6 lg:text-[20px] text-muted-foreground">
                            He also sits on the board of multiple local and international organizations, playing leading roles at various businesses, social enterprises and educational non-profits.
                        </p>

                        <p className="mt-6 lg:text-[20px] text-muted-foreground">
                            As an education and travel consultant, lecturer and students’ success coach, he enjoys helping students achieve success in their studies and their subsequent career trajectory, both locally and globally.
                        </p>

                        <hr className="mt-20"></hr>
                    </div>
                </div>
            </div>
        </section>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
            </div>
        </div>

    <ContactCTA />
        </main>
        <Footer />
    </div>
    )
}
