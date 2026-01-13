"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20 mb-6">
            OUR SERVICES
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-center tracking-tight">
            Our Services
          </h1>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto text-lg font-light leading-relaxed">
            Comprehensive technical and interior design services delivered with precision and excellence
          </p>
        </div>

        {/* Service 1 Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border mb-12">
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">
              Service 1
            </h2>
            <div className="w-20 h-1 gold-gradient rounded-full"></div>
          </div>

          <div className="space-y-0">
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                False Ceiling & Light Partition Installation
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Air-Conditioning, Ventilation & Air Filtration Systems Installation & Maintenance
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Office Furniture Manufacturing
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Painting Contracting
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Home Furniture Manufacturing
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Carpentry & Wood Flooring Works
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Floor and Wall Tiling Works
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Interior Decoration
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Plaster Works
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Building Cleaning Services
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Wallpaper Fixing Works
              </p>
            </div>
          </div>
        </section>

        {/* Service 2 Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border">
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">
              Service 2
            </h2>
            <div className="w-20 h-1 gold-gradient rounded-full"></div>
          </div>

          <div className="space-y-0">
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Air-Conditioning, Ventilation & Air Filtration Systems Installation & Maintenance
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Electromechanical Equipment Installation and Maintenance
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Steel Constructions Contracting
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Building Contracting
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Interior Decoration
              </p>
            </div>
            <div className="flex items-start gap-3 py-0.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
              <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">–</span>
              <p className="text-muted-foreground text-lg font-light leading-none">
                Electrical Fitting Contracting
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

