"use client";

import { useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ALOJAMIENTOS_MOCK } from "@/data/mock";
import { useFavorites } from "@/context/FavoritesContext";
import TopNavbar from "@/components/shared/TopNavbar";
import MobileNavigation from "@/components/shared/MobileNavigation";
import ListingCard from "@/components/listing/ListingCard";

export default function ProfilePage() {
  const router = useRouter();
  const { favorites } = useFavorites();

  const favoritos = useMemo(
    () => ALOJAMIENTOS_MOCK.filter((item) => favorites.includes(item.id)),
    [favorites]
  );

  const goToCategory = useCallback(
    (category: string) => {
      router.push(`/?category=${category}`);
    },
    [router]
  );

  return (
    <div className="flex min-h-screen flex-col bg-white pb-16 md:pb-0">
      <TopNavbar
        searchQuery=""
        setSearchQuery={() => {}}
        activeCategory="alojamientos"
        setActiveCategory={goToCategory}
        checkIn=""
        setCheckIn={() => {}}
        checkOut=""
        setCheckOut={() => {}}
        guests={1}
        setGuests={() => {}}
      />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 md:px-8">
        {/* Encabezado del perfil */}
        <div className="mb-8 flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#FF385C] to-[#FF5A5F] text-3xl font-bold text-white shadow-md">
            U
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Usuario</h1>
            <p className="text-sm text-gray-500">
              Miembro desde 2025 · {favoritos.length} favoritos guardados
            </p>
          </div>
        </div>

        {/* Sección de favoritos */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Mis favoritos</h2>
              <p className="text-sm text-gray-500">
                Alojamientos, experiencias y servicios que te han gustado
              </p>
            </div>
          </div>

          {favoritos.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {favoritos.map((item) => (
                <ListingCard key={item.id} alojamiento={item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 py-20">
              <svg
                className="mb-4 h-16 w-16 text-gray-300"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M16 28c-0.5 0-1-0.2-1.4-0.5l-10.2-9.6c-2.8-2.8-2.8-7.4 0-10.2s7.4-2.8 10.2 0l1.4 1.4 1.4-1.4c2.8-2.8 7.4-2.8 10.2 0s2.8 7.4 0 10.2l-10.2 9.6c-0.4 0.3-0.9 0.5-1.4 0.5z" />
              </svg>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                Sin favoritos aún
              </h3>
              <p className="max-w-sm text-center text-sm text-gray-500">
                Empieza a explorar alojamientos y haz clic en el corazón para
                guardar tus favoritos aquí.
              </p>
            </div>
          )}
        </section>
      </main>

      <MobileNavigation />
    </div>
  );
}