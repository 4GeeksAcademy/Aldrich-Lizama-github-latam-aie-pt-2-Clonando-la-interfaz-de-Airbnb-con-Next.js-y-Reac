"use client";

import Link from "next/link";

const MobileNavigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white md:hidden">
      <div className="flex items-center justify-around px-4 py-2">
        {/* Explorar */}
        <Link href="/" className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <svg className="h-6 w-6" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2c7.7 0 14 6.3 14 14s-6.3 14-14 14S2 23.7 2 16 8.3 2 16 2zm0 4C10.5 6 6 10.5 6 16s4.5 10 10 10 10-4.5 10-10S21.5 6 16 6zm-1 5l7 4-7 4v-8z" />
          </svg>
          <span>Explorar</span>
        </Link>

        {/* Favoritos */}
        <Link href="/profile" className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 28c-0.5 0-1-0.2-1.4-0.5l-10.2-9.6c-2.8-2.8-2.8-7.4 0-10.2s7.4-2.8 10.2 0l1.4 1.4 1.4-1.4c2.8-2.8 7.4-2.8 10.2 0s2.8 7.4 0 10.2l-10.2 9.6c-0.4 0.3-0.9 0.5-1.4 0.5z" />
          </svg>
          <span>Favoritos</span>
        </Link>

        {/* Viajes */}
        <button className="flex flex-col items-center gap-1 text-xs text-gray-500">
          <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 2c7.7 0 14 6.3 14 14s-6.3 14-14 14S2 23.7 2 16 8.3 2 16 2zm0 4C10.5 6 6 10.5 6 16s4.5 10 10 10 10-4.5 10-10S21.5 6 16 6zm1 5v5h5v2h-7V11h2z" />
          </svg>
          <span>Viajes</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNavigation;