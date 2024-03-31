'use client';

import Head from 'next/head';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Toaster, toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
  
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs requis marqués d'une *.");
      return;
    }
  
    const sendMessage = async () => {
      const response = await fetch('/api/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Erreur lors de l'envoi du message.");
      return response.json();
    };
  
    toast.promise(
      sendMessage(),
      {
        loading: 'Envoi en cours...',
        success: () => {
          setFormData({
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
          });
          return 'Message envoyé avec succès !';
        },
        error: (err) => {
          return err.message || 'Une erreur est survenue.';
        },
      }
    );
    }

  return (
    <>
      <Head>
        <title>Me contacter - Yohan Baechlé</title>
        <meta name='description' content='Contactez-moi via le formulaire.' />
      </Head>
      <Toaster />
      <div className='flex flex-col items-center justify-center p-4'>
        <form
          onSubmit={handleSubmit}
          className='form-control mx-auto w-full max-w-xl rounded-box bg-base-100 p-5 shadow-xl'
        >
          <label className='label' htmlFor='name'>
            <span className='label-text'>
              Nom<sup>*</sup>
            </span>
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Votre nom'
            className='input input-bordered w-full'
            autoComplete='name'
          />

          <label className='label' htmlFor='email'>
            <span className='label-text'>
              Email<sup>*</sup>
            </span>
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Votre email'
            className='input input-bordered w-full'
            autoComplete='email'
          />

          <label className='label' htmlFor='phoneNumber'>
            <span className='label-text'>
              Téléphone<sup>*</sup>
            </span>
          </label>
          <input
            type='tel'
            id='phoneNumber'
            name='phoneNumber'
            onChange={handleChange}
            placeholder='Votre numéro de téléphone'
            className='input input-bordered w-full'
            autoComplete='tel'
          />

          <label className='label' htmlFor='message'>
            <span className='label-text'>
              Message<sup>*</sup>
            </span>
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Votre message'
            className='textarea textarea-bordered w-full'
            rows={4}
            autoComplete='off'
          ></textarea>

          <button type='submit' className='btn btn-primary mt-5'>
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
