"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Network, Bell, Lightbulb, KeyRound, Scan, DoorOpenIcon as Gate, FileText } from "lucide-react"

export default function Services() {
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

  const services = [
    {
      id: 1,
      title: "CFTV",
      description: "Segurança e Monitoramento Avançado",
      details: [
        "Fibra Óptica: Imagens de alta velocidade e qualidade superior",
        "IP: Acesso remoto e integração facilitada",
        "Sistemas Personalizados: Tecnologia de ponta",
      ],
      icon: <Camera className="h-10 w-10" />,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zI3QQS4R8bl0eg4XuHeLssYBfeLI4E.png",
    },
    {
      id: 2,
      title: "Redes e Interfonia",
      description: "Comunicação Eficiente",
      details: [
        "Redes Estruturadas: Infraestrutura robusta para dados e voz",
        "Interfonia Condominial: Sistemas modernos com áudio e vídeo HD",
        "Integração: Comunicação integrada com portaria remota",
      ],
      icon: <Network className="h-10 w-10" />,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8G8JLEB3ZsFIpR3iHyukc65QgK7sNc.png",
    },
    {
      id: 3,
      title: "Sistemas de Alarme de Incêndio",
      description: "Proteção Essencial",
      details: [
        "Detecção: Sensores de fumaça e temperatura",
        "Alerta: Sinalização sonora e visual para evacuação",
        "Combate: Sprinklers e extintores para controle de incêndios",
      ],
      icon: <Bell className="h-10 w-10" />,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Elétrica em Geral e Automações",
      description: "Instalações Inteligentes",
      details: [
        "Instalações Elétricas: Projetos seguros e eficientes",
        "Automação Residencial: Controle de iluminação e dispositivos",
        "Economia de Energia: Soluções inteligentes para redução de custos",
      ],
      icon: <Lightbulb className="h-10 w-10" />,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zI3QQS4R8bl0eg4XuHeLssYBfeLI4E.png",
    },
    {
      id: 5,
      title: "Controle de Acesso",
      description: "Segurança Reforçada",
      details: [
        "Catracas: Controle de entrada e saída",
        "Leitor Facial: Acesso rápido e seguro",
        "Biometria: Identificação por impressão digital",
      ],
      icon: <KeyRound className="h-10 w-10" />,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lLLngUMtWhHEEUC0AoYOK5XCziEGPS.png",
    },
    {
      id: 6,
      title: "Sistema Facial",
      description: "Acesso Moderno",
      details: [
        "Reconhecimento Rápido: Identificação ágil e precisa",
        "Controle Total: Gerenciamento centralizado",
        "Segurança Avançada: Proteção contra fraudes e invasões",
      ],
      icon: <Scan className="h-10 w-10" />,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Motores de Portão e Portões",
      description: "Acesso Automatizado",
      details: [
        "Motores Rápidos: Maior comodidade na abertura e fechamento",
        "Portões Duráveis: Materiais de alta qualidade",
        "Manutenção: Preventiva e corretiva",
      ],
      icon: <Gate className="h-10 w-10" />,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Projetos e Vendas",
      description: "Soluções Completas",
      details: [
        "Projetos Personalizados: Soluções elétricas eficientes",
        "Venda de Materiais: Produtos de alta qualidade",
        "Parcelamento Facilitado: Até 48x sem juros",
      ],
      icon: <FileText className="h-10 w-10" />,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Nossos Serviços</h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll"
            style={{ transitionDelay: "0.2s" }}
          >
            Oferecemos soluções completas e integradas para garantir segurança, eficiência e conforto para seu
            condomínio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="animate-on-scroll" style={{ transitionDelay: `${0.1 * (index + 1)}s` }}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary text-lg">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <a
                      href={`https://wa.me/5516996244368?text=Olá! Gostaria de saber mais sobre o serviço de ${service.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar Orçamento
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

