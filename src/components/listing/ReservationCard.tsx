"use client";

import MobileReservationBar from "./MobileReservationBar";
import GuestCounter from "./GuestCounter";
import CostBreakdown from "./CostBreakdown";

interface ReservationCardProps {
  price: number;
  guestCount: number;
  onGuestChange: (count: number) => void;
}

const ReservationCard: React.FC<ReservationCardProps> = ({
  price,
  guestCount,
  onGuestChange,
}) => {
  return (
    <>
      <MobileReservationBar price={price} />

      <div className="hidden md:block md:sticky md:top-24 md:col-span-1">
        <div className="rounded-xl border border-gray-200 p-6 shadow-lg">
          <div className="mb-4 flex items-baseline gap-1">
            <span className="text-2xl font-semibold">${price}</span>
            <span className="text-sm text-gray-500">/ noche</span>
          </div>

          <GuestCounter guestCount={guestCount} onGuestChange={onGuestChange} />

          <CostBreakdown price={price} nights={3} />

          <button className="w-full rounded-lg bg-[#ff385c] py-3 font-semibold text-white transition-colors hover:bg-[#e31c5f]">
            Reservar
          </button>
        </div>
      </div>
    </>
  );
};

export default ReservationCard;