"use client"

import type { ComponentType } from "react"
import { Home, Building2, Palette, Lightbulb } from "lucide-react"
import { useSiteData } from "@/lib/use-site-data"
import { motion } from "framer-motion"

type IconComponent = ComponentType<{ className?: string }>

const ICON_MAP: Record<string, IconComponent> = {
  Home,
  Building2,
  Palette,
  Lightbulb,
}

const getIcon = (iconName?: string): IconComponent => {
  if (!iconName) return Home
  return ICON_MAP[iconName] || Home
}

export default function Services() {
  const { services, isLoading } = useSiteData()

  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          <div className="text-muted-foreground">Loading services...</div>
        </div>
      </section>
    )
  }

  if (!services || services.length === 0) {
    return null
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-5 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20 mb-6">
          WHAT WE OFFER
        </span>
      </motion.div>
      <motion.h2
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-center tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        What we Do
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg font-light leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Comprehensive interior design services tailored to make your space unique and stylish
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((service) => {
          const Icon = getIcon(service.icon)
          return (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-[#FDF0D5] luxury-shadow rounded-2xl p-8 elegant-border premium-hover relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">{service.title || "Service"}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{service.description || ""}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

