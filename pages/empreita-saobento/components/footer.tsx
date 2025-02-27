import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2810%29-NkYwe8e27CSM62iEBk9Ek7wrQz47eC.png"
                alt="Empreita São Bento Logo"
                width={200}
                height={67}
                className="w-48"
              />
            </div>
            <p className="mb-4">
              Soluções completas para condomínios, indústrias e empresas, garantindo segurança e eficiência.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4" />
              <span>Atendimento 24h</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servicos" className="hover:underline">
                  CFTV
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:underline">
                  Redes e Interfonia
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:underline">
                  Sistemas de Alarme de Incêndio
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:underline">
                  Elétrica em Geral e Automações
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="hover:underline">
                  Controle de Acesso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Avenida Luiz Lapena, nº 9, Araraquara - SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+5516996244368" className="hover:underline">
                  (16) 99624-4368
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+5516997156132" className="hover:underline">
                  (16) 99715-6132
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:saobentoeletrica@yahoo.com" className="hover:underline">
                  saobentoeletrica@yahoo.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
            <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
            <p className="mb-2">Sábado: 8h às 12h</p>
            <p className="mb-4">Emergências: 24h por dia</p>
            <a
              href="https://wa.me/5516996244368"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-black font-medium px-4 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Atendimento via WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Empreita São Bento. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

