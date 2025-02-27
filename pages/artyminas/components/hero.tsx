import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tltPSa6lBhQ3kcl1KmI5Kq1IFldz3w.png"
          alt="Projeto de construção"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <div className="slide-in-left">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%208-aW2KbqpG1A1OpXiyrp2KW8Ys31bPoi.png"
              alt="ArtyMinas Logo"
              width={250}
              height={80}
              className="mb-8"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-in-left">
            Transformando ideias em experiências memoráveis
          </h1>

          <p className="text-xl md:text-2xl mb-8 slide-in-left">
            Especialistas na criação, fabricação e montagem de estandes para feiras, eventos corporativos, entrevistas e
            conferências.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 slide-in-left">
            <Link
              href="#servicos"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md text-lg font-medium transition-colors inline-block text-center"
            >
              Nossos Serviços
            </Link>

            <Link
              href="https://wa.me/5531984697431?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
              className="bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-md text-lg font-medium transition-colors inline-block text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}

