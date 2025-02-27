"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechCorp",
    content:
      "A ATIPC transformou completamente nossos processos internos. A automação implementada reduziu nosso tempo de operação em 60%.",
    rating: 5,
  },
  {
    name: "Ana Martins",
    role: "Diretora de Operações, InnovateX",
    content:
      "Excelente trabalho no desenvolvimento do nosso sistema B2B. A equipe é muito profissional e entregou além das expectativas.",
    rating: 5,
  },
  {
    name: "Roberto Santos",
    role: "Gerente de Projetos, DataFlow",
    content:
      "A implementação de IA em nosso sistema trouxe resultados impressionantes. Recomendo fortemente os serviços da ATIPC.",
    rating: 5,
  },
]

export function Testimonials() {
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
            Eles <span className="gradient-text">Falam</span> por Nós
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
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
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to opacity-5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

