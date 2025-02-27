import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <Image
              src="/Frame9.png" // Updated logo source
              alt="ArtyMinas Logo"
              width={180}
              height={60}
              className="mb-6"
            />
            <p className="text-gray-400 mb-6">
              Especialistas na criação, fabricação e montagem de estandes para feiras, eventos corporativos, entrevistas
              e conferências.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#sobre" className="text-gray-400 hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-400 hover:text-primary transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-400 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5531984697431?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                  className="text-gray-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Belo Horizonte, Minas Gerais</li>
              <li>
                <Link href="tel:+5531984697431" className="text-gray-400 hover:text-primary transition-colors">
                  +55 31 98469-7431
                </Link>
              </li>
              <li>
                <Link href="tel:+5531972393456" className="text-gray-400 hover:text-primary transition-colors">
                  +55 31 97239-3456
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">&copy; {currentYear} ArtyMinas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  )
}

