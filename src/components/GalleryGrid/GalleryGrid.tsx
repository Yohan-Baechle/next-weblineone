import Image, { ImageProps } from 'next/image';

interface GalleryImage {
  src: ImageProps['src'];
  alt: string;
  width?: number;
  height?: number;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {images.map((image, index) => (
        <div
          key={index}
          className='aspect-w-16 aspect-h-9 group relative h-[400px] w-full'
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-black/0 transition-opacity group-hover:bg-black/50'></div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
