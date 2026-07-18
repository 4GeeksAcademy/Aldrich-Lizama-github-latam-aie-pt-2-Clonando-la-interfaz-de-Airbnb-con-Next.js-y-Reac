"use client";
import { useState } from "react";

interface FavoriteButtonProps {
  isFavorite?: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite: initialFavorite = false }) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  return (
    <button
      className={`absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full p-1.5 transition-all ${
        isFavorite
          ? "bg-white/70"
          : "bg-white/0 hover:bg-white/20"
      }`}
      aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite((prev) => !prev);
      }}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-full w-full"
        fill={isFavorite ? "#ff385c" : "none"}
        stroke={isFavorite ? "#ff385c" : "#222222"}
        strokeWidth="2"
      >
        <path d="M16 28c-0.5 0-1-0.2-1.4-0.5l-10.2-9.6c-2.8-2.8-2.8-7.4 0-10.2s7.4-2.8 10.2 0l1.4 1.4 1.4-1.4c2.8-2.8 7.4-2.8 10.2 0s2.8 7.4 0 10.2l-10.2 9.6c-0.4 0.3-0.9 0.5-1.4 0.5z" />
      </svg>
    </button>
  );
};

export default FavoriteButton;
