import { AcademicCapIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import ActionButton from '../ActionButton/ActionButton';

interface CardProps {
  icon?: JSX.Element;
  iconPosition?: 'left' | 'center' | 'right';
  iconColor?: string;
  iconBackgroundColor?: string;
  imageUrl?: string;
  size?: 'small' | 'medium' | 'large';
  title: string;
  text: string;
}

export default function Card({
  imageUrl,
  title,
  text,
  iconColor = 'text-base-100',
  iconBackgroundColor,
  iconPosition = 'center',
}: CardProps) {
  const renderIcon = () => {
    if (!iconPosition || iconPosition === 'center') {
      return (
        <div
          style={{ backgroundColor: iconBackgroundColor }}
          className='absolute -top-6 left-1/2 flex -translate-x-1/2 justify-center rounded-full bg-base-200 p-4'
        >
          <AcademicCapIcon style={{ color: iconColor }} className='h-6} w-6' />
        </div>
      );
    } else if (iconPosition === 'left') {
      return (
        <div
          style={{ backgroundColor: iconBackgroundColor }}
          className='absolute -top-6 left-0 flex justify-start rounded-full bg-base-200 p-4'
        >
          <AcademicCapIcon style={{ color: iconColor }} className='h-6} w-6' />
        </div>
      );
    } else if (iconPosition === 'right') {
      return (
        <div
          style={{ backgroundColor: iconBackgroundColor }}
          className='absolute -top-6 right-0 flex justify-end rounded-full bg-base-200 p-4'
        >
          <AcademicCapIcon style={{ color: iconColor }} className='h-6} w-6' />
        </div>
      );
    }
  };

  return (
    <div className='relative max-w-sm rounded bg-base-200 shadow-lg'>
      {imageUrl && (
        <div className='relative h-48 w-full overflow-hidden rounded-t-md'>
          <Image
            src={imageUrl}
            alt={title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px'
          />
        </div>
      )}
      <div className='flex flex-col gap-2 px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>{title}</div>
        <p className='text-base text-gray-700'>{text}</p>
        <ActionButton />
      </div>
      {renderIcon()}
    </div>
  );
}
