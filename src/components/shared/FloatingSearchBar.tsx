"use client";

interface FloatingSearchBarProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

const FloatingSearchBar: React.FC<FloatingSearchBarProps> = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex items-center divide-x divide-gray-200 rounded-full border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
        {/* Dónde */}
        <button className="flex flex-col items-start px-6 py-3 text-left hover:bg-gray-50 rounded-l-full transition-colors">
          <span className="text-xs font-semibold text-gray-900">Dónde</span>
          <span className="text-sm text-gray-500">Agrega un destino</span>
        </button>

        {/* Fechas */}
        <button className="flex flex-col items-start px-6 py-3 text-left hover:bg-gray-50 transition-colors">
          <span className="text-xs font-semibold text-gray-900">Fechas</span>
          <span className="text-sm text-gray-500">Agrega fechas</span>
        </button>

        {/* Quién */}
        <div className="flex items-center gap-3 pl-6 pr-3 py-3 hover:bg-gray-50 rounded-r-full transition-colors">
          <button className="flex flex-col items-start text-left">
            <span className="text-xs font-semibold text-gray-900">Quién</span>
            <span className="text-sm text-gray-500">Agrega huéspedes</span>
          </button>
          {/* Botón de búsqueda */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white transition-colors hover:bg-rose-600"
            aria-label="Buscar"
          >
            <svg className="h-4 w-4" viewBox="0 0 32 32" fill="currentColor">
              <path d="M13 0c7.2 0 13 5.8 13 13 0 3.1-1.1 6-2.9 8.2l8.3 8.3-2.1 2.1-8.3-8.3c-2.2 1.8-5.1 2.9-8.2 2.9C5.8 26 0 20.2 0 13S5.8 0 13 0zm0 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingSearchBar;