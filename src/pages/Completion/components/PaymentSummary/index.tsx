import { Box, Divider, Flex, Text } from '@chakra-ui/layout';
import { useContext } from 'react';
import { CartContext } from '../../../../contexts/CartContext';

export function PaymentSummary(): JSX.Element {
  const { total } = useContext(CartContext);
  return (
    <Flex
      backgroundColor="gray.200"
      borderRadius="md"
      padding="3"
      justifyContent="space-between"
      align="center"
    >
      <Flex fontSize="xl">
        Parcelas:
        <Text as="strong" marginLeft="3">
          3x
          {` ${new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}`}
        </Text>
      </Flex>
      <Flex fontSize="3xl">
        Total:
        <Text as="strong" marginLeft="3">
          {` ${new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}`}
        </Text>
      </Flex>
    </Flex>
  );
}
