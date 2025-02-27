"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import Button from "@/components/ui/button"
import { useRouter } from "next/navigation"

const projects = [
  {
    title: "GestoRH",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gestoRH.jpg-CwttvQAkPwJIjTZXo7vufTg1i0KnF6.jpeg",
    description:
      "Sistema completo de gestão de funcionários, incluindo marcação de ponto com geolocalização e reconhecimento facial.",
    features: [
      "Marcação de ponto com geolocalização",
      "Reconhecimento facial para autenticação",
      "Gestão de folha de pagamento",
      "Controle de férias e licenças",
      "Dashboard para gestores com métricas de produtividade",
    ],
  },
  {
    title: "Collib",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coliib.jpg-rPxXAPtPyS8xORgeOj6yNQ1C61fnsh.jpeg",
    description: "Sistema para Gestão completa de Biblioteca, utilizado para Escolas públicas e privadas.",
    features: [
      "Catálogo digital de livros",
      "Sistema de empréstimo e devolução",
      "Gestão de usuários (alunos e professores)",
      "Relatórios de utilização e acervo",
      "Integração com sistemas escolares",
    ],
  },
]

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-sm text-white/90">{project.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  const router = useRouter()

  const handleGestoRHClick = () => {
    router.push("/gestorh")
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-zinc-900 p-6 rounded-lg max-w-2xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 gradient-text">{project.title}</h2>
        <div className="mb-6 relative h-[200px] w-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-zinc-300 mb-4">{project.description}</p>
        <h3 className="text-xl font-semibold mb-2 gradient-text">Principais Funcionalidades:</h3>
        <ul className="list-disc pl-5 text-zinc-300 mb-6">
          {project.features.map((feature, index) => (
            <li key={index} className="mb-1">
              {feature}
            </li>
          ))}
        </ul>
        {project.title === "GestoRH" && (
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to text-white"
              onClick={handleGestoRHClick}
            >
              Quero o GestoRH
            </Button>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export function ProjectGallery3D() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="project-gallery" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Nossos <span className="gradient-text">Projetos</span> em Destaque
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Conheça algumas das soluções que desenvolvemos para nossos clientes
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onClick={setSelectedProject} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}

