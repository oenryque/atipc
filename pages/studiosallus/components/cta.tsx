import { Button } from "@/components/ui/button"
import siteData from "@/data/siteData.json"

export default function Cta() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4"
        style={{
          color: siteData.cores.buttonText,
        }}
        >{siteData.cta.titulo}</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto"
        style={{
          color: siteData.cores.buttonText,
        }}
        >
         {siteData.cta.subtitulo}
        </p>
        <Button size="lg"             style={{
              backgroundColor: siteData.cores.secondary,
              color: siteData.cores.buttonText,
            }}
            variant="secondary">
          Matricule-se Agora
        </Button>
      </div>
    </section>
  )
}

