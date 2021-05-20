import { Box } from '@chakra-ui/react';
import { ProductsList } from './components/ProductsList';

export function Products(): JSX.Element {
  return (
    <Box marginTop="2">
      <ProductsList />
    </Box>
  );
}
