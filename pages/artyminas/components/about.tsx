import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Sobre a <span className="text-primary">ArtyMinas</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 animate-on-scroll"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 animate-on-scroll">
            Somos especializados na criação, fabricação e montagem de estandes para feiras, eventos corporativos,
            entrevistas e conferências.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JPN1Dez8Lgh5gL9dnQVRiT0gp4y1Zu.png"
              alt="Equipe ArtyMinas trabalhando em projetos"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 slide-in-right">Nossa Missão</h3>
            <p className="text-gray-600 slide-in-right">
              Na ArtyMinas, nossa missão é transformar ideias em experiências memoráveis. Nós fazemos desde a produção
              do projeto para o cliente até a execução dele, garantindo qualidade e excelência em cada etapa do
              processo.
            </p>

            <h3 className="text-2xl font-bold mb-4 slide-in-right">Por que escolher a ArtyMinas?</h3>

            <ul className="space-y-3">
              {[
                "Equipe dedicada e experiente",
                "Projetos personalizados para cada cliente",
                "Materiais de alta qualidade",
                "Compromisso com prazos",
                "Suporte completo durante todo o evento",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 staggered-item">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

