"use client";

import Link from "next/link";

const DetailNavbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="text-xl font-bold text-[#ff385c]">
          🏠 airbnb
        </Link>
      </div>
    </header>
  );
};

export default DetailNavbar;