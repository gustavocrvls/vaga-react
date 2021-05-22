import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { BagContext } from '../../../../contexts/BagContext';
import { Product } from './components/Product';

export function ProductsList(): JSX.Element {
  const { items } = useContext(BagContext);

  return (
    <Box>
      {items.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Box>
  );
}
