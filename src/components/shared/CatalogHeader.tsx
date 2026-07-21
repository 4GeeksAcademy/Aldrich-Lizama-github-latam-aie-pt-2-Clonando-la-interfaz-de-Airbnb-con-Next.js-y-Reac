"use client";

import Link from "next/link";
import SearchBar from "@/components/shared/SearchBar";

interface CatalogHeaderProps {
  resultCount: number;
  sortOrder: "asc" | "desc";
  onSortChange: (order: "asc" | "desc") => void;
}

const CatalogHeader: React.FC<CatalogHeaderProps> = ({
  resultCount,
  sortOrder,
  onSortChange,
}) => {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="text-xl font-bold text-[#ff385c]">
          🏠 airbnb
        </Link>
        <div className="mx-4 flex-1 max-w-md">
          <SearchBar searchQuery="" onSearchChange={() => {}} />
        </div>
        <div className="w-5" />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pb-3 md:px-8">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">{resultCount}</span> alojamientos encontrados
        </p>
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value as "asc" | "desc")}
          className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700"
        >
          <option value="asc">Precio: menor a mayor</option>
          <option value="desc">Precio: mayor a menor</option>
        </select>
      </div>
    </header>
  );
};

export default CatalogHeader;