"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, BarChart, Heart, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export default function MounjaroPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-white to-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Link href="/" className="inline-flex items-center text-primary mb-6 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para a página inicial
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
              >
                Mounjaro: <span className="text-primary">Emagrecimento Eficaz</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-700 mb-8"
              >
                O carro-chefe para emagrecimento da Dra. Fabiola Helena, com resultados comprovados e acompanhamento
                personalizado para garantir sua saúde e bem-estar.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="#contact" className="btn-primary">
                  Agendar Consulta
                </Link>
                <Link href="#benefits" className="btn-secondary">
                  Ver Benefícios
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-70"></div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shutterstock_2328930785-removebg-preview-BMMcggLJGlMOPUJw7ZrS6zE7OIhFx0.png"
                    alt="Mounjaro"
                    width={500}
                    height={500}
                    className="relative z-10 mx-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Mounjaro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              O que é o <span className="text-primary">Mounjaro</span>?
            </h2>
            <p className="text-lg text-gray-700">
              Mounjaro é um tratamento inovador para emagrecimento, que atua de forma eficaz e segura, ajudando você a
              alcançar seus objetivos de forma saudável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IrKZ3sK2THmVLkKmrXXigPL1QBzuQn.png"
                alt="Mounjaro Treatment"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Tratamento Personalizado para Resultados Reais</h3>
              <p className="text-gray-700 mb-6">
                O Mounjaro é o carro-chefe dos tratamentos de emagrecimento oferecidos pela Dra. Fabiola Helena, com
                protocolos personalizados para cada paciente.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Resultados significativos e duradouros</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Acompanhamento médico especializado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Abordagem focada na saúde integral</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tratamento seguro e eficaz</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Benefícios do <span className="text-primary">Mounjaro</span>
            </h2>
            <p className="text-lg text-gray-700">
              Descubra como o Mounjaro pode transformar sua vida e melhorar sua saúde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Perda de Peso Eficaz</h3>
              <p className="text-gray-700">
                Promove a perda de peso de forma eficaz e sustentável, com resultados visíveis e duradouros.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Melhora da Saúde</h3>
              <p className="text-gray-700">
                Além da perda de peso, contribui para a melhoria de diversos aspectos da saúde geral.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Segurança</h3>
              <p className="text-gray-700">
                Tratamento seguro, com acompanhamento médico especializado durante todo o processo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalização</h3>
              <p className="text-gray-700">
                Protocolos personalizados de acordo com as necessidades e objetivos de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Como Funciona o <span className="text-primary">Mounjaro</span>
            </h2>
            <p className="text-lg text-gray-700">
              Entenda o processo de tratamento com Mounjaro e como ele pode ajudar você a alcançar seus objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Fh5Im9rg5IQvbQyOQRiMmIThzN8CZ.png"
                alt="Como funciona o Mounjaro"
                width={500}
                height={600}
                className="rounded-2xl shadow-lg mx-auto"
              />
            </div>
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-primary">Consulta Inicial</h3>
                  <p className="text-gray-700">
                    Avaliação completa do seu estado de saúde, histórico médico e objetivos para definir o protocolo
                    ideal.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-primary">Plano Personalizado</h3>
                  <p className="text-gray-700">
                    Desenvolvimento de um plano de tratamento personalizado, considerando suas necessidades específicas.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-primary">Acompanhamento Contínuo</h3>
                  <p className="text-gray-700">
                    Monitoramento regular do seu progresso, com ajustes no tratamento quando necessário.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-primary">Resultados Sustentáveis</h3>
                  <p className="text-gray-700">
                    Orientações para manutenção dos resultados a longo prazo, com foco em hábitos saudáveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Depoimentos de <span className="text-primary">Pacientes</span>
            </h2>
            <p className="text-lg text-gray-700">
              Veja o que nossos pacientes têm a dizer sobre os resultados obtidos com o Mounjaro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Paciente"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Carlos Oliveira</h4>
                  <p className="text-sm text-gray-600">Paciente Mounjaro</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "O tratamento com Mounjaro mudou minha vida. Perdi 15kg em 3 meses com acompanhamento da Dra. Fabiola.
                Recomendo a todos que buscam emagrecimento saudável."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Paciente"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Juliana Santos</h4>
                  <p className="text-sm text-gray-600">Paciente Mounjaro</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Já tinha tentado vários métodos para emagrecer sem sucesso. Com o Mounjaro e o acompanhamento da Dra.
                Fabiola, finalmente consegui alcançar meus objetivos de forma saudável."
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Paciente"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Roberto Almeida</h4>
                  <p className="text-sm text-gray-600">Paciente Mounjaro</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Além da perda de peso, notei uma melhora significativa na minha saúde geral. Minha disposição aumentou
                e meus exames melhoraram consideravelmente. Estou muito satisfeito com os resultados."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua vida?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Agende agora mesmo sua consulta com a Dra. Fabiola Helena e comece sua jornada rumo ao emagrecimento
            saudável!
          </p>
          <Link
            href="https://api.whatsapp.com/send/?phone=5568999920138&text=Olá.+Vim+através+do+site+da+Dra.+Fabiola+Helena,+gostaria+de+agendar+uma+consulta+para+o+tratamento+com+Mounjaro."
            className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Consulta
          </Link>
        </div>
      </section>
    </main>
  )
}

