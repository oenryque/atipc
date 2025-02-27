import { NextResponse } from "next/server"
import type { Place } from "@/types/place"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")
  const state = searchParams.get("state")
  const type = searchParams.get("type")

  if (!city || !state || !type) {
    return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
  }

  const query = `${type} in ${city}, ${state}`
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`,
    )

    const data = await response.json()

    if (data.status !== "OK") {
      throw new Error("Failed to fetch places")
    }

    const detailedPlaces: Place[] = await Promise.all(
      data.results.slice(0, 100).map(async (place: any) => {
        const detailsResponse = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=name,formatted_address,geometry,website,reviews,photos&key=${apiKey}`,
        )
        const detailsData = await detailsResponse.json()
        return detailsData.result
      }),
    )

    return NextResponse.json(detailedPlaces)
  } catch (error) {
    console.error("Error fetching places:", error)
    return NextResponse.json({ error: "Failed to fetch places" }, { status: 500 })
  }
}

