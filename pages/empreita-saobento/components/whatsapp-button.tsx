"use client"

import { Phone } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5516996244368"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-black p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  )
}

