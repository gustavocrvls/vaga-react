import { Button, Flex, Heading, Img, Stack, Text } from '@chakra-ui/react';
import { FiStar } from 'react-icons/fi';
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
      <Stack align="center" width="100%">
        <Img
          src={product.cover}
          alt="Book"
          width="100%"
          height="120px"
          objectFit="cover"
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
        <Flex justifyContent="flex-end" width="100%">
          <Button
            type="button"
            colorScheme="blackAlpha"
            backgroundColor="#3D3D3D"
          >
            Mais Detalhes
          </Button>
        </Flex>
      </Stack>
    </Flex>
  );
}
