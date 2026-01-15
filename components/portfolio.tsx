 "use client"

import { useState } from "react"
import Image from "next/image"
import { useSiteData } from "@/lib/use-site-data"

export default function Portfolio() {
  const { projects, isLoading } = useSiteData()
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  if (isLoading) {
    return (
      <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-b from-transparent to-muted/20">
        <div className="text-center">
          <div className="text-muted-foreground">Loading portfolio...</div>
        </div>
      </section>
    )
  }

  if (!projects || projects.length === 0) {
    return null
  }

  const categories = ["All", ...new Set(projects.map((p) => p.category || "Uncategorized"))]
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => (p.category || "Uncategorized") === selectedCategory)

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-b from-transparent to-muted/20">
      <div className="text-center mb-8">
        <span className="inline-block px-5 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20 mb-6">
          OUR WORK
        </span>
      </div>
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-center tracking-tight">
        Our Portfolio
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg font-light leading-relaxed">
        Explore our curated selection of unique and stylish residential and commercial design projects
      </p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 ${
              selectedCategory === cat
                ? "gold-gradient text-primary-foreground luxury-shadow-gold"
                : "bg-white text-muted-foreground hover:bg-white/80 hover:text-foreground luxury-shadow border border-border/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          </div>
        ))}
      </div>
    </section>
  )
}
