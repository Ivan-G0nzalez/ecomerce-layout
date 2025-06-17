import type { FC } from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import FreeShippingBanner from './FreeShippingBanner';
import CartIcon from './CartIcon';

const NavBar: FC = () => (
  <header className='w-full border-b border-gray-200 bg-white 2xl:h-60'>
    <div className='mx-[74px] 2xl:mx-34 h-full flex flex-col justify-between'>
      <div className='flex justify-end pt-2'>
        <SearchBar />
      </div>
      <div className='flex py-2 justify-between'>
        <Logo />
        <FreeShippingBanner />
      </div>
      <div className='flex py-2 justify-between '>
        <NavMenu />
        <CartIcon />
      </div>
    </div>
  </header>
);

export default NavBar;
