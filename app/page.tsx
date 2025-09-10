import { Header } from "@/components/homepage_sections/header"
import { HeroSection } from "@/components/homepage_sections/hero-section"
import { AboutSection } from "@/components/homepage_sections/about-section"
import { ServicesSection } from "@/components/homepage_sections/services-section"
import { PartnershipsSection } from "@/components/homepage_sections/partnerships-section"
import { Footer } from "@/components/homepage_sections/footer"
import { WhyMoveSection } from "@/components/homepage_sections/why-move-section"
import { WhyChooseUs } from "@/components/homepage_sections/why-choose-us-section"
import { PartnersSection } from "@/components/homepage_sections/proven-partners-section"
import { CTASection } from "@/components/homepage_sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-8 md:px-10 lg:px-12">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PartnershipsSection />
        <WhyMoveSection />
        <WhyChooseUs />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
