import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black/50 backdrop-blur-md">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Sobre a ATIPC</h3>
            <p className="text-sm text-zinc-400">
              Transformando ideias em soluções empresariais através de sistemas personalizados e inovadores.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>Sistemas B2B e B2C</li>
              <li>Sistemas Internos</li>
              <li>Automação e IA</li>
              <li>Soluções SaaS</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>contato@atipc.com</li>
              <li>(47) 96253-8812</li>
              <li>Ribeirão Preto, SP</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://www.linkedin.com/company/atipcbrasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn da ATIPC
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
          <p>&copy; {new Date().getFullYear()} ATIPC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

