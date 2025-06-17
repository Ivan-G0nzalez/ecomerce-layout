import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface NewsletterProps {
  onSubmit?: (email: string) => void;
}

const Newsletter: React.FC<NewsletterProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email.trim() && onSubmit) {
      onSubmit(email);
      setEmail('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div>
      <h3 className='text-sm 2xl:text-2xl font-libre font-semibold text-gray-800 uppercase tracking-wide mb-4'>
        NEWSLETTER
      </h3>
      <p className='text-sm 2xl:text-xl text-gray-600 mb-4'>
        Regístrate para ser el primero en recibir nuestras noticias
      </p>
      <div className='flex'>
        <div className='text-base flex border border-gray-400 overflow-hidden w-70  2xl:w-103'>
          <input
            type='text'
            placeholder='E-MAIL'
            className='px-3 py-3 2xl:py-5 w-full outline-none font-semibold'
          />
          <button type='submit' className='px-2 text-2xl 2xl:text-3xl'>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
