import type {FC} from 'react';
import CategoryButtons from '../Buttons/CategoryButton';

interface Props {
  image: string;
  label: string;
}

const CategoryCard: FC<Props> = ({ image, label }) => {
  return (
    <div className="relative w-full h-full bg-white shadow-md overflow-hidden group">
      <img src={image} alt={label} className="w-full h-full object-cover" />
      <CategoryButtons label={label}/>
    </div>
  );
};

export default CategoryCard;