"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import siteData from "@/data/siteData.json"

export default function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="py-4 px-6 shadow-sm" style={{ backgroundColor: siteData.cores.headerBackground }}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {siteData.logo ? (
            <Image
              src={siteData.logo || "/placeholder.svg"}
              alt={siteData.nome}
              width={120}
              height={60}
              style={{
                width: "auto",
                height: "60px",
              }}
            />
          ) : (
            <span className="text-2xl font-bold" style={{ color: siteData.cores.headerText }}>
              {siteData.nome}
            </span>
          )}
        </Link>
        <nav className="hidden md:flex space-x-6">
          {siteData.header.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:text-primary transition-colors"
              style={{ color: siteData.cores.headerText }}
            >
              {link.nome}
            </a>
          ))}
        </nav>
        <Button

          style={{
            backgroundColor: siteData.cores.primary,
            color: siteData.cores.buttonText,
          }}
        >
          Matricule-se
        </Button>
      </div>
    </header>
  )
}

