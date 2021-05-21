import { Stack } from '@chakra-ui/react';
import { Item } from './components/Item';
import { ProductsListProps } from './dtos';

export function ProductsList({ products }: ProductsListProps): JSX.Element {
  return (
    <Stack>
      {products.map(product => (
        <Item product={product} key={product.id} />
      ))}
    </Stack>
  );
}
