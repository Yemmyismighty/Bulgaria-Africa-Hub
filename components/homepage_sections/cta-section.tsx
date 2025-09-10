"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Link from "next/link";


export function CTASection() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()
    return (
        <section className="flex justify-center px-4 py-20 bg-background">
        <div
        ref={headerRef}
        className={`relative flex flex-col md:flex-row items-center justify-between bg-[#1D1F1E] text-white rounded-2xl p-10 md:p-16 w-full max-w-6xl overflow-hidden transition-all duration-800 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        >
            
            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-40 h-40 opacity-30 pointer-events-none">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className="w-full h-full"
            >
                <path
                d="M0,200 Q100,100 200,200"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                />
                <path
                d="M0,180 Q100,80 200,180"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                />
            </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-40 h-40 opacity-30 pointer-events-none rotate-180">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className="w-full h-full"
            >
                <path
                d="M0,200 Q100,100 200,200"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                />
                <path
                d="M0,180 Q100,80 200,180"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                />
            </svg>
            </div>

            {/* Left Side */}
            <div className="md:w-1/2 space-y-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Discover New <br />
                <span className="relative inline-block">
                Opportunities
                <span className="absolute left-0 bottom-0 w-full h-1 bg-emerald-400 rounded-full translate-y-2"></span>
                </span>
            </h2>
            <p className="text-gray-300 text-lg">
                Whether you’re looking to expand your horizons, grow your
                business, or explore new destinations, Bulgaria Africa Hub is here
                to help you take that next big step.
            </p>
            <Link href="/contact-us" passHref legacyBehavior>
                <Button className="bg-white border-foreground text-foreground hover:bg-primary hover:text-primary-foreground transition">
                    Get started
                </Button>
            </Link>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative z-10">
            <div className="bg-white rounded-xl shadow-lg">
                <Image
                src="/image-SZ2WRKJ.png"
                alt="Business team"
                width={400}
                height={300}
                className="rounded-lg object-cover"
                />
            </div>
            </div>
        </div>
        </section>
    );
}
