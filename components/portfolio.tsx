"use client"

import { useState } from "react"
import Image from "next/image"
import { useSiteData } from "@/lib/use-site-data"
import { motion, AnimatePresence } from "framer-motion"

export default function Portfolio() {
  const { projects, isLoading } = useSiteData()
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  if (isLoading) {
    return (
      <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-linear-to-b from-transparent to-muted/20">
        <div className="text-center">
          <div className="text-muted-foreground">Loading portfolio...</div>
        </div>
      </section>
    )
  }

  if (!projects || projects.length === 0) {
    return null
  }

  // Fixed category order: All, Residential, F&B & Retail, Commercial
  const categoryOrder = ["All", "Residential", "F&B & Retail", "Commercial"]
  
  // Show all categories in the fixed order, even if some don't have projects yet
  const categories = categoryOrder
  
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : selectedCategory === "F&B & Retail"
      ? projects.filter((p) => {
          const category = p.category || "Uncategorized"
          return category === "F&B" || category === "Retail"
        })
      : projects.filter((p) => (p.category || "Uncategorized") === selectedCategory)

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-linear-to-b from-transparent to-muted/20">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-5 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20 mb-6">
          OUR WORK
        </span>
      </motion.div>
      <motion.h2
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-center tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Our Portfolio
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg font-light leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Explore our curated selection of unique and stylish residential and commercial design projects
      </motion.p>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 relative ${selectedCategory === cat
              ? "text-primary-foreground"
              : "bg-white text-muted-foreground hover:bg-white/80 hover:text-foreground luxury-shadow border border-border/50"
              }`}
          >
            {selectedCategory === cat && (
              <motion.div
                layoutId="category-pill"
                className="absolute inset-0 gold-gradient rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      {selectedCategory === "All" ? (
        /* All: Images Only - 4 columns with smaller images */
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] p-8"
              >
                <Image
                  src={project.image || "/placeholder.jpg"}
                  alt={project.title || "Project image"}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    if (target) {
                      target.src = "/placeholder.jpg"
                    }
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : selectedCategory === "Residential" || selectedCategory === "Commercial" || selectedCategory === "F&B & Retail" ? (
        /* Residential, Commercial, F&B & Retail: Images Only - 3 columns */
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] p-12"
              >
                <Image
                  src={project.image || "/placeholder.jpg"}
                  alt={project.title || "Project image"}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    if (target) {
                      target.src = "/placeholder.jpg"
                    }
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Other Categories: Full Card Layout */
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden luxury-shadow premium-hover relative"
              >
                <div className="relative h-80 bg-muted overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title || "Project image"}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      if (target) {
                        target.src = "/placeholder.jpg"
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-light">{project.description}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground pt-4 border-t border-border/50">
                    <span className="font-medium">{project.location}</span>
                    <span>
                      {new Date(project.completionDate).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  )
}

