"use client"

import Image from "next/image"

export default function QualitySafetyPage() {
  return (
    <div className="bg-linear-to-b from-background via-background to-muted/10">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="relative mb-16 rounded-3xl overflow-hidden luxury-shadow bg-muted">
          <Image
            src="/quality-safety-hero.jpg"
            alt="Quality and Safety Policy"
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
              QUALITY & SAFETY
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
              Quality and Safety Policy
            </h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-6">
                At Urban Innovation Technical Services LLC, we are committed to upholding the highest standards of health, safety, and welfare across all our operations. Our aim is to ensure a safe working environment for our staff, operatives, and all those affected by our activities. Every task is carried out in line with carefully developed, site-specific method statements and risk assessments.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-6">
                Working regularly in sensitive and controlled environments, we take the utmost care in every aspect of our operations. We encourage all team members to take responsibility for maintaining health, safety, and environmental standards, supported by comprehensive information, training, and appropriate supervision. Strict adherence to established procedures is required of everyone.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-6">
                We maintain and utilize our own mobile aluminum scaffolding, ensuring reliability and compliance on-site. Additionally, our commitment to cleanliness and organization is reflected in daily housekeeping at the end of each workday. Our policy is reviewed and updated regularly to ensure its effectiveness and relevance.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                Health, safety, and environmental awareness are fundamental to our business, with management and the workforce working together to uphold these essential values.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border">
          <div className="mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center tracking-tight">
              Our Values
            </h2>
            <div className="w-20 h-1 gold-gradient rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value 1 */}
            <div className="bg-linear-to-br from-primary/5 to-transparent luxury-shadow rounded-2xl p-8 elegant-border hover:from-primary/10 transition-all duration-300 premium-hover">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-bold text-primary shrink-0">01</span>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">Integrity</h3>
              </div>
              <p className="text-muted-foreground text-lg font-light leading-relaxed ml-14">
                We operate with honesty and transparency, ensuring trust at every step with clients and partners.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-linear-to-br from-primary/5 to-transparent luxury-shadow rounded-2xl p-8 elegant-border hover:from-primary/10 transition-all duration-300 premium-hover">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-bold text-primary shrink-0">02</span>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">Attention to Details</h3>
              </div>
              <p className="text-muted-foreground text-lg font-light leading-relaxed ml-14">
                Every element of our work is deliberate, precise, and executed to meet the highest standards.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-linear-to-br from-primary/5 to-transparent luxury-shadow rounded-2xl p-8 elegant-border hover:from-primary/10 transition-all duration-300 premium-hover">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-bold text-primary shrink-0">03</span>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">Agility</h3>
              </div>
              <p className="text-muted-foreground text-lg font-light leading-relaxed ml-14">
                We adapt quickly to changing needs and challenges, delivering efficient, on-time, and on-budget solutions.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-linear-to-br from-primary/5 to-transparent luxury-shadow rounded-2xl p-8 elegant-border hover:from-primary/10 transition-all duration-300 premium-hover">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl font-bold text-primary shrink-0">04</span>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">Resilience</h3>
              </div>
              <p className="text-muted-foreground text-lg font-light leading-relaxed ml-14">
                With 15 years of managed experience, we build spaces that last—strong, purposeful, and built to endure.
              </p>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

