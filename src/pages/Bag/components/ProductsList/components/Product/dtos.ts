import { CartItem } from '../../../../../../contexts/CartContext';

export interface ProductProps {
  item: CartItem;
  addSubtotal: (subtotal: number) => void;
}
