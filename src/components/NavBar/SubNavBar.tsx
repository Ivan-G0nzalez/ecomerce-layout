import type { FC } from 'react';

const menuItems = ['DIRECTORIO DE TIENDAS', 'SERVICIO AL CLIENTE', 'MI CUENTA'];
const SubNavBar: FC = () => {
  return (
    <nav className='bg-custom-grey'>
      <ul className='text-xs flex flex-rows justify-end space-x-4  text-[#707070] py-2 2xl:py-3 2xl:text-lg font-bold mx-[74px] 2xl:mx-34'>
          {menuItems.map((item) => (
            <li key={item} className=''>{item}</li>
          ))}
       
      </ul>
    </nav>
  );
};

export default SubNavBar;
