import { StarIcon as FullStarIcon } from '@heroicons/react/20/solid';
import { StarIcon as EmptyStarIcon } from '@heroicons/react/24/outline';

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className='flex justify-center'>
      {[...Array(fullStars)].map((_, i) => (
        <FullStarIcon key={i} className='size-5 text-yellow-500' />
      ))}
      {halfStar && (
        <EmptyStarIcon
          key='half'
          className='size-5 text-yellow-500'
          style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <EmptyStarIcon key={i} className='size-5 text-gray-300' />
      ))}
    </div>
  );
}
