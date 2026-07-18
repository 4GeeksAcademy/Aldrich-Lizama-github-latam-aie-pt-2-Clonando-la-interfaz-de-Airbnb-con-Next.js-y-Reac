"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface TopNavbarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  checkIn: string;
  setCheckIn: (v: string) => void;
  checkOut: string;
  setCheckOut: (v: string) => void;
  guests: number;
  setGuests: (v: number) => void;
}

const CATS = [
  { id: "alojamientos", label: "Alojamientos", icon: "M16 4L2 14v14h10V22h8v6h10V14L16 4zM12 20h8M24 10a3 3 0 100-6 3 3 0 000 6z", isNew: false },
  { id: "experiencias", label: "Experiencias", icon: "M16 12c-3.5 0-6.5 1-8.5 2.5L10 6h12l2.5 8.5C22.5 13 20 12 16 12zM14 2h4M16 22a2 2 0 100-4 2 2 0 000 4z", isNew: true },
  { id: "servicios", label: "Servicios", icon: "M16 4c-3 0-5 2-5 5v3H8v12h16V12h-3V9c0-3-2-5-5-5zM12 16h8M12 20h8", isNew: true },
];

const formatDate = (iso: string) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}`;
};

const TopNavbar: React.FC<TopNavbarProps> = ({ searchQuery, setSearchQuery, activeCategory, setActiveCategory, checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests }) => {
  const [showGuestMenu, setShowGuestMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setShowGuestMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
  <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
    {/* Fila superior: Logo + acciones */}
    <div className="flex items-center justify-between px-4 py-3 md:px-8">
      <Link href="/" className="shrink-0 text-xl font-bold text-[#FF385C]">🏠 airbnb</Link>
      <div className="hidden md:flex items-center gap-0 absolute left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1">
          {CATS.map((c) => {
            const isActive = c.id === activeCategory;
            return (
              <button key={c.id} onClick={() => setActiveCategory(c.id)}
                className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${isActive ? "text-black border-b-2 border-black" : "text-gray-500 border-b-2 border-transparent hover:text-black transition"}`}>
                <svg className="h-6 w-6 opacity-70" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={c.icon} /></svg>
                <span>{c.label}</span>
                {c.isNew && <span className="absolute -top-1.5 -right-1 rounded-full bg-indigo-900 px-1.5 py-0.5 text-[9px] font-bold text-white leading-tight">NOVEDAD</span>}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="hidden rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors lg:block">Conviértete en anfitrión</button>
        <button className="rounded-full p-2 hover:bg-gray-100 transition-colors" aria-label="Idioma y región">
          <svg className="h-5 w-5 text-gray-600" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="8" r="7" /><path d="M1 8h14M8 1c1.7 2 2.7 4.5 2.7 7S9.7 13 8 15M8 1C6.3 3 5.3 5.5 5.3 8S6.3 13 8 15" /></svg>
        </button>
        <button className="flex items-center gap-2 rounded-full border border-gray-300 p-1 pl-3 hover:shadow-md transition-shadow" aria-label="Menú de usuario">
          <svg className="h-4 w-4 text-gray-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="8" width="24" height="2" /><rect x="4" y="15" width="24" height="2" /><rect x="4" y="22" width="24" height="2" /></svg>
          <svg className="h-8 w-8 text-gray-600" viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="12" r="5" /><path d="M4 30c0-6.6 5.4-12 12-12s12 5.4 12 12" /></svg>
        </button>
      </div>
    </div>

    {/* Categorías en scroll horizontal para móvil */}
    <div className="flex md:hidden overflow-x-auto px-4 pb-2 gap-1 scrollbar-hide">
      {CATS.map((c) => {
        const isActive = c.id === activeCategory;
        return (
          <button key={c.id} onClick={() => setActiveCategory(c.id)}
            className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${isActive ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"}`}>
            <svg className="h-4 w-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={c.icon} /></svg>
            <span>{c.label}</span>
            {c.isNew && <span className="rounded-full bg-indigo-900 px-1.5 py-0.5 text-[9px] font-bold text-white leading-tight">NEW</span>}
          </button>
        );
      })}
    </div>

    {/* Barra de búsqueda compacta para móvil */}
    <div className="md:hidden px-4 pb-3">
      <button onClick={() => setShowMobileSearch(!showMobileSearch)}
        className="flex items-center gap-3 w-full rounded-full border border-gray-300 bg-white px-5 py-3 shadow-sm hover:shadow-md transition-shadow">
        <svg className="h-4 w-4 text-gray-500 shrink-0" viewBox="0 0 32 32" fill="currentColor"><path d="M13 0c7.2 0 13 5.8 13 13 0 3.1-1.1 6-2.9 8.2l8.3 8.3-2.1 2.1-8.3-8.3c-2.2 1.8-5.1 2.9-8.2 2.9C5.8 26 0 20.2 0 13S5.8 0 13 0zm0 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z" /></svg>
        <span className="text-sm text-gray-700 font-medium">
          {searchQuery || "¿A dónde vas?"}
        </span>
        <span className="ml-auto text-xs text-gray-400">
          {checkIn ? formatDate(checkIn) : "Agrega fecha"} · {guests} huésped{guests > 1 ? "es" : ""}
        </span>
      </button>
      {showMobileSearch && (
        <div ref={mobileRef} className="mt-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl space-y-4">
          <div>
            <span className="text-xs font-semibold text-gray-900">Dónde</span>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Explora destinos" className="w-full bg-transparent border-b border-gray-200 py-1 text-sm focus:outline-none" />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <span className="text-xs font-semibold text-gray-900">Llegada</span>
              <input type="date" value={checkIn} onChange={(e) => { const v = e.target.value; if (v && v.split("-")[0].length > 4) return; setCheckIn(v); }}
                className="w-full bg-transparent text-xs focus:outline-none cursor-pointer text-gray-700 font-medium" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold text-gray-900">Salida</span>
              <input type="date" value={checkOut} onChange={(e) => { const v = e.target.value; if (v && v.split("-")[0].length > 4) return; setCheckOut(v); }}
                className="w-full bg-transparent text-xs focus:outline-none cursor-pointer text-gray-700 font-medium" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-900">Huéspedes</span>
            <div className="flex items-center gap-3">
              <button onClick={() => setGuests(Math.max(1, guests - 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 text-lg">−</button>
              <span className="w-5 text-center text-sm font-medium text-gray-900">{guests}</span>
              <button onClick={() => setGuests(Math.min(6, guests + 1))}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 text-lg">+</button>
            </div>
          </div>
          <button onClick={() => setShowMobileSearch(false)}
            className="w-full rounded-full bg-[#FF385C] py-2 text-sm font-semibold text-white hover:bg-[#e31c5f] transition-colors">Buscar</button>
        </div>
      )}
    </div>

    {/* Barra de búsqueda flotante para desktop */}
    <div className="hidden md:flex items-center justify-center pb-4 pt-2">
      <div className="inline-flex items-center rounded-full border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl">
        <div className="flex flex-col items-start px-6 py-3 text-left hover:bg-gray-50 rounded-l-full transition-colors">
          <span className="text-xs font-semibold text-gray-900">Dónde</span>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Explora destinos" className="bg-transparent focus:outline-none w-full text-sm text-gray-500 placeholder:text-gray-400" />
        </div>
        <div className="h-8 w-px bg-gray-200" />
        <div className="flex flex-col items-start px-6 py-3 text-left hover:bg-gray-50 transition-colors">
          <span className="text-xs font-semibold text-gray-900">Fechas</span>
          <div className="flex gap-3 mt-1">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400">Llegada</span>
              <input type="date" value={checkIn} onChange={(e) => {
                  const val = e.target.value;
                  if (val && val.split("-")[0].length > 4) return;
                  setCheckIn(val);
                }}
                className="bg-transparent text-xs focus:outline-none cursor-pointer text-gray-700 font-medium" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400">Salida</span>
              <input type="date" value={checkOut} onChange={(e) => {
                  const val = e.target.value;
                  if (val && val.split("-")[0].length > 4) return;
                  setCheckOut(val);
                }}
                className="bg-transparent text-xs focus:outline-none cursor-pointer text-gray-700 font-medium" />
            </div>
          </div>
        </div>
        <div className="h-8 w-px bg-gray-200" />
        <div className="relative flex items-center gap-3 pl-6 pr-3 py-3 hover:bg-gray-50 rounded-r-full transition-colors" ref={menuRef}>
          <button className="flex flex-col items-start text-left" onClick={() => setShowGuestMenu(!showGuestMenu)}>
            <span className="text-xs font-semibold text-gray-900">Quién</span>
            <span className="text-sm text-gray-500">{guests} huésped{guests > 1 ? "es" : ""}</span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF385C] text-white transition-colors hover:bg-[#e31c5f]" aria-label="Buscar">
            <svg className="h-4 w-4" viewBox="0 0 32 32" fill="currentColor"><path d="M13 0c7.2 0 13 5.8 13 13 0 3.1-1.1 6-2.9 8.2l8.3 8.3-2.1 2.1-8.3-8.3c-2.2 1.8-5.1 2.9-8.2 2.9C5.8 26 0 20.2 0 13S5.8 0 13 0zm0 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z" /></svg>
          </button>
          {showGuestMenu && (
            <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 z-50 w-64">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Huéspedes</span>
                <div className="flex items-center gap-3">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 transition-colors text-lg">−</button>
                  <span className="w-6 text-center text-sm font-medium text-gray-900">{guests}</span>
                  <button onClick={() => setGuests(Math.min(6, guests + 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-gray-900 transition-colors text-lg">+</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
);
};

export default TopNavbar;