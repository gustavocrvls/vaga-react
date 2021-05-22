import { Box, Stack } from '@chakra-ui/react';
import { Item } from './components/Item';
import { ProductsListProps } from './dtos';

export function ProductsList({ products }: ProductsListProps): JSX.Element {
  return (
    <Stack>
      {products ? (
        products.map(product => <Item product={product} key={product.id} />)
      ) : (
        <Box fontSize="md">
          Não há produtos para serem mostrados, por favor volte mais tarde :)
        </Box>
      )}
    </Stack>
  );
}
