import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { CartContext } from '../../../../contexts/CartContext';
import { Product } from './components/Product';

export function ProductsList(): JSX.Element {
  const { items } = useContext(CartContext);

  return (
    <Box>
      {items.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Box>
  );
}
