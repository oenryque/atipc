import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Partners from "@/components/partners"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </main>
  )
}

