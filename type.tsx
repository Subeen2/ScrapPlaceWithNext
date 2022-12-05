export interface Place {
  placename: string
  address: string
  openingHours: string
  breakTime: string
  offDay: string
  contact: string
}

export interface PlaceProps {
  place: Place
}

declare global {
  interface Window {
    kakao: any
  }
}
