import AlternativeCategoryCard from '../Categories/AlternativeCategoriesCard';
import BigCard from '../Categories/BigCard';

const HeroSubSection = () => {
  return (
    <section className='bg-white h-screen w-full px-30 pt-8'>
      <div className='grid grid-cols-2 gap-8 h-full min-h-0'>
        {/* Columna izq. */}
        <div className=' h-full min-h-0'>
        <BigCard
            label='Categoria'
            image='/Perro4.jpg'
          />
        </div>

        {/* Columna der. dividida en 2 filas iguales */}
        <div className='grid grid-rows-2 h-full min-h-0'>
          <AlternativeCategoryCard
            label='Mujer'
            image='/zapatillas/zapatos de mujeres.jpg'
            />
          <AlternativeCategoryCard
            label='Hombre'
            image='/zapatillas/zapatos de hombre3.jpg'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSubSection;
