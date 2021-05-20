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
      <Flex>
        <Img
          src={bookImg}
          alt="Book"
          height="130px"
          margin="0 10px 0 0"
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
      </Flex>
      <Button type="button" colorScheme="blackAlpha" backgroundColor="#3D3D3D">
        Mais Detalhes
      </Button>
    </Flex>
  );
}
