"use client";

import { useState, useEffect, useMemo } from "react";
import type { Alojamiento } from "@/types";
import { ALOJAMIENTOS_MOCK } from "@/data/mock";
import ListingCard from "@/components/listing/ListingCard";
import CatalogHeader from "@/components/shared/CatalogHeader";
import MapPlaceholder from "@/components/shared/MapPlaceholder";
import MobileNavigation from "@/components/shared/MobileNavigation";

export default function CatalogPage() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
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

  const ordenados = useMemo(
    () =>
      [...alojamientos].sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      ),
    [alojamientos, sortOrder]
  );

  return (
    <div className="flex min-h-screen flex-col bg-white pb-16 md:pb-0">
      <CatalogHeader
        resultCount={ordenados.length}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      <main className="flex-1">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-sm text-gray-500">Cargando resultados...</p>
          </div>
        ) : (
          <div className="md:flex md:justify-center">
            <div className="flex-1 px-4 py-4 md:max-w-6xl md:px-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {ordenados.map((item) => (
                  <ListingCard key={item.id} alojamiento={item} />
                ))}
              </div>
            </div>
            <MapPlaceholder />
          </div>
        )}
      </main>

      <MobileNavigation />
    </div>
  );
}