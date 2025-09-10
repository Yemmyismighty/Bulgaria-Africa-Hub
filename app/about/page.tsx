import { Header } from "@/components/homepage_sections/header"
import { ServicesSection } from "@/components/homepage_sections/services-section"
import { Footer } from "@/components/homepage_sections/footer"
import { EmpowerAboutSection } from "@/components/aboutpage_sections/empower-section"
import { WhoWeAreSection } from "@/components/aboutpage_sections/who-we-are-section"
import { AboutInfoCards } from "@/components/aboutpage_sections/info-cards-section"
import { CoreValues } from "@/components/aboutpage_sections/core-values-section"
import { MeetTheTeam } from "@/components/aboutpage_sections/meet-team-section"
import { FAQSection } from "@/components/aboutpage_sections/faq-section"

export default function AboutPage() {
    return (
    <div className="min-h-screen bg-background">
        <Header />
        <main className="px-8 md:px-10 lg:px-12">
        <EmpowerAboutSection />
        <WhoWeAreSection/>
        <AboutInfoCards />
        <CoreValues />
        <ServicesSection />
        <MeetTheTeam />
        <FAQSection />
        </main>
        <Footer />
    </div>
    )
}