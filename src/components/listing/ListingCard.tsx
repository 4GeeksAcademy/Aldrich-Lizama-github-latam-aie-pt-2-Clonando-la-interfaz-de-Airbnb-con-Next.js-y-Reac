import Link from "next/link";
import type { Alojamiento } from "@/types";
import FavoriteButton from "@/components/shared/FavoriteButton";

interface ListingCardProps {
  alojamiento: Alojamiento;
}

const formatCLP = (price: number): string => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const ListingCard: React.FC<ListingCardProps> = ({ alojamiento }) => {
  const { id, title, location, rating, price, imageUrl, reviewsCount, nights, isGuestFavorite, type, duration, hostLanguage } =
    alojamiento;

  const totalPrice = price * nights;

  const priceLabel = type === "servicios" ? `${formatCLP(price)} por persona` : `${formatCLP(totalPrice)} CLP por ${nights} noches`;
  const metaLine = type === "experiencias" && duration ? `Experiencia de ${duration}${hostLanguage ? ` · ${hostLanguage}` : ""}` : null;

  return (
    <Link href={`/rooms/${id}`} className="group block">
      <article className="flex flex-col gap-2">
        {/* Imagen */}
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {isGuestFavorite && (
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm">
              <svg className="h-3 w-3 text-amber-500" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8l-4.2 2.2.8-4.7L1.2 6l4.7-.7L8 1z" />
              </svg>
              Favorito entre huéspedes
            </div>
          )}
          <FavoriteButton />
        </div>

        {/* Información */}
        <div className="flex flex-col gap-0.5 px-1">
          <div className="flex items-center justify-between">
            <h3 className="truncate text-sm font-semibold text-gray-900">
              {location}
            </h3>
            <span className="flex shrink-0 items-center gap-1 text-sm">
              <svg className="h-3 w-3 fill-current" viewBox="0 0 16 16">
                <path d="M8 1l2.1 4.3 4.7.7-3.4 3.3.8 4.7L8 11.8l-4.2 2.2.8-4.7L1.2 6l4.7-.7L8 1z" />
              </svg>
              <span className="font-semibold">{rating}</span>
              <span className="text-gray-500">({reviewsCount})</span>
            </span>
          </div>
          <p className="truncate text-sm text-gray-500">{title}</p>
          {metaLine && <p className="truncate text-xs text-gray-400">{metaLine}</p>}
          <p className="text-sm font-bold text-gray-900">
            {priceLabel}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ListingCard;