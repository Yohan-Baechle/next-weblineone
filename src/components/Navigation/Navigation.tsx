import Link from 'next/link';
import ActionButton from '../ActionButton/ActionButton';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/temoignages', label: 'Témoignages' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  return (
    <nav className='navbar fixed z-50 bg-base-100 shadow-md'>
      <div className='navbar-start'>
        <Link href='/' className='btn btn-ghost text-xl normal-case'>
          Votre Logo
        </Link>
      </div>
      <div className='navbar-end lg:flex'>
        <div className='hidden items-center lg:flex lg:gap-x-2'>
          <ul className='menu menu-horizontal p-0 '>
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  <span className='link-text'>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ActionButton />
        </div>
        <div className='dropdown dropdown-end lg:hidden'>
          <label tabIndex={0} className='btn btn-circle btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
          >
            {navItems.map(({ href, label }) => (
              <li key={`${href}-mobile`}>
                <Link href={href}>
                  <span className='link-text'>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
