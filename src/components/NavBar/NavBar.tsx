import type { FC } from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import FreeShippingBanner from './FreeShippingBanner';
import CartIcon from './CartIcon';

const NavBar: FC = () => (
  <header className='w-full border-b border-gray-200 bg-white'>
    <div className='flex justify-end px-18 pt-2'>
      <SearchBar />
    </div>
    <div className='flex px-18 py-2 justify-between'>
        <Logo />
        <FreeShippingBanner />
    </div>
    <div className='flex px-18 py-2 justify-between'>
        <NavMenu />
        <CartIcon />
    </div>
  </header>
);

export default NavBar;
