"use client";

interface GuestCounterProps {
  guestCount: number;
  onGuestChange: (count: number) => void;
}

const GuestCounter: React.FC<GuestCounterProps> = ({ guestCount, onGuestChange }) => {
  return (
    <div className="mb-4 rounded-lg border border-gray-300 p-4">
      <p className="mb-2 text-xs font-semibold text-gray-700">HUÉSPEDES</p>
      <div className="flex items-center justify-between">
        <button
          onClick={() => onGuestChange(Math.max(1, guestCount - 1))}
          disabled={guestCount <= 1}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 disabled:opacity-30"
          aria-label="Reducir huéspedes"
        >
          <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 8h12" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>
        <span className="text-base font-medium">{guestCount}</span>
        <button
          onClick={() => onGuestChange(Math.min(5, guestCount + 1))}
          disabled={guestCount >= 5}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 disabled:opacity-30"
          aria-label="Aumentar huéspedes"
        >
          <svg className="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 8h12M8 2v12" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GuestCounter;