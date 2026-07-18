"use client";

import MobileGallery from "./MobileGallery";
import DesktopGallery from "./DesktopGallery";

interface ImageGalleryProps {
  photos: string[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  currentIndex,
  onPrev,
  onNext,
}) => {
  return (
    <>
      <MobileGallery
        photos={photos}
        currentIndex={currentIndex}
        onPrev={onPrev}
        onNext={onNext}
      />
      <DesktopGallery photos={photos} />
    </>
  );
};

export default ImageGallery;