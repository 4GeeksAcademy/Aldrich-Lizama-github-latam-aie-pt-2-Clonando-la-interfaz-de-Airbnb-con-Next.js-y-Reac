/** Interfaz base para un alojamiento en la lista de resultados */
export interface Alojamiento {
  id: string;
  title: string;
  location: string;
  rating: number;
  price: number;
  dates: string;
  imageUrl: string;
  category: string;
  reviewsCount: number;
  nights: number;
  isGuestFavorite?: boolean;
  type: "alojamientos" | "experiencias" | "servicios";
  duration?: string;
  hostLanguage?: string;
  capacity?: number;
}

/** Interfaz extendida para la vista de detalle de un alojamiento */
export interface HabitacionDetalle extends Alojamiento {
  hostName: string;
  hostAvatar: string;
  hostYears: number;
  description: string;
  amenities: string[];
  photos: string[];
}
