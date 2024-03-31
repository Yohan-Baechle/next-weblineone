import Heading from '@/components/Heading/Heading';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Temoignages() {
  return (
    <>
      <div className='flex h-screen flex-col'>
        <Heading level='h2' className='mt-24 text-3xl font-bold' align='center'>
          Voici le composant Testimonials.
        </Heading>
        <Testimonials />
      </div>
    </>
  );
}
