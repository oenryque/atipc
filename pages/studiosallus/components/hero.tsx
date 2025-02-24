"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import siteData from "@/data/siteData.json"
import { useState, useEffect } from "react"

export default function Hero() {
  const [bgImage, setBgImage] = useState(siteData.hero.imagem)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = siteData.hero.images || [] // Supondo que você tenha um array de imagens

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Muda a imagem a cada 3 segundos

    return () => clearInterval(interval)
  }, [images.length])

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.querySelector("#pricing")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20 bg-cover bg-center text-white flex flex-col md:flex-row" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0" style={{ backgroundColor: siteData.cores.heroOverlay }}></div>

      <div className="container mx-auto relative z-10 flex-1">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-left">{siteData.hero.titulo}</h1>
          <p className="text-xl mb-8 text-left">{siteData.hero.subtitulo}</p>
          <Button
            size="lg"
            style={{
              backgroundColor: siteData.cores.primary,
              color: siteData.cores.buttonText,
              marginBottom: "20px",
            }}
          >
            Matricule-se Agora
          </Button>
        </div>
      </div>

      <div className="container mx-auto flex-1 relative">
        {images.length > 0 && (
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <img
        src={siteData.hero.imagemFallback || "/placeholder.svg"}
        alt=""
        className="hidden"
        onLoad={() => {
          if (bgImage === siteData.hero.imagem) {
            setBgImage(siteData.hero.imagemFallback)
          }
        }}
      />
    </section>
  )
}

