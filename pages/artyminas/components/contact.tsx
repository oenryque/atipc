import Link from "next/link"
import { MapPin, Phone, MessageSquare } from "lucide-react"

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 animate-on-scroll"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 animate-on-scroll">
            Estamos prontos para transformar sua ideia em realidade. Entre em contato conosco hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Localização</h4>
                  <p className="text-gray-600">Belo Horizonte, Minas Gerais | RUA MARIA DE LOURDES DA CRUZ, 57 - MANTIQUEIRA </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Telefones</h4>
                  <p className="text-gray-600">
                    <Link href="tel:+5531984697431" className="hover:text-primary">
                      +55 31 98469-7431
                    </Link>
                  </p>
                  <p className="text-gray-600">
                    <Link href="tel:+5531972393456" className="hover:text-primary">
                      +55 31 97239-3456
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">WhatsApp</h4>
                  <p className="text-gray-600">
                    <Link
                      href="https://wa.me/5531984697431?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                      className="hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar orçamento via WhatsApp
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="https://wa.me/5531984697431?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md text-lg font-medium transition-colors inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-5 w-5" />
                Solicitar Orçamento
              </Link>
            </div>
          </div>

          <div className="slide-in-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240097.95827265996!2d-44.13386349453124!3d-19.902649199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b35795e3ad23997!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1708977000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

