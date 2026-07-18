interface MapPlaceholderProps {
  className?: string;
}

const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ className = "" }) => {
  return (
    <aside className={`hidden md:block md:w-1/3 md:sticky md:top-16 md:h-[calc(100vh-4rem)] ${className}`}>
      <div className="flex h-full items-center justify-center bg-gray-200">
        <p className="text-lg font-medium text-gray-500">Mapa</p>
      </div>
    </aside>
  );
};

export default MapPlaceholder;