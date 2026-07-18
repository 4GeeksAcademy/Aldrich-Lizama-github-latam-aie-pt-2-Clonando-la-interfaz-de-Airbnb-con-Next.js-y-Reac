"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import type { HabitacionDetalle } from "@/types";
import { DETALLE_MOCK } from "@/data/mock";
import DetailNavbar from "@/components/shared/DetailNavbar";
import ImageGallery from "@/components/listing/ImageGallery";
import DetailHeader from "@/components/listing/DetailHeader";
import HostInfo from "@/components/listing/HostInfo";
import PropertyDescription from "@/components/listing/PropertyDescription";
import AmenitiesGrid from "@/components/listing/AmenitiesGrid";
import ReservationCard from "@/components/listing/ReservationCard";
import MobileNavigation from "@/components/shared/MobileNavigation";

export default function RoomDetailPage() {
  const params = useParams();
  const [detalle, setDetalle] = useState<HabitacionDetalle | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(1);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setDetalle({ ...DETALLE_MOCK, id: params.id as string });
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-sm text-gray-500">Cargando detalle...</p>
      </div>
    );
  }
  if (!detalle) return null;

  const d = detalle;

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <DetailNavbar />

      <main className="mx-auto max-w-6xl px-4 py-4 md:px-8 md:py-6">
        <ImageGallery photos={d.photos} currentIndex={currentPhotoIndex} onPrev={() => setCurrentPhotoIndex((i) => i - 1)} onNext={() => setCurrentPhotoIndex((i) => i + 1)} />

        <div className="mt-6 md:grid md:grid-cols-[2fr_1fr] md:gap-12">
          <div className="space-y-6">
            <DetailHeader title={d.title} rating={d.rating} reviewsCount={d.reviewsCount} location={d.location} />
            <HostInfo hostName={d.hostName} hostAvatar={d.hostAvatar} hostYears={d.hostYears} />
            <PropertyDescription description={d.description} />
            <AmenitiesGrid amenities={d.amenities} />
          </div>

          <ReservationCard price={d.price} guestCount={guestCount} onGuestChange={setGuestCount} />
        </div>
      </main>

      <ReservationCard price={d.price} guestCount={guestCount} onGuestChange={setGuestCount} />
      <MobileNavigation />
    </div>
  );
}