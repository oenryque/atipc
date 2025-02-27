"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
  {
    name: "TensorFlow",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YIEGXMftxauA0iAEnbx7r4ZvqB4TLS.png",
    description: "Machine Learning & IA",
  },
  {
    name: "React",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MSVQQQ0ixc3TRt1RZvRKPUaPbSDT4Z.png",
    description: "Frontend Development",
  },
  {
    name: "AWS",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xKsMfZcJVe4ZMEJGkB9XE3mxtMqevn.png",
    description: "Cloud Infrastructure",
  },
  {
    name: "TypeScript",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zPaxQYwqKmWna7MOUgzHbAmJ9CpQ7I.png",
    description: "Development Language",
  },
  {
    name: "Docker",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sBsDBgKuk2G52sKI8scNDOmxDMQtTE.png",
    description: "Containerization",
  },
  {
    name: "Google Cloud",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hGeBnUBUAEYLFpFAqOED3kwcZL5d7S.png",
    description: "Cloud Services",
  },
  {
    name: "Git",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GgEzwUFWm6Vvzm7ERBJKHAaCQ7vchI.png",
    description: "Version Control",
  },
  {
    name: "N8N",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-di8dVkTDDQpJCAdtJjFz3HRbl76d8J.png",
    description: "Workflow Automation",
  },
]

export function TechnologiesWeUse() {
  return (
    <section id="technologies" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Tecnologias que <span className="gradient-text">Utilizamos</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Nossas soluções são construídas com as tecnologias mais avançadas e confiáveis do mercado
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="bg-zinc-900 rounded-lg p-6 w-full aspect-square flex items-center justify-center mb-3 group-hover:bg-zinc-800 transition-colors">
                <div className="relative w-full h-full">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    fill
                    className="object-contain p-4 filter brightness-100"
                  />
                </div>
              </div>
              <p className="text-zinc-300 font-medium text-sm">{tech.name}</p>
              <p className="text-zinc-500 text-xs">{tech.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-zinc-400 mt-12 text-lg font-medium"
        >
          E muito mais...
        </motion.p>
      </div>
    </section>
  )
}

