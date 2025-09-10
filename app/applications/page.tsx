"use client"

import { Header } from "@/components/homepage_sections/header"
import { Footer } from "@/components/homepage_sections/footer"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import ContactCTA from "@/components/custom_components/ContactCard"
import { Button } from "@/components/ui/button"

const applications = [
    {
      title: "CONSTRUCTION WORKERS",
      wageDescription: "€ 60-80 Per Day. This adds up to around €1400 - €1,800 Per month",
      description: "Exciting opportunities for skilled African workers: plumbers, masons, tilers, carpenters, electricians and foremen who are now in high demand. For many, it’s a chance to secure well-paying jobs, gain international experience, and build a stable future in the European market.",
      image:"/Blue-Geometric-Shapes-Money-Investment-YouTube-Thumbnail-1024x576.png",
    },
    {
      title: "STUDY IN BULGARIA PROGRAM",
      wageDescription: "Tuition ranges from €2000 - 4000 / Per Year depending on selected program.",
      description: "Bulgaria is the place to be for international students!. Join the 2025/2026 \"Study in Bulgaria\" program and enjoy world-class education and endless opportunities. Join a thriving international student community and graduate with a global recognized degree.",
      image:"/Blue-Geometric-Shapes-Money-Investment-YouTube-Thumbnail-3-1024x576.png",
    },
    {
      title: "SCHOLARSHIP APPLICATION",
      wageDescription: "Fully Funded by Agricultural university of Plovdiv.",
      description: "Are you a brilliant student passionate about Agriculture, Food Science, or Environmental Studies? Here’s your chance to study at one of Europe’s top agricultural universities for FREE! Registration starts : June 1 and ends August 30, 2025",
      image:"/Blue-Geometric-Shapes-Money-Investment-YouTube-Thumbnail-4-1024x576.png",
    },
]

export default function ApplicationsPage() {
    const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>()
    const { ref: header0Ref, isVisible: header0Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })

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
            <h1 className="pt-15 text-4xl text-center md:text-5xl font-bold text-foreground mb-6">Available Applications</h1>
        </div>

        <section
        ref={header0Ref}
        className={`py-20 transition-all duration-1000 ${
            header0Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {applications.map((app, index) => (
                    <div 
                    key={index} 
                    className="flex flex-col rounded-xl shadow-md bg-white overflow-hidden 
                                transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
                    >
                    {/* Image */}
                    <img 
                        src={app.image} 
                        alt={app.title} 
                        className="w-full h-48 object-cover"
                    />

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 gap-3">
                        <h3 className="text-xl font-semibold text-gray-800">
                        {app.title}
                        </h3>

                        <p className="text-primary font-medium">
                        {app.wageDescription}
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                        {app.description}
                        </p>

                        {/* Spacer pushes button down */}
                        <div className="flex-grow" />
                    </div>

                    {/* Button stays aligned at bottom */}
                    <div className="p-6 pt-0">
                        <Button
                        variant="outline"
                        className="w-full border border-primary text-primary 
                                    hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                        APPLY NOW!
                        </Button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    <ContactCTA />
        </main>
        <Footer />
    </div>
    )
}
