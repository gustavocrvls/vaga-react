import { SimpleGrid } from '@chakra-ui/react';
import { Item } from './components/Item';
import { ProductsCardsProps } from './dtos';

export function ProductsCards({ products }: ProductsCardsProps): JSX.Element {
  return (
    <SimpleGrid columns={[1, 2, 3]} gap="2">
      {products.map(product => (
        <Item product={product} key={product.id} />
      ))}
    </SimpleGrid>
  );
}
