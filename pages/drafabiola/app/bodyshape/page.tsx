"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Zap, Clock, Flame } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const bodyShapeImages = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23223-oCMMVP6afOCR3lRdruEnkEzKeu6YlU.png",
    alt: "BodyShape Vista Principal",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bodyShape_white_0003-TxDEstNrPszrnMCcx62GBF9eQDARGA.png",
    alt: "BodyShape Vista Lateral",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bodyShape_white_0013-f8Va1ArS2zw1XfCfzOV2vwfoyEAOxt.png",
    alt: "BodyShape Interface Digital",
  },
]

export default function BodyShapePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % bodyShapeImages.length)
  }

  return (
    <main className="pt-16 bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent opacity-30"></div>
          <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Link href="/" className="inline-flex items-center text-blue-400 mb-6 hover:text-blue-300">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para a página inicial
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                BodyShape: <span className="text-blue-400">Sua Cápsula Emagrecedora</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-300 mb-8"
              >
                A mais nova tecnologia em emagrecimento, novidade no Brasil e no mundo, que promove a perda de até 1000
                kcal em apenas 30 minutos!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="#contact"
                  className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Agendar Sessão
                </Link>
                <Link
                  href="#benefits"
                  className="border border-blue-400 text-blue-400 px-8 py-3 rounded-full hover:bg-blue-400/10 transition-colors"
                >
                  Ver Benefícios
                </Link>
              </motion.div>
            </div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl"></div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23223-oCMMVP6afOCR3lRdruEnkEzKeu6YlU.png"
                    alt="BodyShape"
                    width={600}
                    height={600}
                    className="relative z-10"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pioneer Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2811%29-JfwtTGJDLgcFI19TvZRV8qqOW8Jdh2.png"
                alt="Dra. Fabiola Helena"
                width={500}
                height={700}
                className="relative z-10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pioneirismo em <span className="text-blue-400">Tecnologia Avançada</span>
              </h2>
              <p className="text-gray-300 mb-6">
                A Dra. Fabiola Helena é a primeira médica no Acre a disponibilizar a revolucionária tecnologia
                BodyShape, trazendo para o estado o que há de mais moderno em tratamento para emagrecimento e modelagem
                corporal.
              </p>
              <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-400/20">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Experiência e Inovação</h3>
                <p className="text-gray-300">
                  Com anos de experiência em endocrinologia e metabologia, a Dra. Fabiola Helena está sempre em busca
                  das mais avançadas tecnologias para oferecer os melhores resultados aos seus pacientes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is BodyShape */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              O que é a <span className="text-blue-400">BodyShape</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300"
            >
              A BodyShape é uma cápsula emagrecedora revolucionária que combina múltiplas tecnologias para maximizar a
              queima de calorias e tonificar o corpo sem a necessidade de cirurgias ou procedimentos invasivos.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src={bodyShapeImages[2].url || "/placeholder.svg"}
                alt="BodyShape Interface"
                width={600}
                height={400}
                className="rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Tecnologia de Ponta para Resultados Surpreendentes
              </h3>
              <p className="text-gray-300 mb-6">
                A BodyShape utiliza ondas de ultrassom e radiofrequência para modelar sua silhueta de forma rápida e
                segura, acelerando a queima de gordura e tonificando o corpo.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Resultados visíveis já nas primeiras sessões</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Procedimento não invasivo e indolor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Sessões rápidas que se encaixam na sua rotina</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Tecnologia aprovada e segura</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Benefícios da <span className="text-blue-400">BodyShape</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300"
            >
              Descubra como a BodyShape pode transformar seu corpo e melhorar sua qualidade de vida
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Flame className="h-8 w-8 text-blue-400" />,
                title: "Queima de Calorias",
                description: "Promove a perda de até 1000 kcal em apenas 30 minutos",
              },
              {
                icon: <Zap className="h-8 w-8 text-blue-400" />,
                title: "Redução de Medidas",
                description: "Modelagem corporal eficaz e resultados visíveis",
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-400" />,
                title: "Combate à Flacidez",
                description: "Tonificação e melhora da aparência da pele",
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-blue-400" />,
                title: "Resultados Rápidos",
                description: "Resultados visíveis desde as primeiras sessões",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-400/50 transition-colors"
              >
                <div className="bg-blue-400/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronta para transformar seu corpo?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Agende agora mesmo sua sessão de BodyShape com a Dra. Fabiola Helena e comece a ver resultados já nas
              primeiras sessões!
            </p>
            <Link
              href="https://api.whatsapp.com/send/?phone=5568999920138&text=Olá.+Vim+através+do+site+da+Dra.+Fabiola+Helena,+gostaria+de+agendar+uma+sessão+de+BodyShape."
              className="inline-flex items-center bg-white text-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Agora
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

