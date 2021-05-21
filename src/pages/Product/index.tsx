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
import { useContext, useEffect, useState } from 'react';
import { FiArrowLeft, FiMinus, FiPlus } from 'react-icons/fi';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Rating } from '../../components/Rating';
import { CartContext } from '../../contexts/CartContext';
import { api } from '../../services/api';
import { ParamTypes, Book } from './dtos';

export function Product(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState('0');
  const [book, setBook] = useState<Book>({} as Book);

  const { id } = useParams<ParamTypes>();

  const { addItem } = useContext(CartContext);

  function buy() {
    if (Number(quantity) === 0) {
      console.log('err');
    } else {
      addItem({
        id: Number(id),
        quantity: Number(quantity),
      });
      setQuantity('0');
    }
  }

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
        <Flex align="center" justifyContent="center">
          <Spinner size="lg" />
        </Flex>
      ) : (
        <>
          <Button
            as={Link}
            to="/products"
            marginBottom="3"
            colorScheme="yellow"
            leftIcon={<FiArrowLeft />}
          >
            Voltar
          </Button>
          <Flex direction={['column', 'row']} marginBottom="5">
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
                      setQuantity(
                        Number(quantity) > 0
                          ? String(Number(quantity) - 1)
                          : '0',
                      );
                    }}
                  />
                  <Input
                    margin="0 5px"
                    value={quantity}
                    type="number"
                    onChange={e => setQuantity(e.target.value)}
                    textAlign="center"
                  />
                  <IconButton
                    aria-label="Minus"
                    icon={<FiPlus />}
                    onClick={() => {
                      setQuantity(String(Number(quantity) + 1));
                    }}
                  />
                </HStack>

                <Button
                  marginLeft="auto"
                  type="button"
                  colorScheme="blackAlpha"
                  backgroundColor="#3D3D3D"
                  onClick={() => buy()}
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
