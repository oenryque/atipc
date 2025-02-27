"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const handleContact = () => {
    window.open(
      "https://wa.me/554796253812?text=Olá%20gostaria%20de%20solicitar%20serviços%20para%20minha%20empresa",
      "_blank",
    )
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
      } else {
        videoRef.current.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "videoEnded") {
        setIsPlaying(false)
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-32">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col justify-center space-y-4 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Transformando ideias em <span className="gradient-text">soluções empresariais</span>
            </h1>
            <motion.div
              className="relative w-full max-w-3xl mx-auto aspect-video mb-8 mt-6"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to opacity-20 blur-2xl" />
              <iframe
                ref={videoRef}
                src="https://www.youtube.com/embed/ww4rzQOKnqs?enablejsapi=1&autoplay=0&controls=0&showinfo=0&rel=0&loop=1&playlist=ww4rzQOKnqs&modestbranding=1&iv_load_policy=3&disablekb=1"
                title="ATIPC - soluções empresariais"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg cursor-pointer z-10"
                onClick={toggleVideo}
              ></iframe>
            </motion.div>
            <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
              Desenvolvimento de sistemas empresariais B2B, B2C e internos para impulsionar seu negócio.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to text-white"
              onClick={handleContact}
            >
              Comece Agora
            </Button>
            <Button size="lg" variant="outline" className="text-white" onClick={handleContact}>
              Saiba Mais
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

