import * as XLSX from "xlsx"
import type { Place } from "@/types/place"

export const exportToExcel = async (places: Place[]) => {
  // Função para converter URL da imagem em base64
  const getImageBase64 = async (imageUrl: string): Promise<string> => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      })
    } catch (error) {
      console.error("Erro ao converter imagem:", error)
      return ""
    }
  }

  // Preparar os dados para exportação
  const exportData = await Promise.all(
    places.map(async (place) => {
      const imageUrl = place.photos?.[0]
        ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        : ""

      const imageBase64 = imageUrl ? await getImageBase64(imageUrl) : ""

      return {
        Nome: place.name,
        Endereço: place.formatted_address,
        Latitude: place.geometry.location.lat,
        Longitude: place.geometry.location.lng,
        Site: isValidWebsite(place.website) ? place.website : "",
        "Rede Social": !isValidWebsite(place.website) && place.website ? place.website : "",
        "Avaliação Média": calculateAverageRating(place.reviews),
        "Número de Avaliações": place.reviews?.length || 0,
        Imagem: imageBase64,
        Avaliações:
          place.reviews?.map((review) => `${review.author_name} (${review.rating}★): ${review.text}`).join("\n") || "",
      }
    }),
  )

  // Criar planilha
  const ws = XLSX.utils.json_to_sheet(exportData)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, "Lugares")

  // Ajustar largura das colunas
  const colWidths = Object.keys(exportData[0] || {}).map((key) => ({
    wch: Math.max(20, key.length),
  }))
  ws["!cols"] = colWidths

  // Exportar arquivo
  XLSX.writeFile(wb, "lugares_detalhados.xlsx")
}

const isValidWebsite = (url?: string) => {
  if (!url) return false
  return !url.includes("instagram.com") && !url.includes("facebook.com") && !url.includes("twitter.com")
}

const calculateAverageRating = (reviews?: { rating: number }[]) => {
  if (!reviews || reviews.length === 0) return 0
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return (sum / reviews.length).toFixed(1)
}

