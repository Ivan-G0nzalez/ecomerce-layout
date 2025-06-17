import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const SocialHeader: React.FC = () => {
  return (
    <div className='text-center mb-8 bg-light-grey py-7 2xl:h-64 2xl:flex 2xl:flex-col 2xl:justify-center'>
      <h2 className='text-3xl 2xl:text-6xl font-libre text-gray-600 mb-4'>
        @HUSHPUPPPIESCO
      </h2>
      <div className='flex justify-center'>
        <hr className='w-36 border-gray-600 border-t-2' />
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <FaFacebookF className='w-6 h-8 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors' />
        <FaInstagram className='w-6 h-8 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors' />
      </div>
    </div>
  );
};

export default SocialHeader;
