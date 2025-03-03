import Link from "next/link"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dra. Fabiola Helena</h3>
            <p className="text-gray-400 mb-4">
              Médica especialista em Endocrinologia e Metabologia, com foco em emagrecimento saudável e bem-estar.
            </p>
            <p className="text-gray-400">CRM 1531/AC</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mounjaro" className="text-gray-400 hover:text-white transition-colors">
                  Mounjaro
                </Link>
              </li>
              <li>
                <Link href="/bodyshape" className="text-gray-400 hover:text-white transition-colors">
                  BodyShape
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Bioimpedância
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Telemedicina
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <Link
                  href="https://api.whatsapp.com/send/?phone=5568999920138&text=Olá.+Vim+através+do+site+da+Dra.+Fabiola+Helena,+gostaria+de+mais+informações."
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (68) 99992-0138
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-400">contato@drafabiolahelena.com.br</span>
              </li>
              <li className="flex items-center space-x-4">
                <Link
                  href="https://www.instagram.com/drafabiolahelena"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/fabiolahelena.souza/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dra. Fabiola Helena. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

