import Accordion from '@/components/Accordion/Accordion';
import Heading from '@/components/Heading/Heading';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contactez-nous - Nom de la société</title>
        <meta
          name='description'
          content="Vous avez une question ou souhaitez discuter d'un projet ? Contactez-nous via ce formulaire."
        />
        <meta
          property='og:title'
          content='Contactez-nous - Nom de la société'
        />
        <meta
          property='og:description'
          content="Vous avez une question ou souhaitez discuter d'un projet ? Contactez-nous via ce formulaire."
        />
        <meta property='og:url' content='https://votre-domaine.com/contact' />
        <meta property='og:type' content='website' />
        <link rel='canonical' href='https://votre-domaine.com/contact' />
      </Head>
      <div className='flex h-screen flex-col'>
        <div className='container mx-auto flex grow flex-col justify-center gap-y-2 pt-40 text-center'>
          <Heading
            level='h2'
            className='mt-24 text-3xl font-bold'
            align='center'
          >
            Voici le composant Accordion.
          </Heading>
          <Accordion
            items={[
              {
                title: 'Titre 1',
                content:
                  'Eu tincidunt tortor aliquam nulla facilisi cras. Massa sapien faucibus et molestie ac feugiat. In tellus integer feugiat scelerisque. Porttitor rhoncus dolor purus non enim praesent elementum.',
              },
              {
                title: 'Titre 2',
                content:
                  'Tortor aliquam nulla facilisi cras fermentum odio eu. Mattis rhoncus urna neque viverra justo nec ultrices dui.',
              },
              {
                title: 'Titre 3',
                content:
                  'Ornare lectus sit amet est placerat in egestas erat imperdiet. Auctor neque vitae tempus quam pellentesque nec nam aliquam.',
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
