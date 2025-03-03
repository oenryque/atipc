"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
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
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold text-primary">Dra. Fabiola</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-primary transition-colors">
            Início
          </Link>
          <Link href="#about" className="text-gray-800 hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link href="#services" className="text-gray-800 hover:text-primary transition-colors">
            Serviços
          </Link>
          <Link href="/bodyshape" className="text-gray-800 hover:text-primary transition-colors">
            BodyShape
          </Link>
          <Link href="/mounjaro" className="text-gray-800 hover:text-primary transition-colors">
            Mounjaro
          </Link>
          <Link href="#contact" className="text-gray-800 hover:text-primary transition-colors">
            Contato
          </Link>
        </nav>

        <Link
          href="https://api.whatsapp.com/send/?phone=5568999920138&text=Olá.+Vim+através+do+site+da+Dra.+Fabiola+Helena,+gostaria+de+mais+informações."
          className="hidden md:block btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar Consulta
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="#about"
              className="text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#services"
              className="text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="/bodyshape"
              className="text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              BodyShape
            </Link>
            <Link
              href="/mounjaro"
              className="text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mounjaro
            </Link>
            <Link
              href="#contact"
              className="text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=5568999920138&text=Olá.+Vim+através+do+site+da+Dra.+Fabiola+Helena,+gostaria+de+mais+informações."
              className="btn-primary text-center"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

