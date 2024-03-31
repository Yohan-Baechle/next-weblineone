import Image from 'next/image'; // Importez le composant Image de Next.js
import ActionButton from '../ActionButton/ActionButton';
import Divider from '../Didiver/Divider';

interface ImageTextBlockProps {
  imageUrl: string;
  title: string;
  content: string;
  imageOnRight?: boolean;
  divider?: boolean;
  backgroundColor?: string;
}

export default function ImageTextBlock({
  imageUrl,
  title,
  content,
  imageOnRight = false,
  divider = false,
  backgroundColor,
}: ImageTextBlockProps) {
  return (
    <>
      {divider && <Divider />}
      <div
        className={`flex flex-col md:flex-row ${imageOnRight ? 'md:flex-row-reverse' : ''} items-stretch gap-2 p-8 md:gap-12`}
        style={{ backgroundColor }}
      >
        <div className='relative flex-1 overflow-hidden rounded md:w-1/2'>
          <div className='relative size-full'>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className='object-cover'
              sizes='(min-width: 768px) 50vw, 100vw'
            />
          </div>
        </div>
        <div className='flex flex-1 flex-col justify-between gap-12 md:w-1/2'>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <p>{content}</p>
          <div className='flex'>
            <ActionButton />
          </div>
        </div>
      </div>
    </>
  );
}
