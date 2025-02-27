"use client"

import { motion } from "framer-motion"
import { Lightbulb, Code, Zap, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Ideação",
    description: "Transformamos suas ideias em conceitos sólidos.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Desenvolvimento",
    description: "Codificamos sua visão com as melhores práticas.",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Otimização",
    description: "Refinamos para máxima performance e eficiência.",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Entrega",
    description: "Implementamos sua solução com suporte contínuo.",
  },
]

export function OurProcess() {
  return (
    <section id="our-process" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Nosso <span className="gradient-text">Processo</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Da concepção à entrega, nossa abordagem garante resultados excepcionais
          </p>
        </motion.div>
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <div className="bg-zinc-900 rounded-lg p-6 shadow-lg">
                  <div className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to p-3 rounded-full inline-block mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-black font-bold">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

