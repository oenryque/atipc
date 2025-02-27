"use client"

import { motion } from "framer-motion"
import { Users, DollarSign, Coffee } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-10 w-10" />,
    value: "50+",
    label: "Clientes Satisfeitos",
  },
  {
    icon: <DollarSign className="h-10 w-10" />,
    value: "1M+",
    label: "Faturamento Gerado",
  },
  {
    icon: <Coffee className="h-10 w-10" />,
    value: "1000+",
    label: "Copos de Café",
  },
]

export function DataStats() {
  return (
    <section id="data-stats" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Nosso <span className="gradient-text">Impacto</span> em Números
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Dados que comprovam nossa excelência e compromisso com o sucesso dos nossos clientes.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-colors text-center"
            >
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to p-2.5 rounded-lg inline-block mx-auto">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold gradient-text">{stat.value}</h3>
                <p className="text-zinc-400">{stat.label}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

