import { Box, Heading } from '@chakra-ui/react';
import { ProductsList } from './components/ProductsList';

export function Bag(): JSX.Element {
  return (
    <Box>
      <Heading as="h1" marginBottom="4">
        Sacola
      </Heading>
      <ProductsList />
    </Box>
  );
}
