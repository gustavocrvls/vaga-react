import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Img,
  Input,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Rating } from '../../components/Rating';
import { api } from '../../services/api';
import { ParamTypes, Book } from './dtos';

export function Product(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState('0');
  const [book, setBook] = useState<Book>({} as Book);

  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    try {
      setIsLoading(true);
      api
        .get(`products/${id}`)
        .then(response => setBook(response.data))
        .then(() => setIsLoading(false));
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Box marginTop="3">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Button
            as={Link}
            to="/products"
            marginBottom="3"
            colorScheme="yellow"
          >
            Menu
          </Button>
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
              <Rating value={book.rating || 0} />
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
                      setValue(
                        Number(value) > 0 ? String(Number(value) - 1) : '0',
                      );
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
        </>
      )}
    </Box>
  );
}
