"use client";

import { useState } from "react";
import Image from "next/image";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Link from "next/link";

const faqs = [
  {
    q: "What services does Bulgaria Africa Hub offer?",
    a: "We provide end-to-end services in four key areas: <strong>Education, Trade & Investment, Skilled Work Placement, and Tourism</strong>. Whether you're looking to study, do business, find employment, or explore Bulgaria, we're your trusted partner every step of the way.",
  },
  {
    q: "Why should I consider studying in Bulgaria?",
    a: "Bulgaria offers <strong>affordable tuition, English-taught programs</strong>, and <strong>globally recognized degrees</strong>. As an EU country, it also offers <strong>visa-free travel across Europe</strong> and potential pathways to <strong>residency or citizenship</strong> after graduation—all at a fraction of the cost of Western Europe.",
  },
  {
    q: "Can international students work while studying in Bulgaria?",
    a: "Yes. International students in Bulgaria are legally allowed to <strong>work part-time during their studies</strong>, which helps support living expenses and gain valuable experience.",
  },
  {
    q: "What's a Trade Representative Office and how can it benefit my business?",
    a: "A <strong>Trade Representative Office (TRO)</strong> lets your Ghanaian or African business legally establish a <strong>non-commercial presence in Bulgaria</strong>. You can <strong>appoint up to three representatives</strong>, gain residency rights, explore EU markets, attend trade events, and promote your services across Europe.",
  },
  {
    q: "Does Bulgaria Africa Hub assist with visa applications?",
    a: "Absolutely. We <strong>provide professional visa support services</strong> for students, skilled workers, businesspeople, and tourists—ensuring your documentation is complete, compliant, and submitted on time.",
  },
];

export function FAQSection() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal()

  return (
    <section
      ref={headerRef}
      className={`py-20 transition-all duration-800 ${
        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* header row */}
        <div className="flex items-start justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl text-center md:text-4xl font-bold">Your Common Queries Answered</h2>
          </div>

          {/* Ask button (floats right on wide screens) */}
          <div className="hidden md:block">
            <Link href="/contact-us" passHref legacyBehavior>
              <button
                type="button"
                className="inline-flex items-center px-5 py-2.5 rounded-md bg-black text-white hover:bg-primary hover:text-primary-foreground transition"
              >
                Ask a question
              </button>
            </Link>
          </div>
        </div>

        {/* two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* FAQ list */}
            <div>
                {/* show ask button on mobile below faqs */}
                <div className="mt-6 py-4 md:hidden flex">
                  <Link href="/contact-us" passHref legacyBehavior>
                    <button className="mx-auto px-6 py-4 rounded-md bg-black text-white hover:bg-primary hover:text-primary-foreground transition">
                        Ask a question
                    </button>
                  </Link>
                </div>

                <div className="space-y-4">
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

          {/* Right image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/image1-ER6FH6H.jpg"
                alt="support agent"
                width={900}
                height={1200}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
