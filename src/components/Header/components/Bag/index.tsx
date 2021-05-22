import { useContext } from 'react';
import { IconButton } from '@chakra-ui/button';
import { FiShoppingBag } from 'react-icons/fi';
import { Badge, Box } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { BagContext } from '../../../../contexts/BagContext';

export function Bag(): JSX.Element {
  const { items } = useContext(BagContext);

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
          as={Link}
          to="/bag"
          aria-label="sacola"
          icon={<FiShoppingBag size="34" />}
          colorScheme="yellow"
          backgroundColor="#EBCD62"
        />
      </Box>
    </>
  );
}
