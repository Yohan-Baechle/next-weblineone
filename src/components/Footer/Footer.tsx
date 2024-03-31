import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ReactNode } from 'react';
import Credits from '../Credits/Credits';

interface IconTextProps {
  icon: ReactNode;
  text: string;
}

interface FooterSectionProps {
  title: string;
  contents: IconTextProps[];
}

interface NavLink {
  text: string;
  href: string;
}

const Logo = () => (
  <aside>
    <svg
      width='50'
      height='50'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      clipRule='evenodd'
      className='fill-current'
    >
      <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
    </svg>
    <p>
      Nom de l&apos;entreprise
      <br />
      Slogan de l&apos;entreprise
    </p>
  </aside>
);

const IconText = ({ icon, text }: IconTextProps) => (
  <div className='flex items-center gap-2'>
    {icon}
    <span>{text}</span>
  </div>
);

const infoSections = [
  {
    title: 'Coordonnées',
    contents: [
      {
        icon: <MapPinIcon className='size-5' />,
        text: '123, Exemple Rue, Ville',
      },
      { icon: <PhoneIcon className='size-5' />, text: '+33 1 23 45 67 89' },
      { icon: <EnvelopeIcon className='size-5' />, text: 'contact@mail.fr' },
    ],
  },
  {
    title: 'Horaires',
    contents: [
      {
        icon: <ClockIcon className='size-5' />,
        text: 'Lundi-Vendredi: 9h-17h',
      },
    ],
  },
];

const FooterSection = ({ title, contents }: FooterSectionProps) => (
  <div>
    <h6 className='footer-title'>{title}</h6>
    {contents.map((content, index) => (
      <IconText key={index} icon={content.icon} text={content.text} />
    ))}
  </div>
);

const navigationLinks: NavLink[] = [
  { text: 'Mentions légales', href: '/mentions-legales' },
  {
    text: 'Politique de confidentialité',
    href: '/politique-de-confidentialite',
  },
];

export default function Footer() {
  return (
    <footer className='border-t-2'>
      <div className='bg-base-200 p-10 text-base-content'>
        <div className='footer'>
          <Logo />
          {infoSections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              contents={section.contents}
            />
          ))}
          <nav>
            <h6 className='footer-title'>Navigation</h6>
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className='flex items-center gap-2 hover:underline'
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <Credits />
    </footer>
  );
}
