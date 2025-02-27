"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function GestoRHHero() {
  const handleContact = () => {
    window.open("https://wa.me/4796253812?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20GestoRH", "_blank")
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-32">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Revolucione sua Gestão de RH com o <span className="gradient-text">GestoRH</span>
            </h1>
            <p className="text-xl text-zinc-200">
              Sistema completo de gestão de funcionários com reconhecimento facial, geolocalização e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to text-white"
                onClick={handleContact}
              >
                Agende uma Demo
              </Button>
              <Button size="lg" variant="outline" onClick={handleContact}>
                Fale com um Especialista
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to opacity-20 blur-3xl" />
            <motion.div
              className="relative w-full aspect-video"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/vtOChPleiWo?autoplay=1&mute=1&loop=1&playlist=vtOChPleiWo&controls=0&showinfo=0&rel=0"
                title="GestoRH Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

