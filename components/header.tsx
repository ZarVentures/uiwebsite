"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Quality and Safety Policy", href: "/quality-safety" },
    { name: "Services", href: "/services" },
    { name: "Joinery", href: "/joinery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
<<<<<<< HEAD
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md luxury-shadow py-1" : "bg-white/80 backdrop-blur-sm py-2"
      } border-b border-border/50`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 transition-all duration-300">
              <Image
                src="/urban-innovation-logo.png"
                alt="Urban Innovation logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold gold-text tracking-tight leading-tight">
                Urban Innovation
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-foreground/70 tracking-wide mt-0.5 uppercase">
                Innovating Urban Space
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link href={link.href} className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
=======
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
          <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-base tracking-wide relative group">
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
              <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors font-medium text-base">
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
>>>>>>> aec7d40ea82ec27f482698c59aef89f77ae5a0c6
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-59 md:hidden"
                style={{ top: '100%' }}
              />
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[60] md:hidden luxury-shadow p-8 flex flex-col gap-6 overflow-y-auto"
                style={{ height: '100vh', position: 'fixed' }}
              >
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold gold-text">Menu</span>
                  <button onClick={() => setIsOpen(false)} className="p-2">
                    <X size={24} />
                  </button>
                </div>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-foreground hover:text-primary transition-colors font-bold text-xl tracking-tight block py-2 border-b border-border/30"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-auto pt-10 text-center">
                  <p className="text-sm text-muted-foreground font-light mb-4">Innovating Urban Space</p>
                  <div className="h-0.5 w-12 bg-primary mx-auto" />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

