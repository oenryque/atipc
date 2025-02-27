"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ClipboardList, Target, Users, TrendingUp } from "lucide-react"

const services = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Estratégia de Produto",
    description: "Desenvolvimento de roadmaps e definição de OKRs alinhados aos objetivos do negócio.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Discovery & Research",
    description: "Pesquisas com usuários e análise de mercado para validação de hipóteses.",
  },
  {
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Gestão de Backlog",
    description: "Priorização e refinamento de features com foco em valor para o usuário.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Métricas & Analytics",
    description: "Definição e acompanhamento de KPIs para tomada de decisão baseada em dados.",
  },
]

export function ProductManagement() {
  const handleContact = () => {
    window.open(
      "https://wa.me/554796253812?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20consultoria%20em%20Gestão%20de%20Produtos",
      "_blank",
    )
  }

  return (
    <section id="product-management" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Consultoria em <span className="gradient-text">Gestão de Produtos</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Transforme suas ideias em produtos de sucesso com nossa expertise em Product Management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to p-2 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-zinc-400">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to text-white"
            onClick={handleContact}
          >
            Agende uma Consultoria
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

