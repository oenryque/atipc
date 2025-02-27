"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

export function Founder() {
  return (
    <section id="founder" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to opacity-20 blur-3xl" />
            <motion.div
              className="relative"
              initial={{ scale: 0.8, rotate: -5 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile%20Quem%20sou%20eu-muXRdUF2WiWTStnFQDo1V2HNcz7AXC.png"
                alt="Enryque de Jesus"
                width={500}
                height={500}
                className="rounded-full mx-auto animate-float"
              />
            </motion.div>
          </div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-zinc-900 px-3 py-1 text-sm">Fundador</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Conheça <span className="gradient-text">Enryque de Jesus</span>
            </h2>
            <p className="text-zinc-400 md:text-lg">
              Engenheiro de Software de 24 anos, especializado em Product Management, IA e UX. Enryque fundou a ATIPC
              com uma visão inovadora e uma equipe multidisciplinar.
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li>• Especialista em Gestão de Produtos</li>
              <li>• Experiência em Inteligência Artificial</li>
              <li>• Foco em Experiência do Usuário (UX)</li>
            </ul>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => window.open("https://www.linkedin.com/in/enryquejesus/", "_blank")}
            >
              <Linkedin className="mr-2 h-4 w-4" /> Conecte-se no LinkedIn
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

