import { Dumbbell, Users, Clock, Heart } from "lucide-react"

const features = [
  {
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    title: "Equipamentos Modernos",
    description: "Treine com os equipamentos mais avançados do mercado.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Aulas em Grupo",
    description: "Participe de aulas dinâmicas e motivadoras.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Horário Flexível",
    description: "Academia aberta 24 horas para sua conveniência.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Bem-estar Total",
    description: "Programas personalizados para saúde e condicionamento.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Benefícios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

