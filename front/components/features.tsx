"use client"

import { motion } from "framer-motion"
import { Code2, Rocket, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações web modernas e responsivas.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Segurança",
    description: "Implementação de práticas seguras e proteção de dados.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Performance",
    description: "Otimização de desempenho para melhor experiência do usuário.",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Escalabilidade",
    description: "Soluções que crescem junto com seu negócio.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Nossas <span className="gradient-text">Features</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400">
            Oferecemos soluções completas para suas necessidades digitais
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to p-2.5 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

