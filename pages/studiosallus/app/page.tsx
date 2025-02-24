import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Cta from "@/components/cta"
import Footer from "@/components/footer"
import Map from "@/components/map"
import OperatingHours from "@/components/operatingHours"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <OperatingHours />
        <Map />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}

