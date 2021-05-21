import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Img,
  Input,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Rating } from '../../components/Rating';
import { api } from '../../services/api';
import { Book } from './dtos';

export function Product(): JSX.Element {
  const [value, setValue] = useState('0');
  const [book, setBook] = useState<Book>({} as Book);

  useEffect(() => {
    api.get('products/1').then(response => setBook(response.data));
  }, []);

  return (
    <Box marginTop="3">
      <Flex>
        <Img
          src={book.cover}
          alt="Book"
          height="500px"
          objectFit="cover"
          borderRadius="md"
          marginRight="3"
        />
        <Box>
          <Heading marginBottom="2" as="h1">
            {book.title}
          </Heading>
          <Rating value={book.rating} />
          <Text marginTop="2" fontSize="xl">
            {new Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(book.price)}
          </Text>
          <Text marginTop="2">{book.description}</Text>

          <Flex marginTop="2">
            <HStack maxW="200px">
              <IconButton
                aria-label="Minus"
                icon={<FiMinus />}
                onClick={() => {
                  setValue(Number(value) > 0 ? String(Number(value) - 1) : '0');
                }}
              />
              <Input
                margin="0 5px"
                value={value}
                type="number"
                onChange={e => setValue(e.target.value)}
                textAlign="center"
              />
              <IconButton
                aria-label="Minus"
                icon={<FiPlus />}
                onClick={() => {
                  setValue(String(Number(value) + 1));
                }}
              />
            </HStack>

            <Button
              marginLeft="auto"
              type="button"
              colorScheme="blackAlpha"
              backgroundColor="#3D3D3D"
            >
              Comprar
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
