import { Box, Button, Flex, Heading, Img, Stack, Text } from '@chakra-ui/react';
import { FiStar } from 'react-icons/fi';
import bookImg from '../../../../../../assets/book.png';

export function Item(): JSX.Element {
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
          src={bookImg}
          alt="Book"
          width="100%"
          height="120px"
          objectFit="cover"
          borderRadius="md"
        />
        <Flex direction="column" justifyContent="space-between">
          <Heading as="h1">Ordem Vermelha</Heading>
          <Text as="strong" fontWeight="600" fontSize="xl">
            R$ 40,00
          </Text>
          <Stack direction="row">
            <FiStar fill="#3D3D3D" stroke="#3D3D3D" />
            <FiStar fill="#3D3D3D" stroke="#3D3D3D" />
            <FiStar fill="#3D3D3D" stroke="#3D3D3D" />
            <FiStar />
            <FiStar />
          </Stack>
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
