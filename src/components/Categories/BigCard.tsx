import type {FC} from 'react';
import CategoryButtons from '../Buttons/CategoryButton';

interface Props {
  image: string;
  label: string;
}

const BigCard: FC<Props> = ({ image, label }) => {
    return (
      <div className="relative w-full h-full overflow-hidden group">
        <img src={image} alt={label} className="w-full h-full object-cover object-center" />
        <CategoryButtons label={label} invertColor={true} />
      </div>
    );
  };
export default BigCard;