import type { FC } from 'react';

const Logo: FC = () => (
  <div className="flex items-center space-x-4">
    <img src="https://placehold.co/40x40" alt="Logo" className="h-10 w-10 object-contain" />
    <span className="font-bold text-3xl text-[#6A7282] 2xl:text-5xl">Hush Puppies<sup className="text-xs align-super">®</sup></span>
  </div>
);

export default Logo; 