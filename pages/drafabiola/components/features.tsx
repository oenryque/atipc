"use client"

import { motion } from "framer-motion"
import { Zap, TrendingUp, Award, Clock } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Resultados Rápidos",
    description: "Tratamentos com resultados visíveis já nas primeiras sessões, garantindo sua satisfação.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Tecnologia Avançada",
    description: "Equipamentos de última geração para proporcionar os melhores resultados com segurança.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Profissional Qualificada",
    description: "Dra. Fabiola é pós-graduada em Endocrinologia e Metabologia, garantindo atendimento de excelência.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Atendimento Personalizado",
    description: "Protocolos desenvolvidos especificamente para as necessidades de cada paciente.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Por que nos escolher?</h2>
          <p className="section-subtitle">
            Descubra os diferenciais que fazem da Dra. Fabiola Helena a escolha ideal para cuidar da sua saúde
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-md mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

