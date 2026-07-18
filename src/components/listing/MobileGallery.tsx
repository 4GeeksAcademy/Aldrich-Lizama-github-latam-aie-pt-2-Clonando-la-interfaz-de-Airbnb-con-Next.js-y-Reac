"use client";

interface MobileGalleryProps {
  photos: string[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const MobileGallery: React.FC<MobileGalleryProps> = ({
  photos,
  currentIndex,
  onPrev,
  onNext,
}) => {
  return (
    <div className="relative md:hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={photos[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {currentIndex > 0 && (
        <button
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md"
          aria-label="Anterior"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10.5 2l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>
      )}

      {currentIndex < photos.length - 1 && (
        <button
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md"
          aria-label="Siguiente"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5.5 2l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>
      )}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${
              i === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileGallery;