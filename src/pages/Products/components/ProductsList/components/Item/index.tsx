import { Button, Flex, Heading, Img, Stack, Text } from '@chakra-ui/react';
import { FiStar } from 'react-icons/fi';
import { Rating } from '../../../../../../components/Rating';

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
          src="https://m.media-amazon.com/images/I/51Y+hQTWOsL.jpg"
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
          <Rating value={1} />
        </Flex>
      </Flex>
      <Button type="button" colorScheme="blackAlpha" backgroundColor="#3D3D3D">
        Mais Detalhes
      </Button>
    </Flex>
  );
}
