"use client"

import { motion } from "framer-motion"
import { Clock, DollarSign, Smile, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: <Clock className="h-12 w-12" />,
    title: "Economia de Tempo",
    description: "Reduza em até 70% o tempo gasto com processos manuais de RH.",
    stat: "70%",
    statLabel: "Redução de tempo",
  },
  {
    icon: <DollarSign className="h-12 w-12" />,
    title: "Redução de Custos",
    description: "Minimize erros e custos operacionais com automação inteligente.",
    stat: "40%",
    statLabel: "Economia em custos",
  },
  {
    icon: <Smile className="h-12 w-12" />,
    title: "Satisfação dos Funcionários",
    description: "Melhore a experiência dos colaboradores com processos ágeis.",
    stat: "95%",
    statLabel: "Satisfação",
  },
  {
    icon: <TrendingUp className="h-12 w-12" />,
    title: "Produtividade",
    description: "Aumente a eficiência da sua equipe de RH.",
    stat: "85%",
    statLabel: "Aumento em produtividade",
  },
]

export function GestoRHBenefits() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Benefícios <span className="gradient-text">Comprovados</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Resultados reais que transformam a gestão de RH da sua empresa
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to p-4 rounded-full inline-block">
                {benefit.icon}
              </div>
              <div className="text-4xl font-bold gradient-text">{benefit.stat}</div>
              <div className="text-sm text-zinc-400">{benefit.statLabel}</div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-zinc-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

