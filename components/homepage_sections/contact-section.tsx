"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ContactSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const { ref: contactRef, isVisible: contactVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // We'll handle form submission here later
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to explore opportunities? Contact us to discuss partnerships and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card
            ref={formRef}
            className={`bg-background border-border transition-all duration-800 ${
              formVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="bg-input border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-input border-border"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div
            ref={contactRef}
            className={`space-y-8 transition-all duration-800 delay-200 ${
              contactVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: ["info@bulgariaafricahub.com", "partnerships@bulgariaafricahub.com"],
                delay: "delay-0",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: ["+359 2 123 4567", "+359 2 765 4321"],
                delay: "delay-200",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: ["123 Vitosha Boulevard", "Sofia 1000, Bulgaria"],
                delay: "delay-400",
              },
            ].map((contact, index) => (
              <Card
                key={index}
                className={`bg-background border-border transition-all duration-800 ${contact.delay} ${
                  contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{contact.title}</h3>
                      {contact.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-muted-foreground">
                          {line}
                          {lineIndex === 0 && contact.title === "Visit Us" && <br />}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
