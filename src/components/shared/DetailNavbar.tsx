"use client";

import Link from "next/link";

const DetailNavbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="text-xl font-bold text-[#ff385c]">
          🏠 airbnb
        </Link>
        <Link href="/profile" className="flex items-center gap-2 rounded-full border border-gray-300 p-1 pl-3 hover:shadow-md transition-shadow shrink-0" aria-label="Perfil">
          <svg className="h-4 w-4 text-gray-600" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="8" width="24" height="2" /><rect x="4" y="15" width="24" height="2" /><rect x="4" y="22" width="24" height="2" /></svg>
          <svg className="h-6 w-6 text-gray-600" viewBox="0 0 32 32" fill="currentColor"><circle cx="16" cy="12" r="5" /><path d="M4 30c0-6.6 5.4-12 12-12s12 5.4 12 12" /></svg>
        </Link>
      </div>
    </header>
  );
};

export default DetailNavbar;