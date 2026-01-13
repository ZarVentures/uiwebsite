"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20 mb-6">
            CONTACT US
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-center tracking-tight">
            Get In Touch
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Address and Logo */}
          <div className="space-y-8">
            {/* Address Section */}
            <div className="bg-white luxury-shadow rounded-2xl p-10 elegant-border">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Head Office Address
              </h2>
              <div className="space-y-1">
                <p className="text-muted-foreground text-lg font-light leading-tight">
                  129-Port Saeed Tower
                </p>
                <p className="text-muted-foreground text-lg font-light leading-tight">
                  Deira
                </p>
                <p className="text-muted-foreground text-lg font-light leading-tight">
                  Dubai, UAE
                </p>
              </div>
            </div>

            {/* Logo Section */}
            <div className="bg-white luxury-shadow rounded-2xl p-10 elegant-border flex items-center justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/urban-innovation-logo.png"
                  alt="Urban Innovation Logo"
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target) {
                      target.src = "/placeholder.svg";
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white luxury-shadow rounded-2xl p-10 elegant-border">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Write to us
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full px-5 py-4 rounded-xl bg-muted/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-light resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-primary-foreground py-4 rounded-xl font-semibold tracking-wide hover:opacity-95 transition-all duration-300 luxury-shadow-gold hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

