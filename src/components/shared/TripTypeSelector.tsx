"use client";

interface TripType {
  id: string;
  label: string;
  icon: React.ReactNode;
  isNew?: boolean;
}

const TRIP_TYPES: TripType[] = [
  {
    id: "Alojamientos",
    label: "Alojamientos",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 2L2 12v18h10V20h8v10h10V12L16 2z" />
        <rect x="12" y="22" width="8" height="10" />
      </svg>
    ),
  },
  {
    id: "Experiencias",
    label: "Experiencias",
    isNew: true,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="10" r="6" />
        <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" />
        <path d="M22 6l4-4" />
        <path d="M26 6l4-4" />
      </svg>
    ),
  },
  {
    id: "Servicios",
    label: "Servicios",
    isNew: true,
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l6 4" />
      </svg>
    ),
  },
];

interface TripTypeSelectorProps {
  activeType: string;
  onSelect: (type: string) => void;
}

const TripTypeSelector: React.FC<TripTypeSelectorProps> = ({ activeType, onSelect }) => {
  return (
    <div className="flex items-center justify-center gap-0 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-2">
        {TRIP_TYPES.map((type) => {
          const isActive = type.id === activeType;
          return (
            <button
              key={type.id}
              onClick={() => onSelect(type.id)}
              className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-gray-800 hover:border-b-2 hover:border-gray-300"
              }`}
            >
              {type.icon}
              <span>{type.label}</span>
              {type.isNew && (
                <span className="absolute -top-1 -right-1 rounded-full bg-yellow-400 px-1.5 py-0.5 text-[9px] font-bold text-black leading-tight">
                  NOVEDAD
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TripTypeSelector;