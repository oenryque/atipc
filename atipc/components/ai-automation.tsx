"use client"

import { motion } from "framer-motion"
import { Brain, Zap, BarChart, BotIcon as Robot } from "lucide-react"

const features = [
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Análise Preditiva",
    description: "Antecipe tendências e tome decisões informadas com nossa IA avançada.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Automação de Processos",
    description: "Elimine tarefas repetitivas e aumente a eficiência operacional.",
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Otimização de Recursos",
    description: "Maximize o uso de recursos com alocação inteligente baseada em IA.",
  },
  {
    icon: <Robot className="h-10 w-10" />,
    title: "Atendimento ao Cliente IA",
    description: "Ofereça suporte 24/7 com chatbots inteligentes e personalizados.",
  },
]

export function AIAutomation() {
  return (
    <section id="ai-automation" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Revolucione seu Negócio com <span className="gradient-text">Automação IA</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Descubra como nossa tecnologia de ponta em Inteligência Artificial pode transformar seus processos e
            impulsionar seus resultados.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-zinc-400">
            Não fique para trás na revolução da IA. Junte-se às empresas visionárias que já estão colhendo os benefícios
            da automação inteligente. Com nossa solução, você não apenas acompanha o mercado - você o lidera.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

