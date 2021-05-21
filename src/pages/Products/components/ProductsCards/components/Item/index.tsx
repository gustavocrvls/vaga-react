import { Box, Button, Flex, Heading, Img, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Rating } from '../../../../../../components/Rating';
import { ItemProps } from './dtos';

export function Item({ product }: ItemProps): JSX.Element {
  return (
    <Flex
      padding="2"
      backgroundColor="gray.100"
      borderRadius="md"
      justifyContent="space-between"
    >
      <Stack align="center" justifyContent="space-between" width="100%">
        <Box>
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
        </Box>
        <Flex justifyContent="flex-end" width="100%">
          <Button
            as={Link}
            to={`/products/${product.id}`}
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
