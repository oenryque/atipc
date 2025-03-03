import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Features from "@/components/features"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  )
}

