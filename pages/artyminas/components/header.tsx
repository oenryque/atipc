"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <Image
            src={
              isScrolled
                ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%208-aW2KbqpG1A1OpXiyrp2KW8Ys31bPoi.png"
                : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%209-WxEun1OkHAeVUEqiBFfdLPSmyI21zT.png"
            }
            alt="ArtyMinas Logo"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#sobre" isScrolled={isScrolled}>
            Sobre
          </NavLink>
          <NavLink href="#servicos" isScrolled={isScrolled}>
            Serviços
          </NavLink>
          <NavLink href="#contato" isScrolled={isScrolled}>
            Contato
          </NavLink>
          <Link
            href="https://wa.me/5531984697431?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Orçamento
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col space-y-4">
          <MobileNavLink href="#sobre" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </MobileNavLink>
          <MobileNavLink href="#servicos" onClick={() => setIsMenuOpen(false)}>
            Serviços
          </MobileNavLink>
          <MobileNavLink href="#contato" onClick={() => setIsMenuOpen(false)}>
            Contato
          </MobileNavLink>
          <Link
            href="https://wa.me/5531984697431?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors text-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            Solicitar Orçamento
          </Link>
        </div>
      )}
    </header>
  )
}

function NavLink({
  href,
  children,
  isScrolled,
}: {
  href: string
  children: React.ReactNode
  isScrolled: boolean
}) {
  return (
    <Link
      href={href}
      className={`transition-colors ${
        isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary-light"
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="text-foreground hover:text-primary transition-colors block py-2" onClick={onClick}>
      {children}
    </Link>
  )
}

