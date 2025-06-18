export interface Product {
  id: number;
  name: string;
  price: string;
  //   images: string[];
  photo: string;
  colors: string[];
}

export interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
}

// Interface for shoes from the JSON data
export interface Shoe {
  name: string;
  price: number;
  referencia: string;
  foto: string;
  colors: string[];
}

// Interface for the shoes state in Redux
export interface ShoesState {
  shoes: Shoe[];
  loading: boolean;
  error: string | null;
  selectedShoe: Shoe | null;
}
