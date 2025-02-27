"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "R$ 499",
    period: "/mês",
    description: "Ideal para pequenas empresas",
    features: [
      "Até 50 funcionários",
      "Controle de ponto básico",
      "Folha de pagamento",
      "Relatórios essenciais",
      "Suporte por email",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 999",
    period: "/mês",
    description: "Para empresas em crescimento",
    features: [
      "Até 200 funcionários",
      "Reconhecimento facial",
      "Geolocalização",
      "Dashboard analítico",
      "Suporte prioritário",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    period: "",
    description: "Para grandes corporações",
    features: [
      "Funcionários ilimitados",
      "Recursos personalizados",
      "API completa",
      "Integração personalizada",
      "Suporte 24/7",
    ],
  },
]

export function GestoRHPricing() {
  const handleContact = () => {
    window.open("https://wa.me/5547962538812?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20GestoRH", "_blank")
  }

  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Planos e <span className="gradient-text">Preços</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
            Escolha o plano ideal para o tamanho da sua empresa
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-lg border ${
                plan.popular ? "border-brand-gradient-via" : "border-zinc-800"
              } bg-zinc-950 p-8`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-gradient-via text-white text-sm px-3 py-1 rounded-bl">
                  Mais Popular
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-zinc-400 mt-1">{plan.description}</p>
                </div>
                <div className="flex items-end">
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <div className="text-zinc-400 ml-1">{plan.period}</div>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-gradient-via mr-2" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-gradient-from via-brand-gradient-via to-brand-gradient-to"
                      : "bg-zinc-800"
                  } text-white`}
                  onClick={handleContact}
                >
                  Começar Agora
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

