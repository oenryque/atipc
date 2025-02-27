"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent dark:from-primary/10 dark:to-background/95 z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.02] z-0"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="mb-8 animate-on-scroll">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2810%29-NkYwe8e27CSM62iEBk9Ek7wrQz47eC.png"
                alt="Empreita São Bento Logo"
                width={400}
                height={133}
                className="w-full max-w-md mx-auto md:mx-0"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-on-scroll">
              <span className="block text-primary mt-2">Soluções Integradas para Condomínios</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-muted-foreground animate-on-scroll"
              style={{ transitionDelay: "0.2s" }}
            >
              Segurança, eficiência e tecnologia para seu condomínio. Parcelamento facilitado em até 48x sem juros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll" style={{ transitionDelay: "0.4s" }}>
              <Button size="lg" className="text-lg">
                <a
                  href="https://wa.me/5516996244368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Solicitar Orçamento
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <a href="#servicos" className="flex items-center gap-2">
                  Nossos Serviços
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-on-scroll" style={{ transitionDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zI3QQS4R8bl0eg4XuHeLssYBfeLI4E.png"
                alt="Técnico realizando instalação elétrica"
                width={600}
                height={400}
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

