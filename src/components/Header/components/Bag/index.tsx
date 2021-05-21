import { useContext } from 'react';
import { IconButton } from '@chakra-ui/button';
import { FiShoppingBag } from 'react-icons/fi';
import { Badge, Box } from '@chakra-ui/layout';
import { CartContext } from '../../../../contexts/CartContext';

export function Bag(): JSX.Element {
  const { items } = useContext(CartContext);

  return (
    <>
      <Box position="relative">
        <Badge
          color="white"
          backgroundColor="black"
          borderRadius="full"
          position="absolute"
          right="0"
          zIndex="1"
        >
          {items.reduce((pv, cv) => pv + cv.quantity, 0)}
        </Badge>
        <IconButton
          aria-label="sacola"
          icon={<FiShoppingBag size="34" />}
          colorScheme="yellow"
          backgroundColor="#EBCD62"
        />
      </Box>
    </>
  );
}
