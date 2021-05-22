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
import { notifyError, notifySuccess } from '../../components/Notifications';
import { Rating } from '../../components/Rating';
import { BagContext } from '../../contexts/BagContext';
import { api } from '../../services/api';
import { ParamTypes, IProduct } from './dtos';

export function Product(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState('1');
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const { id } = useParams<ParamTypes>();

  const { addItem } = useContext(BagContext);

  function buy() {
    addItem(
      {
        id: Number(id),
        quantity: Number(quantity),
      },
      Number(product.price),
    );

    setQuantity('1');
    notifySuccess('O produto foi adicionado à sacola!');
  }

  useEffect(() => {
    try {
      setIsLoading(true);
      api
        .get(`products/${id}`)
        .then(response => setProduct(response.data))
        .then(() => setIsLoading(false));
    } catch (err) {
      notifyError('Não foi possível buscar o produto :(');
    }
  }, []);

  return (
    <Box>
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
            Livros
          </Button>
          <Flex direction={['column', 'row']} marginBottom="5">
            <Img
              src={product.cover}
              alt="IProduct"
              height="500px"
              objectFit="cover"
              borderRadius="md"
              marginRight="3"
            />
            <Box>
              <Heading marginBottom="2" as="h1">
                {product.title}
              </Heading>
              <Rating value={product.rating || 0} />
              <Text marginTop="2" fontSize="xl">
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.price)}
              </Text>
              <Text marginTop="2">{product.description}</Text>

              <Flex marginTop="2" justifyContent="flex-end">
                <HStack maxW="200px">
                  <IconButton
                    aria-label="Minus"
                    icon={<FiMinus />}
                    onClick={() => {
                      setQuantity(
                        Number(quantity) > 1
                          ? String(Number(quantity) - 1)
                          : '1',
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
                  type="button"
                  marginLeft="2"
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
