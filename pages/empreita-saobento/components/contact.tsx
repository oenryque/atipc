"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Smartphone } from "lucide-react"

export default function Contact() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Contato</h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll"
            style={{ transitionDelay: "0.2s" }}
          >
            Entre em contato conosco para solicitar um orçamento ou tirar dúvidas sobre nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground">Avenida Luiz Lapena, nº 9, Araraquara - SP</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+5516996244368" className="hover:text-primary transition-colors">
                        (16) 99624-4368
                      </a>
                      {" | "}
                      <a href="tel:+5516997156132" className="hover:text-primary transition-colors">
                        (16) 99715-6132
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">E-mail</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:saobentoeletrica@yahoo.com" className="hover:text-primary transition-colors">
                        saobentoeletrica@yahoo.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Smartphone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Atendimento 24h</h3>
                    <p className="text-muted-foreground mb-4">Disponível 24 horas por dia via WhatsApp</p>
                    <Button className="w-full">
                      <a
                        href="https://wa.me/5516996244368"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full"
                      >
                        Falar via WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ transitionDelay: "0.5s" }}>
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8076592106394!2d-48.18291492414868!3d-21.794499560577305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f3e3e6e7b2e9%3A0x7e9e2f3a0d5c2e9a!2sAv.%20Luiz%20Lapena%2C%209%20-%20Araraquara%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1708975421234!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px", borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

