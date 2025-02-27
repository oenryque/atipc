import type { Place } from "@/types/place"
import Image from "next/image"
import { Download, Star, Globe, Share2 } from "lucide-react"
import { useState } from "react"

interface PlacesListProps {
  places: Place[]
}

export default function PlacesList({ places }: PlacesListProps) {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null)

  const downloadImage = async (imageUrl: string, placeName: string) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${placeName.toLowerCase().replace(/\s+/g, "-")}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Erro ao baixar imagem:", error)
    }
  }

  const isValidWebsite = (url?: string) => {
    if (!url) return false
    return !url.includes("instagram.com") && !url.includes("facebook.com") && !url.includes("twitter.com")
  }

  return (
    <div className="grid gap-6">
      {places.map((place) => (
        <div
          key={place.place_id}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
        >
          <div className="relative">
            {place.photos && place.photos.length > 0 ? (
              <div className="relative h-80">
                <Image
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
                  alt={place.name}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() =>
                    downloadImage(
                      `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
                      place.name,
                    )
                  }
                  className="absolute bottom-4 right-4 p-3 bg-black/60 rounded-full hover:bg-black/80 transition-colors"
                >
                  <Download size={20} />
                </button>
              </div>
            ) : (
              <div className="h-40 bg-gray-700/50 flex items-center justify-center">
                <p className="text-gray-400">Sem imagens disponíveis</p>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{place.name}</h2>
              {place.reviews && place.reviews.length > 0 && (
                <div className="flex items-center gap-1 bg-gray-700/50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">
                    {(place.reviews.reduce((acc, review) => acc + review.rating, 0) / place.reviews.length).toFixed(1)}
                  </span>
                </div>
              )}
            </div>

            <p className="text-gray-300 mb-2">{place.formatted_address}</p>
            <p className="text-sm text-gray-400 mb-4">
              Latitude: {place.geometry.location.lat}, Longitude: {place.geometry.location.lng}
            </p>

            {place.website && (
              <div className="flex items-center gap-2 mb-4">
                {isValidWebsite(place.website) ? (
                  <>
                    <Globe className="w-5 h-5 text-blue-400" />
                    <a
                      href={place.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {place.website}
                    </a>
                  </>
                ) : (
                  <>
                    <Share2 className="w-5 h-5 text-purple-400" />
                    <a
                      href={place.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:underline"
                    >
                      {place.website}
                    </a>
                  </>
                )}
              </div>
            )}

            {place.reviews && place.reviews.length > 0 && (
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-4">Avaliações</h3>
                <div className="grid gap-4">
                  {place.reviews.map((review, index) => (
                    <div key={index} className="bg-gray-700/30 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-200">{review.author_name}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

