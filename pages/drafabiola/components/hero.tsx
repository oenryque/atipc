"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const moveX = (clientX - innerWidth / 2) / 50
      const moveY = (clientY - innerHeight / 2) / 50

      imageRef.current.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-r from-white to-secondary">
      <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-5 z-0"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Saúde e Beleza com a <span className="text-primary">Dra. Fabiola Helena</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Médica especialista em Endocrinologia e Metabologia, com protocolos personalizados para emagrecimento
              saudável e bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#services" className="btn-primary">
                Conheça Nossos Serviços
              </Link>
              <Link href="#contact" className="btn-secondary">
                Agende sua Consulta
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={`Paciente ${i}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium">+500 pacientes</div>
                <div className="text-xs text-gray-500">satisfeitos</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-70"></div>
            <div className="relative z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2811%29-JfwtTGJDLgcFI19TvZRV8qqOW8Jdh2.png"
                alt="Dra. Fabiola Helena"
                width={500}
                height={700}
                className="mx-auto animate-float"
                priority
              />
            </div>
            <div
              className="absolute top-1/4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-sm font-medium text-primary">CRM 1531/AC</div>
              <div className="text-xs">Médica Especialista</div>
            </div>
            <div
              className="absolute bottom-1/4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-sm font-medium text-primary">Endocrinologia</div>
              <div className="text-xs">Pós-graduada</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

