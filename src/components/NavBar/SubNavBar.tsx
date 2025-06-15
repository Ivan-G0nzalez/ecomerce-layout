import type { FC } from 'react';

const menuItems = ['DIRECTORIO DE TIENDAS', 'SERVICIO AL CLIENTE', 'MI CUENTA'];
const SubNavBar: FC = () => {
  return (
    <nav>
      <ul className='text-xs flex flex-rows justify-end space-x-4 bg-custom-grey text-gray-600 px-18 py-2 font-semibold'>
          {menuItems.map((item) => (
            <li key={item} className=''>{item}</li>
          ))}
       
      </ul>
    </nav>
  );
};

export default SubNavBar;
