'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import StarRating from '../StarRating/StarRating';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'CEO of Acme Inc.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida aliquam neque, nec consequat lorem consectetur id. Integer luctus, elit vel viverra mattis, quam risus eleifend nisi, quis consequat urna ipsum non magna.',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Marketing Director at XYZ Corp.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida aliquam neque, nec consequat lorem consectetur id.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'CTO of Tech Innovations Ltd.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis aliquet velit. Nullam at urna ac magna gravida fermentum nec vel justo.',
    rating: 4,
  },
  // Ajoutez d'autres témoignages ici...
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const nextTestimonial = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setOpacity(1);
    }, 200);
  };

  const prevTestimonial = () => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setOpacity(1);
    }, 200);
  };

  return (
    <div className='relative mx-auto max-w-xl overflow-hidden rounded-lg bg-white p-8 shadow-lg'>
      <div
        className='space-y-4 transition-opacity duration-200 ease-in-out'
        style={{ opacity }}
      >
        <p className='text-center italic'>
          &quot;{testimonials[currentIndex].text}&quot;
        </p>
        <StarRating rating={testimonials[currentIndex].rating} />
        <p className='mt-4 text-center font-semibold'>
          {testimonials[currentIndex].name} - {testimonials[currentIndex].role}
        </p>
      </div>
      <div className='mt-4 flex justify-center'>
        <button onClick={prevTestimonial} aria-label='Previous'>
          <ChevronLeftIcon className='size-6 text-gray-600 hover:text-gray-800' />
        </button>
        <button onClick={nextTestimonial} aria-label='Next'>
          <ChevronRightIcon className='size-6 text-gray-600 hover:text-gray-800' />
        </button>
      </div>
    </div>
  );
}
