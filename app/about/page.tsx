"use client"

import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-linear-to-b from-background via-background to-muted/10">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="relative mb-16 rounded-3xl overflow-hidden luxury-shadow bg-muted">
          <Image
            src="/about-hero.jpg"
            alt="Urban Innovation design team at work"
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
              ABOUT US
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight">
              About Urban Innovation
            </h1>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-6">
              Urban Innovation is a leading Technical Service firm, known for its precise, quality-driven approach to build, fit-out, and project execution. Since our establishment from early in Dubai we have expanded our operations across the sectors in UAE and India delivering exceptional results across a variety of sectors.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-6">
              From commercial and luxury hospitality to residential projects, we partner with clients to bring their visions to life.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-8">
              Operating from our state-of-the-art headquarters in Dubai, full machinery Joinery setup in Ajman, and backed by a highly skilled team of over professionals, we manage every stage of construction with meticulous attention to detail. From concept through to completion, we ensure that each project is executed with the highest level of precision, quality, and care.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight mt-12">
              Our Expertise
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-6">
              Our expertise spans a wide range of sectors, including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 list-none">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground text-lg font-light">Commercial offices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground text-lg font-light">Hotels and luxury hospitality spaces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground text-lg font-light">High-end residential villas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground text-lg font-light">Restaurants, clubs, and bars</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground text-lg font-light">Retail outlets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground text-lg font-light">Healthcare facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground text-lg font-light">Educational institutions</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Why Urban Innovation Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
            WHY URBAN INNOVATION?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-4">
                With over years of expertise, Urban Innovation has earned a reputation for delivering outstanding projects. Our extensive portfolio enables us to develop tailored solutions for each project, addressing the unique goals and challenges of every client.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-4">
                As a full-service build partner, we manage every stage—from initial planning to final handover—ensuring a smooth and effective process delivering Projects across residential, commercial, retail, and F&B.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                We believe that the small details matter just as much as the bigger picture, and it's this focus that guarantees the highest level of craftsmanship in everything we do.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden luxury-shadow bg-muted">
              <Image
                src="/about-why-urban.jpg.png"
                alt="Urban Innovation expertise"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target) {
                    target.src = "/placeholder.jpg";
                  }
                }}
              />
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight mt-12">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-linear-to-br from-primary/5 to-transparent">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-muted-foreground text-lg font-light">15+ years of Dubai industry experience</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-linear-to-br from-primary/5 to-transparent">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-muted-foreground text-lg font-light">End-to-end project handling</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-linear-to-br from-primary/5 to-transparent">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-muted-foreground text-lg font-light">Skilled and experienced technical team</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-linear-to-br from-primary/5 to-transparent">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-muted-foreground text-lg font-light">Quality workmanship with premium materials</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-linear-to-br from-primary/5 to-transparent">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-muted-foreground text-lg font-light">Transparent pricing & clear communication</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-linear-to-br from-primary/5 to-transparent">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-muted-foreground text-lg font-light">On-time project delivery</span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-linear-to-br from-primary/5 to-transparent">
              <span className="text-primary mt-1 font-bold">•</span>
              <span className="text-muted-foreground text-lg font-light">Customized solutions for all interior requirements</span>
            </div>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden luxury-shadow mt-8 bg-muted">
            <Image
              src="/about-why-choose.jpg.png"
              alt="Why choose Urban Innovation"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target) {
                  target.src = "/placeholder.jpg";
                }
              }}
            />
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed font-light mt-8">
            We also understand the importance of delivering on time. Our streamlined processes and proactive approach ensure that projects are completed within schedule, without compromising on quality. When you choose Urban Innovation you are choosing a trusted partner committed to creating space that inspire, perform and stand the test of time.
          </p>
        </section>

        {/* Locations Section */}
        <section className="bg-white luxury-shadow rounded-2xl p-10 elegant-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Our Facilities
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-light mb-4">
                A state-of-the-art factory in-house of over modern tools & machinery with joinery, MEP, marble, and metal works in Ajman & Dubai.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden luxury-shadow bg-muted">
              <Image
                src="/about-ajman-dubai.jpg.png"
                alt="Ajman and Dubai cities"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target) {
                    target.src = "/placeholder.jpg";
                  }
                }}
              />
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

