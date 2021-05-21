import { Button, Flex, Heading, Img, Text } from '@chakra-ui/react';
import { Rating } from '../../../../../../components/Rating';
import { ItemProps } from './dtos';

export function Item({ product }: ItemProps): JSX.Element {
  return (
    <Flex
      padding="2"
      backgroundColor="gray.100"
      borderRadius="md"
      justifyContent="space-between"
      align="center"
    >
      <Flex>
        <Img
          src={product.cover}
          alt="Book"
          height="130px"
          margin="0 10px 0 0"
          borderRadius="md"
        />
        <Flex direction="column" justifyContent="space-between">
          <Heading as="h1">{product.title}</Heading>
          <Text as="strong" fontWeight="600" fontSize="xl">
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </Text>
          <Rating value={product.rating} />
        </Flex>
      </Flex>
      <Button type="button" colorScheme="blackAlpha" backgroundColor="#3D3D3D">
        Mais Detalhes
      </Button>
    </Flex>
  );
}
