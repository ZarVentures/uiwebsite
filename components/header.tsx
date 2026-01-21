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
    { name: "Portfolio", href: "/portfolio" },
    { name: "Quality and Safety Policy", href: "/quality-safety" },
    { name: "Services", href: "/services" },
    { name: "Joinery", href: "/joinery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md luxury-shadow py-1"
          : "bg-white/80 backdrop-blur-sm py-2"
      } border-b border-border/50`}
    >
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
              <Link
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-base tracking-wide relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
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
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
              />
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[60] md:hidden luxury-shadow p-8 flex flex-col gap-6 overflow-y-auto"
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
                  <p className="text-sm text-muted-foreground font-light mb-4">
                    Innovating Urban Space
                  </p>
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


