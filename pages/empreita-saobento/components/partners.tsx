"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Partners() {
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

  const partners = [
    {
      id: 1,
      name: "Intelbras",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0pJ47ooo64o7RvpTGJ4zcKZb4X3dlw.png",
      description: "Tecnologia em segurança eletrônica e telecomunicações.",
    },
    {
      id: 2,
      name: "Control iD",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y4Crdfcf7qvnoVn3Qs2XvSNfIDcGTT.png",
      description: "Controle de acesso e segurança.",
    },
    {
      id: 3,
      name: "PPA",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9B5aJwu5m2LprjNgYKkuglA6IitVzP.png",
      description: "Automação de portões.",
    },
    {
      id: 4,
      name: "WEG",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RG2Rr3QnQ6OyGr1CFkmcHx8s3xgDSh.png",
      description: "Motores e painéis elétricos.",
    },
    {
      id: 5,
      name: "Siemens",
      logo: "/placeholder.svg?height=200&width=200",
      description: "Equipamentos elétricos e automação industrial.",
    },
    {
      id: 6,
      name: "Garen",
      logo: "/placeholder.svg?height=200&width=200",
      description: "Automação de portões e acessórios.",
    },
  ]

  return (
    <section id="parceiros" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Marcas Parceiras</h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll"
            style={{ transitionDelay: "0.2s" }}
          >
            Trabalhamos com as melhores marcas do mercado para garantir qualidade e confiabilidade em nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div key={partner.id} className="animate-on-scroll" style={{ transitionDelay: `${0.1 * (index + 1)}s` }}>
              <Card className="h-full flex flex-col items-center justify-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex flex-col items-center text-center">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={100}
                      height={100}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium">{partner.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{partner.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

