"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"


const navLinks = [ 
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    label: "Our Services",
    children: [
      { href: "/exploring-opportunities-in-west-africa", label: "Explore Opportunities in West Africa" },
      { href: "/study-in-bulgaria", label: "Study in Bulgaria" },
      { href: "/tourism-in-bulgaria", label: "Tourism in Bulgaria" },
      { href: "/work-in-bulgaria", label: "Work and Invest in Bulgaria" },
    ],
  },
  { href: "/faqs", label: "FAQs" },
  { href: "/our-team", label: "Our Team" },
  { href: "/applications", label: "Applications" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/Bulgaria-Africa-Hub-main-logo.png"
              alt="Bulgaria Africa Hub Logo"
              width={200}
              height={150}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.children ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors">
                    {link.label}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link
                          href={child.href}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact-us" passHref legacyBehavior>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation (Sheet) */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-6">
                    <Image
                      src="/Bulgaria-Africa-Hub-main-logo.png"
                      alt="Bulgaria Africa Hub Logo"
                      width={160}
                      height={100}
                    />
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) =>
                      link.children ? (
                        <Accordion key={link.label} type="single" collapsible>
                          <AccordionItem value={link.label}>
                            <AccordionTrigger>{link.label}</AccordionTrigger>
                            <AccordionContent>
                              <div className="flex flex-col space-y-2 pl-4">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="px-3 py-1 rounded-full text-foreground hover:text-primary transition"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                    <Link href="/contact-us" passHref legacyBehavior>
                      <Button
                        className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
