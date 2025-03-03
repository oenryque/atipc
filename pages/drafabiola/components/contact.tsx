"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">Agende sua consulta ou tire suas dúvidas pelo WhatsApp</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Endereço</h4>
                  <p className="text-gray-600">Av. Getúlio Vargas, 1901 - Bosque</p>
                  <p className="text-gray-600">Rio Branco - AC, 69900-613</p>
                  <p className="text-gray-600">Brasil</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">WhatsApp</h4>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=5568999920138&text=Olá.+Vim+através+do+site+da+Dra.+Fabiola+Helena,+gostaria+de+mais+informações."
                    className="text-gray-600 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (68) 99992-0138
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/drafabiolahelena"
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-6 w-6 text-primary" />
                </Link>
                <Link
                  href="https://www.facebook.com/fabiolahelena.souza/"
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-6 w-6 text-primary" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2448792711685!2d-67.81814792511866!3d-9.998461690198663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917f8d3da5c32f27%3A0x34d676128d1aef12!2sAv.%20Get%C3%BAlio%20Vargas%2C%201901%20-%20Bosque%2C%20Rio%20Branco%20-%20AC%2C%2069900-613!5e0!3m2!1spt-BR!2sbr!4v1709509549044!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

