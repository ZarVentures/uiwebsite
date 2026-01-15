"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function JoineryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="relative mb-16 rounded-3xl overflow-hidden luxury-shadow bg-muted">
          <Image
            src="/joinery-hero.jpg.webp"
            alt="Custom Joinery & Bespoke Woodworks"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement
              if (target) {
                target.src = "/placeholder.jpg"
              }
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative px-6 sm:px-10 py-16 sm:py-20 text-center">
            <span className="inline-block px-5 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20 mb-6">
              JOINERY SOLUTIONS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              Custom Joinery & Bespoke Woodworks
            </h1>
            <p className="text-white/90 text-center max-w-3xl mx-auto text-lg font-light leading-relaxed mb-8">
              Precision-crafted woodwork solutions for residential, commercial, retail, and hospitality interiors.
            </p>
            
            {/* Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground rounded-full text-sm font-medium luxury-shadow border border-primary/20">
                Made-to-measure joinery
              </span>
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground rounded-full text-sm font-medium luxury-shadow border border-primary/20">
                In-house manufacturing
              </span>
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground rounded-full text-sm font-medium luxury-shadow border border-primary/20">
                Premium materials & finishes
              </span>
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-foreground rounded-full text-sm font-medium luxury-shadow border border-primary/20">
                End-to-end delivery
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gold-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm tracking-wide hover:opacity-95 transition-all duration-300 hover:scale-105 luxury-shadow-gold"
              >
                Get a Quote
              </a>
              <a
                href="/#portfolio"
                className="inline-flex items-center justify-center bg-white/90 backdrop-blur-sm border-2 border-primary/30 text-foreground px-8 py-3 rounded-lg font-semibold text-sm tracking-wide hover:bg-white hover:border-primary/50 transition-all duration-300 hover:scale-105 luxury-shadow"
              >
                View Our Works
              </a>
            </div>
          </div>
        </section>

        {/* About Joinery Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border mb-12">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              About Joinery
            </h2>
            <div className="w-20 h-1 gold-gradient rounded-full mb-6"></div>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Urban Innovations specializes in custom joinery solutions that combine craftsmanship, modern machinery, and design precision. We design, manufacture, and install bespoke woodwork tailored to each project's functional and aesthetic requirements. Our joinery services are delivered as standalone solutions or integrated into turnkey fit-out projects.
          </p>
        </section>

        {/* Joinery Services Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border mb-12">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Joinery Services
            </h2>
            <div className="w-20 h-1 gold-gradient rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Image Placeholder */}
            <div className="relative h-64 md:h-full rounded-xl overflow-hidden luxury-shadow bg-muted">
              <Image
                src="/joinery-services.jpg.webp.jpg"
                alt="Joinery Services - Custom woodwork and joinery solutions"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  if (target) {
                    target.src = "/placeholder.jpg"
                  }
                }}
              />
            </div>
            <div className="space-y-0">
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Residential Joinery (wardrobes, kitchens, TV units, wall paneling)
                </p>
              </div>
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Commercial & Office Joinery (workstations, desks, storage units)
                </p>
              </div>
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Retail Joinery (display units, shelving, counters)
                </p>
              </div>
            </div>
            <div className="space-y-0">
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Hospitality Joinery (hotel furniture, reception desks, back-of-house joinery)
                </p>
              </div>
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Custom Furniture (made-to-measure cabinets, tables, storage)
                </p>
              </div>
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 flex-shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Doors & Architectural Woodwork
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Materials & Finishes Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border mb-12">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Materials & Finishes
            </h2>
            <div className="w-20 h-1 gold-gradient rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Image Placeholder */}
            <div className="relative h-64 md:h-full rounded-xl overflow-hidden luxury-shadow bg-muted">
              <Image
                src="/materials-finishes.jpg.webp"
                alt="Materials & Finishes - Woodworking materials and finishes"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  if (target) {
                    target.src = "/placeholder.jpg"
                  }
                }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Materials:</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-base font-light">• Natural veneers (Oak, Walnut, Teak, Ash)</p>
                <p className="text-muted-foreground text-base font-light">• Solid wood & engineered wood</p>
                <p className="text-muted-foreground text-base font-light">• Marine plywood, MDF, HDF</p>
                <p className="text-muted-foreground text-base font-light">• Fire-rated & moisture-resistant boards</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Finishes:</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground text-base font-light">• Matte, satin & high-gloss finishes</p>
                <p className="text-muted-foreground text-base font-light">• PU paint (custom colour matching)</p>
                <p className="text-muted-foreground text-base font-light">• Veneer polishing</p>
                <p className="text-muted-foreground text-base font-light">• CNC-routed detailing</p>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* Hardware & Accessories Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border mb-12">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Hardware & Accessories
            </h2>
            <div className="w-20 h-1 gold-gradient rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Image Placeholder */}
            <div className="relative h-48 md:h-[250px] rounded-xl overflow-hidden luxury-shadow bg-muted">
              <Image
                src="/hardware-accessories.jpg.webp.png"
                alt="Hardware & Accessories - Premium cabinet and furniture hardware"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  if (target) {
                    target.src = "/placeholder.jpg"
                  }
                }}
              />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground text-base font-light">• Soft-close hinges & drawer systems</p>
              <p className="text-muted-foreground text-base font-light">• Concealed channels & runners</p>
              <p className="text-muted-foreground text-base font-light">• Premium handles & fittings</p>
              <p className="text-muted-foreground text-base font-light">• Heavy-duty commercial-grade hardware</p>
            </div>
          </div>
        </section>

        {/* Our Joinery Process Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border mb-12">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Our Joinery Process
            </h2>
            <div className="w-20 h-1 gold-gradient rounded-full mb-6"></div>
          </div>
          
          {/* Modern Flow Diagram */}
          <div className="relative">
            {/* Desktop Flow Diagram */}
            <div className="hidden lg:block">
              <div className="flex items-start justify-between relative">
                {/* Connection Lines */}
                <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30" style={{ top: '3rem' }}></div>
                
                {/* Process Steps */}
                <div className="flex-1 flex flex-col items-center relative z-10">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 luxury-shadow" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                    1
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 luxury-shadow text-center max-w-[180px]">
                    <h3 className="font-bold text-foreground text-sm leading-tight">Client brief & site measurement</h3>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="absolute top-12 left-[16.66%] transform translate-x-1/2">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="flex-1 flex flex-col items-center relative z-10">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 luxury-shadow" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                    2
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 luxury-shadow text-center max-w-[180px]">
                    <h3 className="font-bold text-foreground text-sm leading-tight">Design development & material selection</h3>
                  </div>
                </div>
                
                <div className="absolute top-12 left-[33.33%] transform translate-x-1/2">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="flex-1 flex flex-col items-center relative z-10">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 luxury-shadow" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                    3
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 luxury-shadow text-center max-w-[180px]">
                    <h3 className="font-bold text-foreground text-sm leading-tight">Shop drawings & approvals</h3>
                  </div>
                </div>
                
                <div className="absolute top-12 left-[50%] transform translate-x-1/2">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="flex-1 flex flex-col items-center relative z-10">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 luxury-shadow" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
                    4
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 luxury-shadow text-center max-w-[180px]">
                    <h3 className="font-bold text-foreground text-sm leading-tight">In-house manufacturing</h3>
                  </div>
                </div>
                
                <div className="absolute top-12 left-[66.66%] transform translate-x-1/2">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="flex-1 flex flex-col items-center relative z-10">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 luxury-shadow" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                    5
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 luxury-shadow text-center max-w-[180px]">
                    <h3 className="font-bold text-foreground text-sm leading-tight">Finishing & quality inspection</h3>
                  </div>
                </div>
                
                <div className="absolute top-12 left-[83.33%] transform translate-x-1/2">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <div className="flex-1 flex flex-col items-center relative z-10">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 luxury-shadow" style={{ background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' }}>
                    6
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4 luxury-shadow text-center max-w-[180px]">
                    <h3 className="font-bold text-foreground text-sm leading-tight">On-site installation & handover</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet Flow Diagram */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { num: 1, title: "Client brief & site measurement", gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
                  { num: 2, title: "Design development & material selection", gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
                  { num: 3, title: "Shop drawings & approvals", gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
                  { num: 4, title: "In-house manufacturing", gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
                  { num: 5, title: "Finishing & quality inspection", gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
                  { num: 6, title: "On-site installation & handover", gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
                ].map((step, index) => (
                  <div key={step.num} className="flex flex-col items-center relative">
                    {index < 5 && (
                      <div className="absolute top-12 -right-2 z-0">
                        <svg className="w-6 h-6 text-primary rotate-90" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 luxury-shadow z-10" style={{ background: step.gradient }}>
                      {step.num}
                    </div>
                    <div className="bg-muted/50 rounded-xl p-3 luxury-shadow text-center">
                      <h3 className="font-bold text-foreground text-xs leading-tight">{step.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Flow Diagram */}
            <div className="block md:hidden">
              <div className="space-y-6">
                {[
                  { num: 1, title: "Client brief & site measurement", gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
                  { num: 2, title: "Design development & material selection", gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
                  { num: 3, title: "Shop drawings & approvals", gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
                  { num: 4, title: "In-house manufacturing", gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
                  { num: 5, title: "Finishing & quality inspection", gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
                  { num: 6, title: "On-site installation & handover", gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
                ].map((step, index) => (
                  <div key={step.num} className="flex items-center gap-4 relative">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 luxury-shadow" style={{ background: step.gradient }}>
                      {step.num}
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4 luxury-shadow flex-1">
                      <h3 className="font-bold text-foreground text-sm leading-tight">{step.title}</h3>
                    </div>
                    {index < 5 && (
                      <div className="absolute left-8 top-16 z-0">
                        <svg className="w-6 h-6 text-primary rotate-90" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Urban Innovations Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Why Urban Innovations
            </h2>
            <div className="w-20 h-1 gold-gradient rounded-full mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <p className="text-muted-foreground text-base font-light">• In-house joinery manufacturing facility</p>
            <p className="text-muted-foreground text-base font-light">• Skilled carpenters & CNC operators</p>
            <p className="text-muted-foreground text-base font-light">• Seamless fit-out integration</p>
            <p className="text-muted-foreground text-base font-light">• Strict quality control</p>
            <p className="text-muted-foreground text-base font-light">• Competitive pricing</p>
            <p className="text-muted-foreground text-base font-light">• Timely delivery & installation</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

