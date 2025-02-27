"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-duf8ig1ricAi5YOtpeb5rwC05QTgHy.png",
    title: "O Futuro da Educação Tecnológica",
    subtitle: "Tendências e Inovações",
    summary:
      "Explore as últimas tendências em educação tecnológica e como elas estão moldando o futuro do aprendizado digital.",
    slug: "futuro-educacao-tecnologica",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ip7tL80IPvXKiMWKlgOWlx5WasLvfV.png",
    title: "Transformação Digital na Prática",
    subtitle: "Cases de Sucesso",
    summary: "Descubra como empresas estão implementando com sucesso suas estratégias de transformação digital.",
    slug: "transformacao-digital-pratica",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1mRg5ayoz51UBtA4RRpi4O7NMvblmm.png",
    title: "IA na Automação de Processos",
    subtitle: "Inovação e Eficiência",
    summary: "Saiba como a Inteligência Artificial está revolucionando a automação de processos empresariais.",
    slug: "ia-automacao-processos",
  },
]

export function LatestArticles() {
  return (
    <section id="articles" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Últimos <span className="gradient-text">Artigos</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Fique por dentro das últimas novidades e insights do mundo da tecnologia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-zinc-900/50 rounded-lg overflow-hidden border border-zinc-800"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{article.title}</h3>
                <p className="text-sm text-zinc-400 mb-2">{article.subtitle}</p>
                <p className="text-zinc-300 mb-4 line-clamp-2">{article.summary}</p>
                <Button
                  variant="link"
                  className="text-brand-gradient-from hover:text-brand-gradient-via transition-colors p-0 h-auto font-medium"
                  onClick={() => (window.location.href = `/blog/${article.slug}`)}
                >
                  Continuar Lendo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

