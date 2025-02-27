"use client"

import { useState } from "react"
import Image from "next/image"
import { Tent, PenTool, Hammer, Truck, Users, Lightbulb, ChevronRight } from "lucide-react"

const services = [
  {
    id: "design",
    title: "Design de Estandes",
    description:
      "Criamos projetos personalizados que refletem a identidade da sua marca e atendem às suas necessidades específicas.",
    icon: <PenTool className="h-8 w-8 text-primary" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JPN1Dez8Lgh5gL9dnQVRiT0gp4y1Zu.png",
  },
  {
    id: "fabricacao",
    title: "Fabricação",
    description:
      "Utilizamos materiais de alta qualidade e técnicas avançadas para fabricar estandes duráveis e visualmente impressionantes.",
    icon: <Hammer className="h-8 w-8 text-primary" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AHtX6a9HcUaOuvbUposUJNYtBG3x1X.png",
  },
  {
    id: "montagem",
    title: "Montagem e Desmontagem",
    description:
      "Nossa equipe experiente cuida de todo o processo de montagem e desmontagem, garantindo eficiência e segurança.",
    icon: <Tent className="h-8 w-8 text-primary" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tltPSa6lBhQ3kcl1KmI5Kq1IFldz3w.png",
  },
  {
    id: "logistica",
    title: "Logística",
    description:
      "Gerenciamos todo o transporte e logística dos materiais, para que você não precise se preocupar com nada.",
    icon: <Truck className="h-8 w-8 text-primary" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AHtX6a9HcUaOuvbUposUJNYtBG3x1X.png",
  },
  {
    id: "consultoria",
    title: "Consultoria",
    description:
      "Oferecemos consultoria especializada para ajudar você a maximizar o impacto da sua presença em eventos.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JPN1Dez8Lgh5gL9dnQVRiT0gp4y1Zu.png",
  },
  {
    id: "treinamento",
    title: "Treinamento de Equipe",
    description:
      "Preparamos sua equipe para aproveitar ao máximo o estande durante o evento, com dicas e estratégias eficazes.",
    icon: <Users className="h-8 w-8 text-primary" />,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tltPSa6lBhQ3kcl1KmI5Kq1IFldz3w.png",
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(services[0].id)

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 animate-on-scroll"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 animate-on-scroll">
            Do projeto à execução, oferecemos soluções completas para sua presença em feiras e eventos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`p-6 rounded-lg transition-all duration-300 cursor-pointer staggered-item ${
                activeService === service.id ? "bg-primary text-white shadow-lg" : "bg-white hover:shadow-md border"
              }`}
              onClick={() => setActiveService(service.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`rounded-full p-3 ${activeService === service.id ? "bg-white" : "bg-primary/10"}`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className={activeService === service.id ? "text-white/90" : "text-gray-600"}>
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm font-medium">Saiba mais</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 zoom-in">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-lg overflow-hidden transition-opacity duration-500 ${
                activeService === service.id ? "block" : "hidden"
              }`}
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={1200}
                height={600}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

