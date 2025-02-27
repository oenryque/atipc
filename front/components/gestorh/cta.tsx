"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function GestoRHCTA() {
  const handleContact = () => {
    window.open("https://wa.me/554796253812?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20GestoRH", "_blank")
  }

  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 px-6 py-12 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to opacity-10" />
          <div className="relative grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Pronto para revolucionar seu RH?</h2>
              <p className="text-zinc-400 md:text-lg">
                Agende uma demonstração gratuita e descubra como o GestoRH pode transformar sua empresa.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:items-end">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to text-white"
                onClick={handleContact}
              >
                Agendar Demonstração
              </Button>
              <Button size="lg" variant="outline" className="text-white" onClick={handleContact}>
                Falar com Consultor
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

