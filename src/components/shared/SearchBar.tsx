"use client";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="flex w-full max-w-md items-center rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm">
      <svg
        className="mr-2 h-4 w-4 shrink-0 text-gray-500"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M13 0c7.2 0 13 5.8 13 13 0 3.1-1.1 6-2.9 8.2l8.3 8.3-2.1 2.1-8.3-8.3c-2.2 1.8-5.1 2.9-8.2 2.9C5.8 26 0 20.2 0 13S5.8 0 13 0zm0 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z" />
      </svg>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Busca un alojamiento..."
        className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchBar;