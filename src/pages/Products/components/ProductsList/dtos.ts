import { Product } from '../../dtos';

export interface ProductsListProps {
  products: Product[];
  isLoading: boolean;
}
