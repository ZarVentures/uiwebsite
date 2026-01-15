"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50 luxury-shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 sm:py-1 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="relative h-20 w-20 sm:h-24 sm:w-24">
            <Image
              src="/urban-innovation-logo.png"
              alt="Urban Innovation logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold gold-text tracking-tight leading-tight">
              Urban Innovation
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-foreground/70 tracking-wide mt-0.5">
              Innovating Urban Space
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-base tracking-wide relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-base tracking-wide relative group">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-base tracking-wide relative group">
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/quality-safety" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-base tracking-wide relative group">
            Quality and Safety Policy
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/services" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-base tracking-wide relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/joinery" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-base tracking-wide relative group">
            Joinery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-base tracking-wide relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-border md:hidden luxury-shadow">
            <div className="flex flex-col gap-4 p-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium text-base">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium text-base">
                About Us
              </Link>
              <Link href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium text-base">
                Portfolio
              </Link>
              <Link href="/quality-safety" className="text-foreground hover:text-primary transition-colors font-medium text-base">
                Quality and Safety Policy
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium text-base">
                Services
              </Link>
              <Link href="/joinery" className="text-foreground hover:text-primary transition-colors font-medium text-base">
                Joinery
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium text-base">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
