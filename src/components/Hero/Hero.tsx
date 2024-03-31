import ActionButton from '../ActionButton/ActionButton';

interface HeroProps {
  title: string;
  text: string;
  opacity: number;
  imageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, text, opacity, imageUrl }) => {
  return (
    <div
      className='hero min-h-screen bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className={`hero-overlay bg-opacity-${opacity}`}></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>{title}</h1>
          <p className='mb-5'>{text}</p>
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;
