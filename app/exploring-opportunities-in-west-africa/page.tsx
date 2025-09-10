"use client"

import { Header } from "@/components/homepage_sections/header"
import { Footer } from "@/components/homepage_sections/footer"
import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactCTA from "@/components/custom_components/ContactCard"

export default function ExWAPage() {
    const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row10Ref, isVisible: row10Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row11Ref, isVisible: row11Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row20Ref, isVisible: row20Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row21Ref, isVisible: row21Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row30Ref, isVisible: row30Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row31Ref, isVisible: row31Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row40Ref, isVisible: row40Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row41Ref, isVisible: row41Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row50Ref, isVisible: row50Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row51Ref, isVisible: row51Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row60Ref, isVisible: row60Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row61Ref, isVisible: row61Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row70Ref, isVisible: row70Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })
    const { ref: row71Ref, isVisible: row71Visible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })


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
            <h1 className="py-12 text-4xl text-center md:text-5xl font-bold text-black mb-6">Services for Bulgarians Seeking Opportunities in Ghana/West Africa</h1>
        </div>
        <section className="py-12 mb-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column */}
                  <div
                    ref={row10Ref}
                    className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] transition-all duration-800 ${
                        row10Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Image
                      src="/Business-partners-BA-Hub-scaled.webp"
                      alt="Bulgaria Africa Partnership"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
        
                  {/* Right Column */}
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
                            <span className="font-medium text-base md:text-lg">1. Business and Investment Facilitation</span>

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
                                <p className="text-muted-foreground leading-loose"
                                    dangerouslySetInnerHTML={{ __html: "We help Bulgarian companies and entrepreneurs looking to expand into Ghana or the West African market with:"}}
                                ></p>
                                <br></br>
                                <ul className="list-disc ml-5 leading-loose">
                                    <li><b>Market Entry Support:</b> Sector-specific insights, regulatory guidance, and feasibility analysis for industries such as agriculture, construction, manufacturing, tech, and retail.</li>
                                    <li><b>Company Registration:</b> Full support for registering local entities, representative offices, or joint ventures in Ghana.</li>
                                    <li><b>Business Partner Matching:</b> B2B matchmaking with vetted Ghanaian companies and suppliers.</li>
                                    <li><b>Trade Missions:</b> Organization of Bulgarian trade delegations, business tours, and participation in Ghanaian expos and industry forums.</li>
                                    <li><b>Joint Venture Structuring:</b> Legal and operational support to structure compliant and mutually beneficial joint ventures.</li>
                                </ul>
                                </div>
                            </motion.div>
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
                            <span className="font-medium text-base md:text-lg">2. Sourcing & Procurement Servcies</span>

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
                                <p className="text-muted-foreground"
                                    dangerouslySetInnerHTML={{ __html: "We assist Bulgarian businesses and importers with sourcing authentic, high-quality Ghanaian products such as:"}}
                                ></p>
                                <br></br>
                                    <ul className="list-disc ml-5 leading-loose">
                                        <li>Agricultural commodities (e.g., cocoa, shea butter, cashew, ginger, pineapples)</li>
                                        <li>Handicrafts and textiles</li>
                                        <li>Industrial raw materials (e.g., timber, rubber, gold derivatives)</li>
                                    </ul>
                                <br></br>
                                    <p><b>Services include:</b></p>
                                <br></br>
                                    <ul className="list-disc ml-5 leading-loose">
                                        <li>Supplier vetting and verification</li>
                                        <li>Sample procurement and shipment coordination</li>
                                        <li>Export logistics and quality control</li>
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
                    }`}                  >
                    <Image
                      src="/Cocoa-beans.jpg"
                      alt="Bulgaria Africa Partnership"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  <div
                  ref={row30Ref}
                    className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] transition-all duration-800 ${
                        row30Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Image
                      src="/TravelPadi-Discount-Page-Header-scaled.webp"
                      alt="Bulgaria Africa Partnership"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  <div
                  ref={row31Ref}
                    className={`transition-all duration-800 ${
                        row31Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Disclosure defaultOpen>
                    {({ open }) => (
                    <div className="rounded-lg border bg-white">
                    <DisclosureButton
                            className="w-full flex items-center justify-between p-6 text-left
                                    rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-ring"
                        >
                            <span className="font-medium text-base md:text-lg">3. Tourism & Cultural Exchange Services</span>

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
                                <p className="text-muted-foreground leading-loose"
                                    dangerouslySetInnerHTML={{ __html: "We create curated travel experiences for Bulgarians seeking to explore Ghana's rich culture and natural beauty:"}}
                                ></p>
                                <br></br>
                                <ul className="list-disc ml-5 leading-loose">
                                    <li><b>Tour Package Design:</b> Tailor-made cultural tours, heritage trails, and eco-tourism trips across Ghana.</li>
                                    <li><b>Diaspora and Heritage Tourism:</b> For Bulgarians with African heritage or ancestry interests.</li>
                                    <li><b>Business Tourism:</b> Participation in Ghanaian trade shows, exhibitions, and conferences with logistical support.</li>
                                </ul>
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>
                    )}
                    </Disclosure>
                  </div>

                  <div
                  ref={row40Ref}
                    className={`transition-all duration-800 ${
                        row40Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Disclosure defaultOpen>
                    {({ open }) => (
                    <div className="rounded-lg border bg-white">
                    <DisclosureButton
                            className="w-full flex items-center justify-between p-6 text-left
                                    rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-ring"
                        >
                            <span className="font-medium text-base md:text-lg">4. Property Investment & Real Estate Advisory</span>

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
                                <p className="text-muted-foreground leading-loose"
                                    dangerouslySetInnerHTML={{ __html: "We guide Bulgarian nationals interested in investing in Ghana’s growing real estate sector:"}}
                                ></p>
                                <br></br>
                                <ul className="list-disc ml-5 leading-loose">
                                    <li>Commercial property investment (e.g., retail, hospitality, warehousing)</li>
                                    <li>Residential developments (buy-to-let, expat housing)</li>
                                    <li>Legal advisory on land tenure, registration, and property management</li>
                                </ul>
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>
                    )}
                    </Disclosure>
                  </div>

                  <div
                    ref={row41Ref}
                    className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] transition-all duration-800 ${
                        row41Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Image
                      src="/Real-Estate-in-Ghana.webp"
                      alt="Bulgaria Africa Partnership"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  <div
                    ref={row50Ref}
                    className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] transition-all duration-800 ${
                        row50Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Image
                      src="/Visa-Facilitation.jpg"
                      alt="Bulgaria Africa Partnership"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  <div
                  ref={row51Ref}
                    className={`transition-all duration-800 ${
                        row51Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Disclosure defaultOpen>
                    {({ open }) => (
                    <div className="rounded-lg border bg-white">
                    <DisclosureButton
                            className="w-full flex items-center justify-between p-6 text-left
                                    rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-ring"
                        >
                            <span className="font-medium text-base md:text-lg">5. Legal & Immigration Support</span>

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
                                <p className="text-muted-foreground leading-loose"
                                    dangerouslySetInnerHTML={{ __html: "We guide Bulgarian nationals interested in investing in Ghana’s growing real estate sector:"}}
                                ></p>
                                <br></br>
                                <ul className="list-disc ml-5 leading-loose">
                                    <li>Business visa facilitation through our consular desk</li>
                                    <li>Work and residence permit processing for Bulgarian nationals relocating to Ghana</li>
                                    <li>Immigration consulting and compliance advisory</li>
                                </ul>
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>
                    )}
                    </Disclosure>
                  </div>

                  <div
                  ref={row60Ref}
                    className={`transition-all duration-800 ${
                        row60Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Disclosure defaultOpen>
                    {({ open }) => (
                    <div className="rounded-lg border bg-white">
                    <DisclosureButton
                            className="w-full flex items-center justify-between p-6 text-left
                                    rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-ring"
                        >
                            <span className="font-medium text-base md:text-lg">6. Cultural & Academic Collaboration</span>

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
                                <p className="text-muted-foreground leading-loose"
                                    dangerouslySetInnerHTML={{ __html: "We guide Bulgarian nationals interested in investing in Ghana’s growing real estate sector:"}}
                                ></p>
                                <br></br>
                                <ul className="list-disc ml-5 leading-loose">
                                    <li>Support for universities, artists, and cultural institutions in Bulgaria looking to build exchange programs or partnerships with Ghanaian counterparts</li>
                                    <li>Event co-hosting and cultural exhibitions</li>
                                </ul>
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>
                    )}
                    </Disclosure>
                  </div>

                  <div
                    ref={row61Ref}
                    className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] transition-all duration-800 ${
                        row61Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Image
                      src="/AdobeStock_430334400-scaled.jpeg"
                      alt="Bulgaria Africa Partnership"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  <div 
                  ref={row70Ref}
                    className={`relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg aspect-[4/3] transition-all duration-800 ${
                        row70Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Image
                      src="/Axxend-University-Productivity-scaled.webp"
                      alt="Bulgaria Africa Partnership"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  <div
                  ref={row71Ref}
                    className={`transition-all duration-800 ${
                        row71Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Disclosure defaultOpen>
                    {({ open }) => (
                    <div className="rounded-lg border bg-white">
                    <DisclosureButton
                            className="w-full flex items-center justify-between p-6 text-left
                                    rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-ring"
                        >
                            <span className="font-medium text-base md:text-lg">7. Language & Localization Support</span>

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
                                <p className="text-muted-foreground leading-loose"
                                    dangerouslySetInnerHTML={{ __html: "We guide Bulgarian nationals interested in investing in Ghana’s growing real estate sector:"}}
                                ></p>
                                <br></br>
                                <ul className="list-disc ml-5 leading-loose">
                                    <li>Interpretation and translation services (Bulgarian–English–Akan or other local languages)</li>
                                    <li>Local marketing and branding adaptation for Bulgarian products and services entering the Ghanaian market</li>
                                </ul>
                                </div>
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </div>
                    )}
                    </Disclosure>
                  </div>

                </div>
              </div>
            </section>
            <ContactCTA />
        </main>
        <Footer />
    </div>
    )
}