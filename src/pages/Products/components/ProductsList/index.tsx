import { Stack } from '@chakra-ui/react';
import { Item } from './components/Item';

export function ProductsList(): JSX.Element {
  return (
    <Stack>
      <Item />
      <Item />
      <Item />
    </Stack>
  );
}
