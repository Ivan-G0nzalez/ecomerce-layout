export interface Product {
  id: number;
  name: string;
  price: string;
  //   images: string[];
  photo: string;
  colors: string[];
}

export interface ProductCardProps {
  product: Shoe;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
}

// Interface for shoes from the JSON data
export interface Shoe extends Product {
  referencia: string;
}

// Interface for the shoes state in Redux
export interface ShoesState {
  shoes: Shoe[];
  loading: boolean;
  error: string | null;
  selectedShoe: Shoe | null;
}
