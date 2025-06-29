import { useEffect, useState } from 'react';
import ProductsGrid from '~/components/ProductsCategories/ProductsGrid';
import Sidebar from '~/components/ProductsCategories/SideBar';
import { useAppDispatch } from '~/hooks/useShoesSelector'; 
import { loadShoes } from '~/store/shoes';
import { useShoesSelector } from '~/hooks/useShoesSelector';


const CategoryPage = () => {
  const dispatch = useAppDispatch();
  const { shoes:products } = useShoesSelector();

  useEffect(() => {
    dispatch(loadShoes());
  }, []);

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const sizes = ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'];
  const colors = ['NEGRO(12)', 'AZUL(12)', 'CAFÉ(12)', 'ORO(12)'];
  const materials = ['Cuero(18)', 'Nubuck(8)'];
  const technologies = ['HD7/Flex(5)', 'BioBewell(1)', 'HexGroove(3)'];


  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleSelection = (
    item: string,
    _selectedItems: string[],
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };
  return (
    <div className=''>
      <div className='2xl:px-32 px-16 py-8'>
        <div className='flex gap-8'>
          <Sidebar
            sizes={sizes}
            selectedSizes={selectedSizes}
            materials={materials}
            colors={colors}
            technologies={technologies}
            onSizeToggle={(size) =>
              toggleSelection(size, selectedSizes, setSelectedSizes)
            }
          />

          <ProductsGrid
            products={products}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
