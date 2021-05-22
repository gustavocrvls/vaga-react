import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { FiCheck, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ProductsList } from '../Bag/components/ProductsList';
import { PaymentSummary } from './components/PaymentSummary';

export function Completion(): JSX.Element {
  return (
    <Flex
      direction="column"
      minHeight={['calc(100vh - 100px)']}
      justifyContent="space-between"
    >
      <Box>
        <Heading as="h1" size="xl" marginBottom="3">
          Finalizar compra
        </Heading>

        <Heading as="h2" size="lg" marginBottom="3">
          Itens
        </Heading>
        <ProductsList />
        <Heading as="h2" size="lg" marginBottom="3" marginTop="3">
          Pagamento
        </Heading>
        <PaymentSummary />
      </Box>

      <Box textAlign="center">
        <Button
          as={Link}
          to="/products"
          rightIcon={<FiCheckCircle />}
          type="button"
          colorScheme="blackAlpha"
          backgroundColor="#3D3D3D"
        >
          Finalizar
        </Button>
      </Box>
    </Flex>
  );
}
