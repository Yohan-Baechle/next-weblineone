'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <button className='btn' onClick={openModal}>
        Open modal
      </button>
      {isOpen && (
        <>
          <div
            className='fixed inset-0 z-40 bg-black/50'
            onClick={closeModal} // Overlay qui gère la fermeture du modal
          ></div>
          <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <dialog open className='modal' onClick={(e) => e.stopPropagation()}>
              <div className='modal-box relative'>
                <button
                  type='button'
                  className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
                  onClick={closeModal}
                >
                  <XMarkIcon className='size-5' />
                </button>
                <h3 className='text-lg font-bold'>Hello!</h3>
                <p className='py-4'>
                  Press ESC key or click on the overlay to close.
                </p>
              </div>
            </dialog>
          </div>
        </>
      )}
    </>
  );
}
