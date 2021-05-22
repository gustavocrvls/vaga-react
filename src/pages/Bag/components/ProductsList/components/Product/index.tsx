import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { Rating } from '../../../../../../components/Rating';
import { CartContext } from '../../../../../../contexts/CartContext';
import { api } from '../../../../../../services/api';
import { Product as IProduct } from '../../../../../Products/dtos';
import { ProductProps } from './dtos';

export function Product({ item }: ProductProps): JSX.Element {
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const { addSubtotal } = useContext(CartContext);

  useEffect(() => {
    api.get(`products/${item.id}`).then(response => {
      setProduct(response.data);
      addSubtotal(response.data.price * item.quantity);
    });
  }, []);

  return (
    <Flex
      backgroundColor="gray.200"
      borderRadius="md"
      padding="3"
      justifyContent="space-between"
    >
      <Flex>
        <Img
          src={product.cover}
          width="80px"
          marginRight="5"
          borderRadius="md"
        />
        <Flex direction="column" justifyContent="space-between">
          <Heading as="h2" size="lg">
            {product.title}
          </Heading>

          <Text as="strong" fontSize="lg">
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </Text>
          <Rating value={product.rating || 0} />
        </Flex>
      </Flex>
      <Flex direction="column" align="flex-end" justifyContent="flex-end">
        <Box>
          <span>x</span>
          <Text as="span" fontSize="4xl">
            {item.quantity}
          </Text>
        </Box>
        <Box>
          Subtotal:
          <strong>
            {` ${new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price * item.quantity)}`}
          </strong>
        </Box>
      </Flex>
    </Flex>
  );
}
