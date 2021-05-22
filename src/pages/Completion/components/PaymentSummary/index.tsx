import { Flex, Text } from '@chakra-ui/layout';
import { useContext } from 'react';
import { BagContext } from '../../../../contexts/BagContext';

export function PaymentSummary(): JSX.Element {
  const { total, payment } = useContext(BagContext);
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
          {`${payment.plots}x `}
          {` ${new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(Number(total / payment.plots).toFixed(2)))}`}
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
