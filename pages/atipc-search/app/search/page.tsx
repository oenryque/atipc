"use client"

import type React from "react"

import { useState } from "react"
import type { Place } from "@/types/place"
import PlacesList from "@/components/PlacesList"
import { Download } from "lucide-react"
import FilterSection from "@/components/FilterSection"
import { exportToExcel } from "@/utils/export"

export default function Search() {
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [placeType, setPlaceType] = useState("")
  const [places, setPlaces] = useState<Place[]>([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    noWebsite: false,
    hasPhotos: false,
    hasReviews: false,
  })

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setPlaces([])

    try {
      const response = await fetch(`/api/search?city=${city}&state=${state}&type=${placeType}`)
      const data = await response.json()

      if (Array.isArray(data)) {
        setPlaces(data)
      } else {
        console.error("Dados recebidos não são um array:", data)
        setPlaces([])
      }
    } catch (error) {
      console.error("Erro na busca:", error)
      setPlaces([])
    } finally {
      setLoading(false)
    }
  }

  const getFilteredPlaces = () => {
    if (!Array.isArray(places)) return []

    return places.filter((place) => {
      if (filters.noWebsite && isValidWebsite(place.website)) return false
      if (filters.hasPhotos && (!place.photos || place.photos.length === 0)) return false
      if (filters.hasReviews && (!place.reviews || place.reviews.length === 0)) return false
      return true
    })
  }

  const isValidWebsite = (url?: string) => {
    if (!url) return false
    return !url.includes("instagram.com") && !url.includes("facebook.com") && !url.includes("twitter.com")
  }

  const handleExportAll = async () => {
    if (!Array.isArray(places) || places.length === 0) return
    await exportToExcel(places)
  }

  const filteredPlaces = getFilteredPlaces()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            <span className="text-white">ATIPC</span> NEGÓCIOS
          </h1>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                value={`${city}${state ? `, ${state}` : ""}`}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const lastChar = inputValue[inputValue.length - 1];

                  // Permitir espaço no final do input
                  if (lastChar === ' ') {
                    setCity(inputValue);
                    return;
                  }

                  const [cityVal, stateVal] = inputValue.split(",");
                  setCity(cityVal.trim());
                  setState(stateVal?.trim() || "");
                }}
                placeholder="Digite o local, ex: Araraquara, São Paulo"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            <div className="md:w-64">
              <select
                value={placeType}
                onChange={(e) => setPlaceType(e.target.value)}
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all"
              >
                <option value="">Selecione o tipo de lugar</option>
                <option value="gym">Academia</option>
                <option value="restaurant">Restaurante</option>
                <option value="park">Parque</option>
                <option value="museum">Museu</option>
                <option value="library">Biblioteca</option>
              </select>
            </div>
            <button
              onClick={handleSearch}
              className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Buscar
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1 space-y-4">
              <FilterSection filters={filters} setFilters={setFilters} />
              {places.length > 0 && (
                <button
                  onClick={handleExportAll}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                >
                  <Download size={20} />
                  Exportar Todos os Dados
                </button>
              )}
            </div>
            <div className="md:col-span-3">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                </div>
              ) : (
                <PlacesList places={filteredPlaces} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

