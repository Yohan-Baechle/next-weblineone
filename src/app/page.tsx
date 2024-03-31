import Card from '@/components/Card/Card';
import Carousel from '@/components/Carousel/Carousel';
import Gallery from '@/components/GalleryImage/GalleryImage';
import GoogleMaps from '@/components/GoogleMaps/GoogleMaps';
import Heading from '@/components/Heading/Heading';
import Hero from '@/components/Hero/Hero';
import ImageTextBlock from '@/components/ImageTextBlock/ImageTextBlock';
import TextBlock from '@/components/TextBlock/TextBlock';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';

export default function Home() {
  const carouselItems = [
    {
      src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      alt: 'Breakfast',
      text: 'lorem ipseum dolor sit amet.',
    },
    {
      src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      alt: 'Bike',
    },
    {
      src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      alt: 'Coffee',
    },
  ];

  const images = [
    {
      src: 'https://source.unsplash.com/random/600x400/?6',
      alt: 'Description de l’image 1',
    },
    {
      src: 'https://source.unsplash.com/random/600x400/?7',
      alt: 'Description de l’image 2',
    },
  ];

  return (
    <>
      <Head>
        <title>Accueil - Nom de la société</title>
        <meta
          name='description'
          content="Bienvenue sur la page d'accueil de Nom de la société. Découvrez nos produits et services."
        />
        <meta property='og:title' content='Accueil - Nom de la société' />
        <meta
          property='og:description'
          content="Bienvenue sur la page d'accueil de Nom de la société. Découvrez nos produits et services."
        />
        <meta property='og:url' content='https://votre-domaine.com/' />
        <meta property='og:type' content='website' />
        <link rel='canonical' href='https://votre-domaine.com/' />
      </Head>

      <Hero
        title='Titre de niveau 2'
        text='Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'
        opacity={60}
        imageUrl='https://source.unsplash.com/random/1920x1080/'
      />
      <Heading level='h2' className='mt-24 text-3xl font-bold' align='center'>
        Voici le composant Carousel. On peut afficher ou non les fleches,
        modifier l&apos;interval de temps et la couleur des boutons.
      </Heading>
      <Carousel items={carouselItems} />

      <div className='container mx-auto flex grow flex-col items-center justify-between'>
        <Heading level='h2' className='mt-24 text-3xl font-bold' align='center'>
          Ceci est un exemple de titre personnalisé avec le composant Heading
        </Heading>

        <TextBlock
          color='text-blue-600'
          size='text-lg'
          weight='font-semibold'
          align='center'
          className='mb-24 mt-8'
        >
          Ceci est un exemple de texte personnalisé avec le composant TextBlock.
        </TextBlock>

        <Heading level='h2' className='my-4 text-3xl font-bold' align='center'>
          Ceci est un exemple du composant ImageTextBlock, il est possible de
          positionner l&apos;image à gauche ou à droite et d&apos;appliquer un
          divider ou non.
        </Heading>
        <ImageTextBlock
          imageUrl='https://source.unsplash.com/random/600x400/?1'
          title='Titre de niveau 3'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit gravida rutrum quisque non. Enim facilisis gravida neque convallis a cras semper. At in tellus integer feugiat scelerisque varius morbi enim nunc. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Mattis rhoncus urna neque viverra. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Quam lacus suspendisse faucibus interdum.'
        />

        <ImageTextBlock
          imageUrl='https://source.unsplash.com/random/600x400/?2'
          title='Titre de niveau 3'
          content='Et netus et malesuada fames ac turpis egestas maecenas pharetra. Pellentesque sit amet porttitor eget dolor morbi non. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Id porta nibh venenatis cras sed felis. A diam sollicitudin tempor id eu nisl nunc. Vel quam elementum pulvinar etiam non quam lacus suspendisse. At lectus urna duis convallis. Tellus elementum sagittis vitae et leo duis ut diam. Semper quis lectus nulla at volutpat diam ut. Elementum nibh tellus molestie nunc non blandit.'
          backgroundColor='#f0f0f0'
          divider
          imageOnRight
        />
        <ImageTextBlock
          imageUrl='https://source.unsplash.com/random/600x400/?3'
          title='Titre de niveau 3'
          content='Sed tempus urna et pharetra pharetra massa massa ultricies. Facilisis mauris sit amet massa. Lacus laoreet non curabitur gravida arcu ac tortor. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Eget aliquet nibh praesent tristique. Enim tortor at auctor urna nunc id. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Condimentum vitae sapien pellentesque habitant morbi tristique. Facilisi cras fermentum odio eu feugiat. Nunc aliquet bibendum enim facilisis gravida.'
          divider
        />
        <ImageTextBlock
          imageUrl='https://source.unsplash.com/random/600x400/?4'
          title='Titre de niveau 3'
          content='Massa sed elementum tempus egestas sed sed risus. Egestas diam in arcu cursus euismod. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Orci sagittis eu volutpat odio. Est ante in nibh mauris cursus mattis molestie. Diam donec adipiscing tristique risus nec feugiat in fermentum. Faucibus scelerisque eleifend donec pretium. Orci nulla pellentesque dignissim enim sit amet venenatis. Nec feugiat nisl pretium fusce id velit ut. Tristique et egestas quis ipsum suspendisse ultrices.'
          backgroundColor='#f0f0f0'
          imageOnRight
          divider
        />
        <div className='flex flex-wrap justify-center gap-8 p-8'>
          <Heading
            level='h1'
            className='my-12 mt-24 text-3xl font-bold'
            align='center'
          >
            Ceci est un exemple du composant Card, La couleur de l&apos;icone,
            et sa position peuvent être personnalisées.
          </Heading>
          <Card
            icon={<AcademicCapIcon />}
            iconPosition='center'
            iconColor='#F0F'
            imageUrl='https://source.unsplash.com/random/600x400/?1'
            size='medium'
            title='Titre de la carte'
            text='Pulvinar mattis nunc sed blandit libero volutpat sed. Nisl tincidunt eget nullam non nisi est sit amet. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Sit amet venenatis urna cursus. Enim ut tellus elementum sagittis.'
          />
          <Card
            icon={<AcademicCapIcon />}
            iconPosition='left'
            iconColor='#000'
            iconBackgroundColor='#ADA'
            imageUrl='https://source.unsplash.com/random/600x400/?2'
            size='medium'
            title='Titre de la carte'
            text='Pulvinar mattis nunc sed blandit libero volutpat sed. Nisl tincidunt eget nullam non nisi est sit amet. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Sit amet venenatis urna cursus. Enim ut tellus elementum sagittis.'
          />
          <Card
            icon={<AcademicCapIcon />}
            iconPosition='right'
            iconColor='yellow'
            iconBackgroundColor='#0000FF'
            imageUrl='https://source.unsplash.com/random/600x400/?3'
            size='medium'
            title='Titre de la carte'
            text='Pulvinar mattis nunc sed blandit libero volutpat sed. Nisl tincidunt eget nullam non nisi est sit amet. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Sit amet venenatis urna cursus. Enim ut tellus elementum sagittis.'
          />
        </div>
      </div>
      <Gallery images={images} />

      <Heading
        level='h2'
        className='mb-12 mt-24 text-3xl font-bold'
        align='center'
      >
        Ceci est un exemple du composant GoogleMaps. On peut changer directement
        le niveau de zoom original et les coordonnées (latitude, longitude).
      </Heading>
      <GoogleMaps
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string}
        initialLocation={{ lat: 43.9167, lng: 5.05 }}
        zoomLevel={15}
        mapId='VOTRE_ID_DE_CARTE'
      />
    </>
  );
}
