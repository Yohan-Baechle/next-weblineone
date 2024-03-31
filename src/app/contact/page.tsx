import ContactForm from '@/components/ContactForm/ContactForm';
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
      <div className='container mx-auto'>
        <Heading level='h2' className='py-24 text-3xl font-bold' align='center'>
          Voici le composant ContactForm. Il faut juste modifier les
          informations SMTP dans le fichier .env. Il affiche un toaster pour la
          gestion des erreurs, le loading, et le succès.
        </Heading>
        <h1 className='text-center text-2xl font-bold'>Contactez-nous</h1>
        <p className='text-center'>
          Utilisez le formulaire ci-dessous pour nous envoyer un message
          directement.
        </p>
        <ContactForm />
      </div>
    </>
  );
}
