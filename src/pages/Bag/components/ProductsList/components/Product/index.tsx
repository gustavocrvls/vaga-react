import { Box, Flex, Heading, Img, Skeleton, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { notifyError } from '../../../../../../components/Notifications';
import { Rating } from '../../../../../../components/Rating';
import { api } from '../../../../../../services/api';
import { IProduct } from '../../../../../Products/dtos';
import { ProductProps } from './dtos';

export function Product({ item }: ProductProps): JSX.Element {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [isLoading, setIsLoading] = useState(false);

  async function loadData() {
    try {
      setIsLoading(true);
      const response = await api.get(`products/${item.id}`);
      setProduct(response.data);
    } catch (err) {
      notifyError('Não foi possível carregar os dados :(');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Flex
      backgroundColor="gray.200"
      borderRadius="md"
      padding="3"
      justifyContent="space-between"
    >
      <Flex>
        {isLoading ? (
          <Skeleton height="120px" width="80px" marginRight="5" />
        ) : (
          <Img
            src={product.cover}
            width="80px"
            marginRight="5"
            borderRadius="md"
          />
        )}
        <Flex direction="column" justifyContent="space-between">
          {isLoading ? (
            <Skeleton height="30px" width="100px" />
          ) : (
            <Heading as="h2" size="lg">
              {product.title}
            </Heading>
          )}

          {isLoading ? (
            <Skeleton height="30px" width="100px" />
          ) : (
            <Text as="strong" fontSize="lg">
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </Text>
          )}
          <Rating value={product.rating || 0} />
        </Flex>
      </Flex>
      <Flex direction="column" align="flex-end" justifyContent="flex-end">
        {isLoading ? (
          <Skeleton height="30px" width="100px" />
        ) : (
          <Box>
            <span>x</span>
            <Text as="span" fontSize="4xl">
              {item.quantity}
            </Text>
          </Box>
        )}
        {isLoading ? (
          <Skeleton height="30px" width="100px" />
        ) : (
          <Box>
            Subtotal:
            <strong>
              {` ${new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price * item.quantity)}`}
            </strong>
          </Box>
        )}
      </Flex>
    </Flex>
  );
}
