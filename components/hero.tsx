"use client"

import { useSiteData } from "@/lib/use-site-data"

export default function Hero() {
  const { hero, isLoading } = useSiteData()

  // Handle loading state
  if (isLoading || !hero) {
    return (
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF8F3] via-[#F5F1E8] to-[#F0ECE0]">
        <div className="text-center">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF8F3] via-[#F5F1E8] to-[#F0ECE0]">
      {hero.backgroundImage && (
        <img
          src={hero.backgroundImage}
          alt=""
          className="hero-background absolute inset-0 w-full h-full object-cover object-center"
        />
      )}
      {!hero.backgroundImage && (
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-br from-accent/8 to-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' } as React.CSSProperties}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-secondary/6 to-primary/4 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '0.5s' } as React.CSSProperties}></div>
        </div>
      )}
      {hero.backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
      )}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {hero.badge && (
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-6 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20">
              {hero.badge}
            </span>
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 text-balance leading-[1.1] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' } as React.CSSProperties}>
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
