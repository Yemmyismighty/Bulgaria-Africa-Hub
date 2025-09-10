import { Globe, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2">
                <Image
                  src="/Bulgaria-Africa-Hub-white-1024x473.png"
                  alt="Bulgari Africa Hub Logo"
                  width={200}
                  height={150}
                />
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Bridging continents through strategic partnerships, cultural exchange, and sustainable development
              initiatives.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center">
                <Globe className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
            </div>
            </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="/" className="hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-background transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-background transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Info</h3>
            <div className="space-y-2 text-background/80">
              <p>Inside the Consulate of Bulgaria</p>
              <p>No. 10 Kakramadu Rd, East Cantonments, Accra.</p>
              <p>(+233) 24 499 5156</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="/study-in-bulgaria" className="hover:text-background transition-colors">
                  Study in Bulgaria
                </a>
              </li>
              <li>
                <a href="/tourism-in-bulgaria" className="hover:text-background transition-colors">
                  Tour Bulgaria
                </a>
              </li>
              <li>
                <a href="/work-in-bulgaria" className="hover:text-background transition-colors">
                  Work & Invest in Bulgaria
                </a>
              </li>
              <li>
                <a href="/exploring-opportunities-in-west-africa" className="hover:text-background transition-colors">
                  Opportunites in West Africa
                </a>
              </li>
            </ul>
          </div>
        </div>


        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>Copyright &copy; 2025 | Bulgaria Africa Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
