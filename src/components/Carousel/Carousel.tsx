'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface CarouselItem {
  src: string;
  alt: string;
  text?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  interval?: number;
  showArrows?: boolean;
  arrowColor?: string;
}

export default function Carousel({
  items,
  interval = 5000,
  showArrows = true,
  arrowColor = 'text-gray-800',
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeEffect, setFadeEffect] = useState(true);

  const nextSlide = useCallback(() => {
    setFadeEffect(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setFadeEffect(true);
    }, 300);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setFadeEffect(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + items.length - 1) % items.length
      );
      setFadeEffect(true);
    }, 300);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval]);

  return (
    <div className={`relative h-[400px] w-full overflow-hidden`}>
      <div className='flex w-full'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${fadeEffect && currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout='fill'
              objectFit='cover'
              className='size-full'
            />
            {item.text && (
              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 text-center text-2xl text-white'>
                {item.text}
              </div>
            )}
          </div>
        ))}
      </div>
      {showArrows && (
        <>
          <button
            className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg`}
            onClick={prevSlide}
            aria-label='Previous slide'
          >
            <ChevronLeftIcon className={`size-5 ${arrowColor}`} />
          </button>
          <button
            className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg`}
            onClick={nextSlide}
            aria-label='Next slide'
          >
            <ChevronRightIcon className={`size-5 ${arrowColor}`} />
          </button>
        </>
      )}
      <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2'>
        {items.map((_, index) => (
          <span
            key={index}
            className={`block size-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
