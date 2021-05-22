import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { ProductsList } from './components/ProductsList';

export function Bag(): JSX.Element {
  const [total, setTotal] = useState(0);

  function addSubtotal(subtotal: number) {
    setTotal(total + subtotal);
  }

  return (
    <Flex
      direction="column"
      minHeight={['calc(100vh - 100px)']}
      justifyContent="space-between"
    >
      <Box>
        <Heading as="h1" marginBottom="4">
          Sacola
        </Heading>
        <ProductsList addSubtotal={addSubtotal} />
      </Box>
      <Box textAlign="right">
        <Text as="h3" fontSize="3xl">
          Total:
          <strong>
            {` ${new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(total)}`}
          </strong>
        </Text>
        <Button
          rightIcon={<FiArrowRight />}
          type="button"
          colorScheme="blackAlpha"
          backgroundColor="#3D3D3D"
        >
          Pagamento
        </Button>
      </Box>
    </Flex>
  );
}
