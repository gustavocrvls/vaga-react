import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../../../../contexts/CartContext';
import { Product } from './components/Product';
import { ProductsListProps } from './dtos';

export function ProductsList({ addSubtotal }: ProductsListProps): JSX.Element {
  const { items } = useContext(CartContext);

  return (
    <Box>
      {items.map(item => (
        <Product item={item} key={item.id} addSubtotal={addSubtotal} />
      ))}
    </Box>
  );
}
