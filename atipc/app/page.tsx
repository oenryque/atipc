import { SpaceBackground } from "@/components/space-background"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Specialties } from "@/components/specialties"
import { OurProcess } from "@/components/our-process"
import { ProductManagement } from "@/components/product-management"
import { Training } from "@/components/training"
import { ProjectGallery3D } from "@/components/project-gallery-3d"
import { TechnologiesWeUse } from "@/components/technologies-we-use"
import { AIAutomation } from "@/components/ai-automation"
import { DataStats } from "@/components/data-stats"
import { LatestArticles } from "@/components/latest-articles"
import { Testimonials } from "@/components/testimonials"
import { Founder } from "@/components/founder"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Header />
      <main>
        <Hero />
        <Specialties />
        <OurProcess />
        <AIAutomation />
        <ProductManagement />
        <Training />
        <ProjectGallery3D />
        <TechnologiesWeUse />
        <DataStats />
        <Testimonials />
        <Founder />
        <LatestArticles />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

