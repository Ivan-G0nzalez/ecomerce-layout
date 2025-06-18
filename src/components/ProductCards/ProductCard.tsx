import { FaHeart } from 'react-icons/fa';
import type { ProductCardProps } from '~/interfaces/product.types';


const ColorIndicator: React.FC<{ color: string }> = ({ color }) => {
    const getColorClass = (color: string) => {
      const colorMap: { [key: string]: string } = {
        red: 'bg-red-500',
        navy: 'bg-blue-900',
        gray: 'bg-gray-500',
        blue: 'bg-blue-500',
        black: 'bg-black',
        brown: 'bg-amber-800',
        purple: 'bg-purple-500',
        green: 'bg-green-500',
        white: 'bg-white'
      };
      return colorMap[color] || 'bg-white';
    };
  
    return (
      <div className={`w-6 h-6 rounded border-b-4 border-gray-400 ${getColorClass(color)}`} />
    );
  };

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
}) => (
  <div className='bg-white border-b-2 border-gray-400 overflow-hidden group hover:shadow-md transition-shadow max-w-xs mx-auto'>
    <div className='relative'>
      {/* Product Image Placeholder */}
      <div className='aspect-square flex items-center justify-center'>
        {/* <div className='text-6xl'>{product.images[0]}</div> */}
        <img src={`${product.photo}`} />
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => onToggleFavorite(product.id)}
        className='absolute top-4 right-4 p-2 bg-white '
      >
        <FaHeart 
          className={`w-5 h-5 ${
            isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-300'
          }`}
        />
      </button>
    </div>

    <div className='p-4'>
      {/* Color Options */}
      <div className='flex space-x-1 mb-3'>
        {product.colors.map((color, index) => (
          <ColorIndicator key={index} color={color} />
        ))}
      </div>

      <h3 className='font-medium text-gray-900 mb-2 text-sm text-center'>{product.name}</h3>

      <p className='text-lg font-semibold text-custom-purple text-center'>${product.price}</p>
    </div>
  </div>
);

export default ProductCard;
