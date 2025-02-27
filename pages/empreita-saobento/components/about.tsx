"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, CreditCard } from "lucide-react"

export default function About() {
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
    <section id="sobre" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Sobre a Empresa</h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-on-scroll"
            style={{ transitionDelay: "0.2s" }}
          >
            A Empreita São Bento oferece soluções completas para condomínios, indústrias e empresas, garantindo
            segurança e eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll" style={{ transitionDelay: "0.3s" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zI3QQS4R8bl0eg4XuHeLssYBfeLI4E.png"
              alt="Técnico realizando instalação elétrica"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <div className="space-y-8">
              <div className="animate-on-scroll" style={{ transitionDelay: "0.4s" }}>
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Soluções Completas</h3>
                      <p className="text-muted-foreground">
                        Oferecemos serviços integrados de elétrica, segurança e automação para condomínios, indústrias e
                        empresas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-on-scroll" style={{ transitionDelay: "0.5s" }}>
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Atendimento 24h</h3>
                      <p className="text-muted-foreground">
                        Suporte técnico disponível 24 horas por dia, 7 dias por semana, para garantir a continuidade dos
                        seus sistemas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-on-scroll" style={{ transitionDelay: "0.6s" }}>
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <CreditCard className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Parcelamento Facilitado</h3>
                      <p className="text-muted-foreground">
                        Parcelamento em até 48x sem juros, facilitando o investimento em segurança e tecnologia para seu
                        condomínio.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-on-scroll" style={{ transitionDelay: "0.7s" }}>
                <Button size="lg" className="mt-4">
                  <a href="https://wa.me/5516996244368" target="_blank" rel="noopener noreferrer">
                    Fale com um Especialista
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

