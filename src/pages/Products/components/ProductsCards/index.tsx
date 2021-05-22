import { Box, SimpleGrid } from '@chakra-ui/react';
import { Item } from './components/Item';
import { ProductsCardsProps } from './dtos';

export function ProductsCards({ products }: ProductsCardsProps): JSX.Element {
  return (
    <>
      {products ? (
        <SimpleGrid columns={[1, 2, 3]} gap="2">
          {products.map(product => (
            <Item product={product} key={product.id} />
          ))}
        </SimpleGrid>
      ) : (
        <Box fontSize="md">
          Não há produtos para serem mostrados, por favor volte mais tarde :)
        </Box>
      )}
    </>
  );
}
