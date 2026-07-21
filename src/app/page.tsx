"use client";

import { useState, useEffect } from "react";
import type { Alojamiento } from "@/types";
import { ALOJAMIENTOS_MOCK } from "@/data/mock";
import TopNavbar from "@/components/shared/TopNavbar";
import MobileNavigation from "@/components/shared/MobileNavigation";
import ListingCard from "@/components/listing/ListingCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("alojamientos");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat) setActiveCategory(cat);
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    window.history.replaceState(null, "", `/?category=${category}`);
  };
  const [checkIn, setCheckIn] = useState(() => {
    const d = new Date();
    return d.toISOString().split("T")[0];
  });
  const [checkOut, setCheckOut] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [guests, setGuests] = useState(1);
  const [alojamientos, setAlojamientos] = useState<Alojamiento[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setAlojamientos(ALOJAMIENTOS_MOCK);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filtrados = alojamientos.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = item.type === activeCategory;
    const matchesCapacity = guests <= 3 || (item.capacity ?? 1) >= guests;
    return matchesSearch && matchesCategory && matchesCapacity;
  });

  const sectionTitle =
    activeCategory === "alojamientos" ? "Alojamientos populares en Viña del Mar" :
    activeCategory === "experiencias" ? "Experiencias mejor calificadas" :
    "Servicios destacados para tu viaje";

  const sectionSubtitle =
    activeCategory === "alojamientos" ? "Disponibles cerca de La Serena este fin de semana" :
    activeCategory === "experiencias" ? "Descubre más experiencias únicas" :
    "Más servicios disponibles";

  return (
    <div className="flex min-h-screen flex-col bg-white pb-16 md:pb-0">
      <TopNavbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        guests={guests}
        setGuests={setGuests}
      />

      <main className="flex-1">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-3">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#FF385C]" />
              <p className="text-sm text-gray-500">Buscando alojamientos...</p>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-7xl space-y-10 px-4 py-6 md:px-8">
            {/* Sección 1: Destacados */}
            {filtrados.filter((i) => i.isGuestFavorite).length > 0 && (
              <section>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">
                    {sectionTitle}
                  </h2>
                  <button className="text-sm font-semibold text-gray-900 hover:underline">
                    Mostrar todos →
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
                  {filtrados.filter((i) => i.isGuestFavorite).map((item) => (
                    <ListingCard key={item.id} alojamiento={item} />
                  ))}
                </div>
              </section>
            )}

            {/* Sección 2: Más opciones */}
            {filtrados.filter((i) => !i.isGuestFavorite).length > 0 && (
              <section>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">
                    {sectionSubtitle}
                  </h2>
                  <button className="text-sm font-semibold text-gray-900 hover:underline">
                    Mostrar todos →
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
                  {filtrados.filter((i) => !i.isGuestFavorite).map((item) => (
                    <ListingCard key={item.id} alojamiento={item} />
                  ))}
                </div>
              </section>
            )}

            {filtrados.length === 0 && (
              <div className="flex items-center justify-center py-20">
                <p className="text-sm text-gray-500">
                  No se encontraron alojamientos.
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Elemento flotante global de transparencia de precios */}
      {!loading && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <button className="flex items-center gap-2 rounded-full bg-rose-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-rose-800">
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM7 4h2v2H7V4zm0 3h2v5H7V7z" />
            </svg>
            Los precios incluyen todas las tarifas
          </button>
        </div>
      )}

      <MobileNavigation />
    </div>
  );
}
