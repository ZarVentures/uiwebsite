"use client"

import { useSiteData } from "@/lib/use-site-data"

export default function Hero() {
  const { hero, isLoading } = useSiteData()

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

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0f172a' }}>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {hero.badge && (
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-6 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20">
              {hero.badge}
            </span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 text-balance leading-[1.1] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' } as React.CSSProperties}>
          {hero.title || "LET YOUR HOME BE"}
          <br />
          <span className="gold-text font-extrabold">
            {hero.titleHighlight || "UNIQUE AND STYLISH"}
          </span>
        </h1>
        {hero.subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto text-balance font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' } as React.CSSProperties}>
            {hero.subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' } as React.CSSProperties}>
          {hero.primaryButtonText && (
            <a href={hero.primaryButtonLink || "#portfolio"} className="group inline-block">
              <button className="gold-gradient text-primary-foreground px-12 py-5 rounded-lg font-semibold text-base tracking-wide hover:opacity-95 transition-all duration-300 hover:scale-105 luxury-shadow-gold group-hover:shadow-xl">
                {hero.primaryButtonText}
              </button>
            </a>
          )}
          {hero.secondaryButtonText && (
            <a href={hero.secondaryButtonLink || "#contact"} className="group inline-block">
              <button className="bg-white/90 backdrop-blur-sm border-2 border-primary/30 text-foreground px-12 py-5 rounded-lg font-semibold text-base tracking-wide hover:bg-white hover:border-primary/50 transition-all duration-300 hover:scale-105 luxury-shadow group-hover:shadow-xl">
                {hero.secondaryButtonText}
              </button>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
