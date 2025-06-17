import Footer from '~/components/Footer/Footer';
import DiscountBar from '~/components/NavBar/DiscountBar';
import NavBar from '~/components/NavBar/NavBar';
import SubNavBar from '~/components/NavBar/SubNavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <DiscountBar />
      <SubNavBar />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;