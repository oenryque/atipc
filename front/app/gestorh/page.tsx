import { SpaceBackground } from "@/components/space-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GestoRHHero } from "@/components/gestorh/hero"
import { GestoRHFeatures } from "@/components/gestorh/features"
import { GestoRHBenefits } from "@/components/gestorh/benefits"
import { GestoRHPricing } from "@/components/gestorh/pricing"
import { GestoRHTestimonials } from "@/components/gestorh/testimonials"
import { GestoRHCTA } from "@/components/gestorh/cta"

export default function GestoRHPage() {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />
      <main>
        <GestoRHHero />
        <GestoRHFeatures />
        <GestoRHBenefits />
        <GestoRHPricing />
        <GestoRHTestimonials />
        <GestoRHCTA />
      </main>
      <Footer />
    </div>
  )
}

