interface AmenitiesGridProps {
  amenities: string[];
}

const AmenitiesGrid: React.FC<AmenitiesGridProps> = ({ amenities }) => {
  return (
    <section className="border-b border-gray-200 pb-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Servicios
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex items-center gap-3">
            <span className="text-lg">✓</span>
            <span className="text-sm text-gray-700">{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesGrid;