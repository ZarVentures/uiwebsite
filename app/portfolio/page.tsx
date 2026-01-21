"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Under Construction Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-6">
                <span className="text-4xl">🚧</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Portfolio Page
            </h1>
            <div className="w-20 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-8">
              This page is currently under construction. We're working hard to bring you an amazing showcase of our projects. 
              In the meantime, please feel free to contact us for more information about our work.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

