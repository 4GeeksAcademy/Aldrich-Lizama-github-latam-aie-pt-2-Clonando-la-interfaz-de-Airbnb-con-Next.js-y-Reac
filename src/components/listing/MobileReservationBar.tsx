"use client";

interface MobileReservationBarProps {
  price: number;
}

const MobileReservationBar: React.FC<MobileReservationBarProps> = ({ price }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white px-4 py-3 md:hidden">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-lg font-semibold">${price}</span>
          <span className="text-sm text-gray-500"> / noche</span>
        </div>
        <button className="rounded-lg bg-[#ff385c] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e31c5f]">
          Reservar
        </button>
      </div>
    </div>
  );
};

export default MobileReservationBar;