"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function JoineryPage() {
  const steps = [
    { num: 1, title: "Client brief & site measurement", gradient: "from-[#4F46E5] to-[#7C3AED]" },
    { num: 2, title: "Design development & selection", gradient: "from-[#EC4899] to-[#F43F5E]" },
    { num: 3, title: "Shop drawings & approvals", gradient: "from-[#06B6D4] to-[#3B82F6]" },
    { num: 4, title: "In-house manufacturing", gradient: "from-[#10B981] to-[#34D399]" },
    { num: 5, title: "Finishing & quality inspection", gradient: "from-[#F59E0B] to-[#EF4444]" },
    { num: 6, title: "On-site installation & handover", gradient: "from-[#F43F5E] to-[#FB7185]" }
  ];

  return (
    <div className="bg-linear-to-b from-background via-background to-muted/10">

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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gold-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm tracking-wide hover:opacity-95 transition-all duration-300 hover:scale-105 luxury-shadow-gold"
              >
                Get a Quote
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center bg-white/90 backdrop-blur-sm border-2 border-primary/30 text-foreground px-8 py-3 rounded-lg font-semibold text-sm tracking-wide hover:bg-white hover:border-primary/50 transition-all duration-300 hover:scale-105 luxury-shadow"
              >
                View Our Works
              </Link>
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
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-linear-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Residential Joinery (wardrobes, kitchens, TV units, wall paneling)
                </p>
              </div>
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-linear-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Commercial & Office Joinery (workstations, desks, storage units)
                </p>
              </div>
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-linear-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Retail Joinery (display units, shelving, counters)
                </p>
              </div>
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-linear-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Hospitality Joinery (hotel furniture, reception desks, back-of-house joinery)
                </p>
              </div>
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-linear-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 shrink-0">•</span>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  Custom Furniture (made-to-measure cabinets, tables, storage)
                </p>
              </div>
              <div className="flex items-start gap-3 py-2 px-2 rounded-xl hover:bg-linear-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300">
                <span className="text-primary font-bold text-lg mt-0 shrink-0">•</span>
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
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border mb-12 overflow-hidden">
          <div className="mb-12 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Our Joinery Process
            </h2>
            <div className="w-24 h-1 gold-gradient rounded-full mb-6 mx-auto sm:mx-0"></div>
          </div>

          <div className="relative">
            {/* Desktop Flow Diagram */}
            <div className="hidden lg:block relative">
              <div className="flex items-start justify-between relative z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex-1 flex flex-col items-center group relative"
                  >
                    {/* Circle */}
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 luxury-shadow relative z-20 bg-linear-to-br ${step.gradient}`}
                    >
                      {step.num}
                    </motion.div>

                    {/* Arrow - Self Animating */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: (index * 0.1) + 0.3,
                          ease: "easeOut"
                        }}
                        className="absolute top-12 left-[calc(50%+48px)] w-[calc(100%-96px)] flex justify-center -translate-y-1/2 z-10"
                      >
                        <svg className="w-6 h-6 text-primary/40 group-hover:text-primary transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </motion.div>
                    )}

                    {/* Card */}
                    <div className="bg-white luxury-shadow rounded-xl p-4 text-center w-[160px] elegant-border h-24 flex items-center justify-center group-hover:bg-primary/5 transition-all duration-300">
                      <h3 className="font-bold text-foreground text-sm leading-tight group-hover:text-primary">
                        {step.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tablet Flow Diagram */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-3 gap-y-12 gap-x-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 luxury-shadow bg-linear-to-br ${step.gradient}`}>
                      {step.num}
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4 luxury-shadow text-center w-full h-20 flex items-center justify-center">
                      <h3 className="font-bold text-foreground text-xs leading-tight">{step.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Flow Diagram */}
            <div className="block md:hidden">
              <div className="space-y-8 relative">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-6 relative"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xl shrink-0 luxury-shadow relative z-10 bg-linear-to-br ${step.gradient}`}>
                      {step.num}
                    </div>
                    <div className="bg-white luxury-shadow rounded-xl p-5 flex-1 elegant-border">
                      <h3 className="font-bold text-foreground text-sm leading-tight">{step.title}</h3>
                    </div>
                  </motion.div>
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

    </div>
  )
}
