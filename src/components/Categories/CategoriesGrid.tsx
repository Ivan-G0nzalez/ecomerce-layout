import type { FC } from 'react';
import CategoryCard from './CategoryCard';

const CategoriesGrid: FC = () => {
  return (
    <section
      className='
      flex justify-center py-9 px-4 sm:px-6 md:px-8 lg:px-[192px] xl:px-[250px]
    '
    >
      {/* Grid que "auto‐ajusta" cada columna al tamaño de su contenido */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 xl:gap-[50px]'>
        {/* Cada wrapper fija el tamaño de la tarjeta */}
        <div className='w-full aspect-square max-w-[500px] xl:max-w-[738px] mx-auto'>
          <CategoryCard image='/categoria-hombre.png' label='HOMBRE' />
        </div>
        <div className='w-full aspect-square max-w-[500px] xl:max-w-[738px] mx-auto'>
          <CategoryCard image='/categoria-mujeres.png' label='MUJER' />
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
