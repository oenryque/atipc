"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const companies = [
  {
    name: "Git",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jRXwLRY3NS1PHVdjK0oxsv8kOHvTyq.png",
  },
  {
    name: "GitLab",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MQb9QtNs27wj0wdo1ZtQYBXOOYfLnJ.png",
  },
  {
    name: "White Wedding",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qFMxJZE7WJU6sqrD7tanVFDEs0NV8i.png",
  },
  {
    name: "FedEx",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hPlMqKxh8eEt1rXimqgjGOAcTADxJe.png",
  },
]

export function TrustedCompanies() {
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
            Essas Empresas <span className="gradient-text">Confiam</span> em Nós
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-[200px] h-[100px] relative flex items-center justify-center"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={160}
                height={80}
                className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

