"use client"

import { useState } from "react"
import { useSiteData } from "@/lib/use-site-data"
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { toast } from "sonner"

export default function Contact() {
  const { content, isLoading } = useSiteData()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectTitle: formData.get("projectTitle"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.")
          ; (e.target as HTMLFormElement).reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading || !content) {
    return (
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="text-muted-foreground">Loading contact information...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center mb-8">
        <span className="inline-block px-5 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20 mb-6">
          CONTACT US
        </span>
      </div>
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-center tracking-tight">
        Get In Touch
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg font-light leading-relaxed">
        Let's discuss how we can transform your space into something extraordinary
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col items-center text-center group premium-hover">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-10 h-10 text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-3 text-lg">Email</h3>
          <a
            href={`mailto:${content?.email || ""}`}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
          >
            {content?.email || ""}
          </a>
        </div>
        <div className="flex flex-col items-center text-center group premium-hover">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Phone className="w-10 h-10 text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-3 text-lg">Phone</h3>
          <a
            href={`tel:${content?.phone || ""}`}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 font-light"
          >
            {content?.phone || ""}
          </a>
        </div>
        <div className="flex flex-col items-center text-center group premium-hover">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-10 h-10 text-primary" />
          </div>
          <h3 className="font-bold text-foreground mb-3 text-lg">Address</h3>
          <p className="text-muted-foreground font-light leading-relaxed">{content?.address || ""}</p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white luxury-shadow rounded-2xl p-10 elegant-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
            required
            disabled={isSubmitting}
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
            required
            disabled={isSubmitting}
          />
        </div>
        <input
          name="projectTitle"
          type="text"
          placeholder="Project Title"
          className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 mb-6 font-light"
          required
          disabled={isSubmitting}
        />
        <textarea
          name="message"
          placeholder="Tell us about your project..."
          rows={6}
          className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 mb-8 font-light resize-none"
          required
          disabled={isSubmitting}
        ></textarea>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full gold-gradient text-primary-foreground py-4 rounded-xl font-semibold tracking-wide hover:opacity-95 transition-all duration-300 luxury-shadow-gold hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </section>
  )
}

