import { SimpleGrid } from '@chakra-ui/react';
import { Item } from './components/Item';

export function ProductsCards(): JSX.Element {
  return (
    <SimpleGrid columns={3} gap="2">
      <Item />
      <Item />
      <Item />
    </SimpleGrid>
  );
}
