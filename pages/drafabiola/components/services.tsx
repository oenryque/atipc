"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Scale, Video } from "lucide-react"

const services = [
  {
    id: "mounjaro",
    title: "Mounjaro",
    description: "O carro-chefe para emagrecimento saudável e eficaz, com resultados comprovados.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shutterstock_2328930785-removebg-preview-BMMcggLJGlMOPUJw7ZrS6zE7OIhFx0.png",
    link: "/mounjaro",
    featured: true,
    isIcon: false,
  },
  {
    id: "bodyshape",
    title: "BodyShape",
    description: "Tecnologia avançada que acelera a queima de gordura e tonifica o corpo sem cirurgias.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23223-oCMMVP6afOCR3lRdruEnkEzKeu6YlU.png",
    link: "/bodyshape",
    featured: true,
    isIcon: false,
  },
  {
    id: "biopedancia",
    title: "Bioimpedância",
    description: "Avaliação precisa da composição corporal para acompanhamento de resultados.",
    icon: Scale,
    link: "#",
    featured: false,
    isIcon: true,
  },
  {
    id: "telemedicina",
    title: "Telemedicina",
    description: "Consultas online para cuidar da sua saúde de onde você estiver, com praticidade e segurança.",
    icon: Video,
    link: "#",
    featured: false,
    isIcon: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Conheça os tratamentos e serviços oferecidos pela Dra. Fabiola Helena para sua saúde e bem-estar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                service.featured ? "md:col-span-1" : "md:col-span-1"
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                {service.isIcon ? (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5">
                    <service.icon className="w-24 h-24 text-primary" />
                  </div>
                ) : (
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105"
                  />
                )}
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.featured && (
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Conheça todos os nossos serviços</h3>
          <p className="text-gray-600 mb-6">
            Entre em contato e descubra como podemos ajudar você a alcançar seus objetivos
          </p>
          <Link
            href="https://api.whatsapp.com/send/?phone=5568999920138&text=Olá.+Vim+através+do+site+da+Dra.+Fabiola+Helena,+gostaria+de+mais+informações+sobre+os+serviços."
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com Especialista
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

