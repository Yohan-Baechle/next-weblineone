'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const GalleryImage: React.FC<ImageProps> = ({ src, alt }) => (
  <div className='group relative size-full'>
    <Image
      src={src}
      alt={alt}
      layout='fill'
      objectFit='cover'
      className='transition duration-300 ease-in-out group-hover:opacity-75'
    />
  </div>
);

interface GalleryProps {
  images: ImageProps[]; // Utilisation du même type pour les images
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<ImageProps | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null); // Spécifier le type de l'élément référencé

  const openLightbox = (image: ImageProps) => {
    setCurrentImage(image);
    modalRef.current?.showModal(); // Utiliser l'opérateur optionnel pour showModal
  };

  return (
    <>
      <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(image)}
            className='size-full cursor-pointer'
          >
            <GalleryImage src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {currentImage && (
        <dialog
          ref={modalRef}
          className='modal'
          onClose={() => setCurrentImage(null)}
        >
          <div className='modal-box relative'>
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={500}
              height={500}
              objectFit='contain'
            />
            <form method='dialog' className='modal-action'>
              <button className='btn'>Close</button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Gallery;
