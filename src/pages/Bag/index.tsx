import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BagContext } from '../../contexts/BagContext';
import { ProductsList } from './components/ProductsList';

export function Bag(): JSX.Element {
  const { total } = useContext(BagContext);

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
        <ProductsList />
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
          as={Link}
          to="/payment"
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
