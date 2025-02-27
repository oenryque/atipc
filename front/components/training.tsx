"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { GraduationCap, BookOpen, Users, BadgeIcon as Certificate } from "lucide-react"

const features = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Cursos Especializados",
    description: "Programas focados em desenvolvimento de software e gestão de produtos.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Workshops Práticos",
    description: "Experiências hands-on com casos reais do mercado.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Mentoria Individual",
    description: "Acompanhamento personalizado para acelerar seu desenvolvimento.",
  },
  {
    icon: <Certificate className="h-6 w-6" />,
    title: "Certificação",
    description: "Certificados reconhecidos pelo mercado.",
  },
]

export function Training() {
  const handleContact = () => {
    window.open(
      "https://wa.me/4796253812?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20treinamentos",
      "_blank",
    )
  }

  return (
    <section id="training" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
              Capacitação e <span className="gradient-text">Treinamento</span>
            </h2>
            <p className="text-zinc-400 md:text-xl mb-8">
              Desenvolva as habilidades necessárias para se destacar no mercado de tecnologia
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800"
                >
                  <div className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to p-2 rounded-lg inline-block mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            <Button
              size="lg"
              className="mt-8 bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to text-white"
              onClick={handleContact}
            >
              Comece Sua Jornada
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-duf8ig1ricAi5YOtpeb5rwC05QTgHy.png"
              alt="Educational Technology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

