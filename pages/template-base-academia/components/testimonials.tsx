import siteData from "@/data/siteData.json"
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{siteData.testemunhos.titulo}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testemunhos.lista.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    color={i < testimonial.rating ? "#FFD700" : "#e4e5e9"}
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold">{testimonial.autor}</p>
                <p className="text-sm text-gray-500">{testimonial.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

