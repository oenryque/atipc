"use client"

import { motion } from "framer-motion"
import { Fingerprint, MapPin, FileSpreadsheet, Calendar, BarChartIcon as ChartBar, Shield } from "lucide-react"

const features = [
  {
    icon: <Fingerprint className="h-10 w-10" />,
    title: "Reconhecimento Facial",
    description: "Autenticação segura e precisa dos funcionários através de tecnologia biométrica avançada.",
  },
  {
    icon: <MapPin className="h-10 w-10" />,
    title: "Geolocalização",
    description: "Controle de ponto com localização precisa, ideal para equipes em campo ou home office.",
  },
  {
    icon: <FileSpreadsheet className="h-10 w-10" />,
    title: "Folha de Pagamento",
    description: "Gestão completa da folha de pagamento com cálculos automáticos e integração fiscal.",
  },
  {
    icon: <Calendar className="h-10 w-10" />,
    title: "Férias e Licenças",
    description: "Controle automatizado de férias, licenças e outros afastamentos.",
  },
  {
    icon: <ChartBar className="h-10 w-10" />,
    title: "Dashboard Analítico",
    description: "Métricas e indicadores em tempo real para tomada de decisões estratégicas.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Conformidade Legal",
    description: "Sistema atualizado com as últimas exigências da legislação trabalhista.",
  },
]

export function GestoRHFeatures() {
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
            Funcionalidades <span className="gradient-text">Poderosas</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Tudo que você precisa para uma gestão de RH moderna e eficiente
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

