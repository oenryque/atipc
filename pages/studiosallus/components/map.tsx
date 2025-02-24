import siteData from "@/data/siteData.json"

export default function Map() {
  return (
    <section id="map" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{siteData.mapa.titulo}</h2>
        <p className="text-center mb-8">{siteData.mapa.endereco}</p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(siteData.mapa.endereco)}&center=${siteData.mapa.coordenadas.lat},${siteData.mapa.coordenadas.lng}`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

