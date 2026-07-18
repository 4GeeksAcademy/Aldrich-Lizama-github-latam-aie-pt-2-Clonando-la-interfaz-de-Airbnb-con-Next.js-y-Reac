"use client";

interface CategorySelectorProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  activeCategory,
  onSelect,
}) => {
  return (
    <div className="overflow-x-auto scrollbar-none border-b border-gray-200">
      <div className="flex gap-6 px-4 py-3 md:px-8">
        {categories.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`whitespace-nowrap pb-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;