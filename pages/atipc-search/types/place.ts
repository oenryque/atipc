export interface Place {
  place_id: string
  name: string
  formatted_address: string
  geometry: {
    location: {
      lat: number
      lng: number
    }
  }
  website?: string
  reviews?: {
    author_name: string
    rating: number
    text: string
  }[]
  photos?: {
    photo_reference: string
  }[]
}

