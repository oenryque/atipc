"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Gerente de RH, TechCorp",
    content: "O GestoRH revolucionou nossa gestão de pessoas. A implementação foi suave e o suporte é excepcional.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Diretor de RH, InnovateX",
    content: "Reduzimos em 70% o tempo gasto com processos manuais. O reconhecimento facial é um diferencial incrível.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Coordenadora de RH, DataFlow",
    content: "A melhor decisão que tomamos foi implementar o GestoRH. O retorno sobre o investimento foi imediato.",
    rating: 5,
  },
]

export function GestoRHTestimonials() {
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
            O que Nossos <span className="gradient-text">Clientes</span> Dizem
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Histórias reais de empresas que transformaram sua gestão de RH
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-6"
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-gradient-via text-brand-gradient-via" />
                  ))}
                </div>
                <p className="text-zinc-400">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

