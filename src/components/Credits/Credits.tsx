import { getCurrentYear } from '@/app/lib/getCurrentYear';

export default function Credits() {
  return (
    <div className='flex items-center justify-center border-t border-base-300 bg-base-300 px-10 py-2 text-center text-xs text-base-content'>
      <aside>
        <p>
          Copyright © {getCurrentYear()}{' '}
          <a href='https://weblineone.fr/' target='_blank'>
            Weblineone
          </a>{' '}
          - Tous droits réservés
        </p>
      </aside>
    </div>
  );
}
