"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
    setIsMenuOpen(false)
  }

  const handleContact = () => {
    window.open(
      "https://wa.me/47962538812?text=Olá%20gostaria%20de%20solicitar%20serviços%20para%20minha%20empresa",
      "_blank",
    )
  }

  const menuItems = [
    { href: "#specialties", label: "Especialidades" },
    { href: "#our-process", label: "Processo" },
    { href: "#product-management", label: "Gestão de Produtos" },
    { href: "#training", label: "Treinamentos" },
    { href: "#project-gallery", label: "Projetos" },
    { href: "#technologies", label: "Tecnologias" },
    { href: "#articles", label: "Artigos" },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="site-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-open-DTT9whx218iq3jSbkRZpuFOvqVRDPa.png"
            alt="ATIPC Logo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-white/70 transition-colors"
              onClick={handleScroll}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <Button variant="default" size="sm" onClick={handleContact} className="hidden md:inline-flex">
          Contato
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-white/70 transition-colors"
                  onClick={handleScroll}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="default" size="sm" onClick={handleContact} className="w-full">
                Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  )
}

