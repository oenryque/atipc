"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

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

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2810%29-NkYwe8e27CSM62iEBk9Ek7wrQz47eC.png"
              alt="Empreita São Bento Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#sobre" className="hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#servicos" className="hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="#parceiros" className="hover:text-primary transition-colors">
              Parceiros
            </Link>
            <Link href="#contato" className="hover:text-primary transition-colors">
              Contato
            </Link>
            <Button variant="outline" size="icon" onClick={toggleTheme} className="ml-2">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="https://wa.me/5516996244368" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <Link href="#sobre" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                Sobre
              </Link>
              <Link href="#servicos" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                Serviços
              </Link>
              <Link href="#parceiros" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                Parceiros
              </Link>
              <Link href="#contato" className="hover:text-primary transition-colors" onClick={toggleMenu}>
                Contato
              </Link>
              <Button className="flex items-center gap-2 w-full">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/5516996244368" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

