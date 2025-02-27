import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollAnimationProvider from "@/components/scroll-animation-provider"

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </ScrollAnimationProvider>
  )
}

