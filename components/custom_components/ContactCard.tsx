// custom_components/ContactCTA.tsx
"use client";

import Image from "next/image";
import React from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ContactCTA() {
  const { ref: contactRef, isVisible: contactVisible } = useScrollReveal<HTMLDivElement>()
  return (
    <section className="py-16">
      <div
        ref={contactRef}
        className={`max-w-7xl mx-auto px-6 transition-all duration-800 ${
          contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Dark rounded wrapper */}
        <div className="relative bg-[#1D1F1E] text-white rounded-2xl overflow-hidden p-10 md:p-16">
          {/* Decorative SVG top-left */}
          <div className="absolute -top-12 -left-12 w-48 h-48 opacity-20 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.9">
                <path d="M0,140 C40,90 80,90 120,140" />
                <path d="M0,160 C40,110 80,110 120,160" />
                <path d="M0,120 C40,70 80,70 120,120" />
              </g>
            </svg>
          </div>

          {/* Decorative SVG bottom-right */}
          <div className="absolute -bottom-12 -right-12 w-72 h-72 opacity-20 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <g fill="none" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.9">
                <path d="M0,140 C40,90 80,90 120,140" />
                <path d="M0,160 C40,110 80,110 120,160" />
                <path d="M0,120 C40,70 80,70 120,120" />
              </g>
            </svg>
          </div>

          {/* Two-column content */}
          <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-8 items-center">
            {/* Left: heading + paragraph */}
            <div className="max-w-xl ">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Discover New <br />
                <span className="inline-block">Opportunities</span>
              </h2>
              <span className="inline-block w-60 h-1 bg-emerald-400 rounded-full" />

              <p className="mt-6 text-gray-300 leading-relaxed">
                Whether you’re looking to expand your horizons, grow your business, or explore new
                destinations, Bulgaria Africa Hub is here to help you take that next big step.
              </p>
            </div>

            {/* Right: the light card that contains the form */}
            <div className="flex justify-end lg:justify-center">
              <div className="w-full max-w-md bg-gray-100 text-gray-900 rounded-lg p-6 md:p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">How can we help?</h3>

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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      aria-label="Phone number"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full rounded-md border border-gray-200 px-3 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white"
                    />
                    <select
                      aria-label="Service"
                      name="service"
                      className="w-full rounded-md border border-gray-200 px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-300"
                    >
                      <option>Select a Service</option>
                      <option>Explore Opportunities in West Africa</option>
                      <option>Study in Bulgaria</option>
                      <option>Tour in Bulgaria</option>
                      <option>Work and Invest in Bulgaria</option>
                    </select>
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

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-block bg-black text-white rounded-md px-6 py-2.5 hover:opacity-95 transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> {/* container */}
    </section>
  );
}
