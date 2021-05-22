import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { notifySuccess } from '../../components/Notifications';
import { BagContext } from '../../contexts/BagContext';
import { ProductsList } from '../Bag/components/ProductsList';
import { PaymentSummary } from './components/PaymentSummary';

export function Completion(): JSX.Element {
  const { setItems } = useContext(BagContext);

  const history = useHistory();

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
          rightIcon={<FiCheckCircle />}
          type="button"
          colorScheme="blackAlpha"
          backgroundColor="#3D3D3D"
          onClick={() => {
            notifySuccess(
              'Compra finalizada. Obrigado por escolher nossa loja!',
            );
            setItems([]);
            history.push('/products');
          }}
        >
          Finalizar
        </Button>
      </Box>
    </Flex>
  );
}
