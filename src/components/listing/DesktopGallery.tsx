interface DesktopGalleryProps {
  photos: string[];
}

const DesktopGallery: React.FC<DesktopGalleryProps> = ({ photos }) => {
  return (
    <div className="hidden md:grid md:grid-cols-4 md:gap-2 md:rounded-xl md:overflow-hidden md:max-h-[500px]">
      <div className="col-span-2 row-span-2">
        <img
          src={photos[0]}
          alt="Foto principal"
          className="h-full w-full object-cover"
        />
      </div>
      {photos.slice(1, 5).map((photo, i) => (
        <div key={i}>
          <img src={photo} alt={`Foto ${i + 2}`} className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default DesktopGallery;