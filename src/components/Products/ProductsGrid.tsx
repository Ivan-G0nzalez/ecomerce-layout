import type { Shoe } from '~/interfaces/product.types';
import ProductCard from '../ProductCards/ProductCard';

const ProductsGrid: React.FC<{
  products: Shoe[];
  favorites: number[];
  onToggleFavorite: (productId: number) => void;
}> = ({ products, favorites, onToggleFavorite }) => (
  <div className='flex-1'>
    <div className='grid grid-cols-4 gap-6'>
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  </div>
);

export default ProductsGrid;
