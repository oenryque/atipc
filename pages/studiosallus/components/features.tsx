import { Dumbbell, Users, Clock, Heart } from "lucide-react"
import siteData from "../data/siteData.json"

// Mapeia os ícones para os nomes no JSON
const iconMap = {
  Dumbbell: <Dumbbell className="h-8 w-8 text-primary" />,
  Heart: <Heart className="h-8 w-8 text-primary" />,
  Spa: <Heart className="h-8 w-8 text-primary" />,
  // Adicione outros ícones conforme necessário
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{siteData.features.titulo}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.features.lista.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{IconComponent}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.titulo}</h3>
                <p className="text-gray-600">{feature.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

