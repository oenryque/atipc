import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import siteData from "@/data/siteData.json"

export default function Pricing() {
  const plans = siteData.precos.planos;

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Planos de Academia</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{plan.nome}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.preco}
                <span className="text-sm font-normal text-gray-500">/mês</span>
              </p>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                style={{
                  backgroundColor: siteData.cores.primary,
                  color: siteData.cores.buttonText,
                }}
                className="w-full"
              >
                Matricule-se Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

