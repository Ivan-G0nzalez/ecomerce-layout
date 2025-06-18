import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Logo: FC = () => (
  <Link to='/'>
    <div className='flex items-center space-x-4'>
      <img
        src='https://placehold.co/40x40'
        alt='Logo'
        className='h-10 w-10 object-contain'
      />
      <span className='font-bold text-3xl text-[#6A7282] 2xl:text-5xl'>
        Hush Puppies<sup className='text-xs align-super'>®</sup>
      </span>
    </div>
  </Link>
);

export default Logo;
