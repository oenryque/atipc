"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTA() {
  const handleContact = () => {
    window.open(
      "https://wa.me/47962538812?text=Olá%20gostaria%20de%20solicitar%20serviços%20para%20minha%20empresa",
      "_blank",
    )
  }

  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 px-6 py-12 md:p-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to opacity-10" />
          <div className="relative grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Pronto para transformar seu negócio?</h2>
              <p className="text-zinc-400 md:text-lg">
                Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com soluções
                personalizadas.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to text-white"
                onClick={handleContact}
              >
                Agende uma Consulta
              </Button>
              <Button size="lg" variant="outline" className="text-white" onClick={handleContact}>
                Saiba Mais
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

