import { useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid';
import Sidebar from './SideBar';
import { useAppDispatch } from '~/hooks/useShoesSelector'; 
import { loadShoes } from '~/store/shoes';
import { useShoesSelector } from '~/hooks/useShoesSelector';


const Products = () => {
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

//   const products: Product[] = [
//     {
//       id: 1,
//       name: 'Slip On Hombre Camelot',
//       price: '$60.000',
//       images: ['🔴'],
//       colors: ['red', 'navy'],
//     },
//     {
//       id: 2,
//       name: 'Zapatilla Hombre Pelikan',
//       price: '$60.000',
//       images: ['🔵'],
//       colors: ['gray', 'navy'],
//     },
//     {
//       id: 3,
//       name: 'Zapatilla Hombre Matrix',
//       price: '$60.000',
//       images: ['🔵'],
//       colors: ['blue', 'black'],
//     },
//     {
//       id: 4,
//       name: 'Slip On Hombre Party',
//       price: '$60.000',
//       images: ['🔵'],
//       colors: ['navy', 'red', 'brown'],
//     },
//     {
//       id: 5,
//       name: 'Sandalias Hombre Mild',
//       price: '$60.000',
//       images: ['🟤'],
//       colors: ['brown', 'purple', 'gray'],
//     },
//     {
//       id: 6,
//       name: 'Zapatilla Hombre Alpha',
//       price: '$60.000',
//       images: ['⚪'],
//       colors: ['gray', 'green', 'blue'],
//     },
//     {
//       id: 7,
//       name: 'Zapatilla Hombre Lutos Speed',
//       price: '$60.000',
//       images: ['⚫'],
//       colors: ['black', 'green'],
//     },
//     {
//       id: 8,
//       name: 'Slip On Hombre Caravan',
//       price: '$60.000',
//       images: ['🟤'],
//       colors: ['brown', 'gray'],
//     },
//     {
//       id: 9,
//       name: 'Slip On Hombre Riley Racket',
//       price: '$60.000',
//       images: ['🔵'],
//       colors: ['navy', 'gray'],
//     },
//   ];

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

export default Products;
