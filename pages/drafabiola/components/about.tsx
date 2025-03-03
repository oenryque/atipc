"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sobre a Dra. Fabiola</h2>
          <p className="section-subtitle">Conheça mais sobre a trajetória e especialização da Dra. Fabiola Helena</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-lg">
              <div className="mb-6">
                <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-2">
                  CRM 1531/AC
                </span>
                <h3 className="text-2xl font-bold mb-4">Formação e Especialização</h3>
                <p className="text-gray-600 mb-4">
                  A Dra. Fabiola Helena é médica com pós-graduação em Endocrinologia e Metabologia, dedicada a oferecer
                  tratamentos personalizados para emagrecimento saudável e bem-estar.
                </p>
                <p className="text-gray-600">
                  Com anos de experiência clínica, ela combina conhecimento científico avançado com uma abordagem
                  humanizada, focando no equilíbrio entre saúde física e mental.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-xl font-bold mb-4">Missão</h4>
                <p className="text-gray-600">
                  Proporcionar saúde e qualidade de vida através de tratamentos personalizados, utilizando as mais
                  avançadas técnicas e tecnologias disponíveis no mercado.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="card flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Especialista em Emagrecimento</h3>
                  <p className="text-gray-600">
                    Protocolos personalizados para emagrecimento saudável, adaptados às necessidades individuais de cada
                    paciente.
                  </p>
                </div>
              </div>

              <div className="card flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pós-graduada em Endocrinologia</h3>
                  <p className="text-gray-600">
                    Formação avançada em Endocrinologia e Metabologia, garantindo conhecimento técnico e científico
                    atualizado.
                  </p>
                </div>
              </div>

              <div className="card flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Abordagem Humanizada</h3>
                  <p className="text-gray-600">
                    Atendimento focado no bem-estar integral, considerando aspectos físicos, emocionais e de qualidade
                    de vida.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

