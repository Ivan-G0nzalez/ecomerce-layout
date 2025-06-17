import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const SocialHeader: React.FC = () => {
  return (
    <div className='text-center mb-8 bg-light-grey py-7'>
      <h2 className='text-4xl   text-gray-600 mb-4'>
        @HUSHPUPPPIESCO
      </h2>
      <div className='flex justify-center'>
        <hr className='w-36 border-gray-600 border-t-2' />
      </div>
      <div className='flex justify-center space-x-4 mt-4'>
        <FaFacebookF className='w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors' />
        <FaInstagram className='w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors' />
      </div>
    </div>
  );
};

export default SocialHeader;
