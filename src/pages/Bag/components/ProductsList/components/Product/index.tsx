import { Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { api } from '../../../../../../services/api';
import { Product as IProduct } from '../../../../../Products/dtos';
import { ProductProps } from './dtos';

export function Product({ item }: ProductProps): JSX.Element {
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  useEffect(() => {
    api.get(`products/${item.id}`).then(response => {
      setProduct(response.data);
    });
  });

  return (
    <Flex>
      <Heading as="h2">{product.title}</Heading>
      <div>{item.quantity}</div>
    </Flex>
  );
}
