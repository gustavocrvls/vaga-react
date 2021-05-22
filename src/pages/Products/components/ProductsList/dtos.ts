import { IProduct } from '../../dtos';

export interface ProductsListProps {
  products: IProduct[];
  isLoading: boolean;
}
