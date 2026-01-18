"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSiteData } from "@/lib/use-site-data"
import { motion, AnimatePresence } from "framer-motion"

const heroImages = [
  "/hero-luxury-living.png",
  "/hero-bespoke-kitchen.png",
  "/hero-minimalist-office.png",
  "/modern-minimalist-apartment-interior.jpg",
  "/services-hero.jpg"
]

export default function Hero() {
  const { hero, isLoading } = useSiteData()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  // Handle loading state
  if (isLoading || !hero) {
    return (
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
        <div className="text-center">
          <div className="text-white">Loading...</div>
        </div>
      </section>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } as const

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden isolate">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt={`Urban Innovation - Premium Design ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Animated Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/60 z-1" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 pb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {hero.badge && (
          <motion.div className="mb-8" variants={itemVariants}>
            <span className="inline-block px-6 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20">
              {hero.badge}
            </span>
          </motion.div>
        )}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 text-balance leading-[1.1] tracking-tight"
          variants={itemVariants}
        >
          {hero.title || "LET YOUR HOME BE"}
          <br />
          <motion.span
            className="gold-text font-extrabold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {hero.titleHighlight || "UNIQUE AND STYLISH"}
          </motion.span>
        </motion.h1>
        {hero.subtitle && (
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto text-balance font-light leading-relaxed"
            variants={itemVariants}
          >
            {hero.subtitle}
          </motion.p>
        )}
        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          variants={itemVariants}
        >
          {hero.primaryButtonText && (
            <motion.a
              href={hero.primaryButtonLink || "#portfolio"}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gold-gradient text-primary-foreground px-12 py-5 rounded-lg font-semibold text-base tracking-wide hover:opacity-95 transition-all duration-300 luxury-shadow-gold"
            >
              {hero.primaryButtonText}
            </motion.a>
          )}
          {hero.secondaryButtonText && (
            <motion.a
              href={hero.secondaryButtonLink === "#contact" ? "/contact" : (hero.secondaryButtonLink || "/contact")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center bg-white/90 backdrop-blur-sm border-2 border-primary/30 text-foreground px-12 py-5 rounded-lg font-semibold text-base tracking-wide hover:bg-white hover:border-primary/50 transition-all duration-300 luxury-shadow"
            >
              {hero.secondaryButtonText}
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}

