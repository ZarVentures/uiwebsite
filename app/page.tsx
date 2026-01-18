import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/10">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
    </div>
  )
}
