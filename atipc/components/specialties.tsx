"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Bot, Rocket, Shield, Zap } from "lucide-react"

const specialties = [
  {
    icon: <Bot className="h-10 w-10" />,
    title: "Automação e IA",
    description: "Aplicação de Inteligência Artificial para otimizar processos de negócios.",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "SaaS",
    description: "Desenvolvimento de soluções Software as a Service escaláveis e flexíveis.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Sistemas Personalizados",
    description: "Criação de sistemas sob medida para atender às necessidades específicas da sua empresa.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Otimização de Processos",
    description: "Melhoria contínua de fluxos de trabalho e eficiência operacional.",
  },
]

function SpecialtyCard({ specialty, index }: { specialty: (typeof specialties)[0]; index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6 hover:border-zinc-700 transition-colors"
    >
      <div style={{ transform: "translateZ(75px)" }} className="space-y-4">
        <div className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to p-2.5 rounded-lg inline-block">
          {specialty.icon}
        </div>
        <h3 className="text-xl font-bold">{specialty.title}</h3>
        <p className="text-zinc-400">{specialty.description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to opacity-0 group-hover:opacity-10 transition-opacity" />
    </motion.div>
  )
}

export function Specialties() {
  return (
    <section id="specialties" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Nossas <span className="gradient-text">Especialidades</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Oferecemos soluções avançadas para impulsionar o seu negócio
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 perspective-1000">
          {specialties.map((specialty, index) => (
            <SpecialtyCard key={specialty.title} specialty={specialty} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

