import { FormControl, FormLabel } from '@chakra-ui/form-control';
import {
  Input,
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Select,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { notifySuccess } from '../../components/Notifications';
import { BagContext } from '../../contexts/BagContext';

export function Payment(): JSX.Element {
  const { total } = useContext(BagContext);

  return (
    <form
      onSubmit={() => {
        notifySuccess('Cartão cadastrado com sucesso!');
      }}
    >
      <Flex
        direction="column"
        minHeight={['calc(100vh - 100px)']}
        justifyContent="space-between"
      >
        <Box>
          <Heading as="h1" size="xl" marginBottom="4">
            Pagamento
          </Heading>

          <SimpleGrid columns={[1, 2]} gap="5">
            <Stack spacing="3">
              <FormControl id="card-number" isRequired>
                <FormLabel>Número do cartão</FormLabel>
                <Input
                  mask="9999-9999-9999-9999"
                  as={InputMask}
                  type="text"
                  variant="filled"
                  placeholder="0000-0000-0000-0000"
                />
              </FormControl>
              <FormControl id="titular" isRequired>
                <FormLabel>Nome do títular</FormLabel>
                <Input type="text" variant="filled" placeholder="Nome" />
              </FormControl>
              <SimpleGrid columns={[1, 2]} gap="3">
                <FormControl id="digitos" isRequired>
                  <FormLabel>Dígitos de segurança</FormLabel>
                  <Input
                    mask="999"
                    as={InputMask}
                    type="text"
                    variant="filled"
                    placeholder="000"
                  />
                </FormControl>
                <FormControl id="validade" isRequired>
                  <FormLabel>Validade do cartão</FormLabel>
                  <Input
                    mask="99/99"
                    as={InputMask}
                    type="text"
                    variant="filled"
                    placeholder="MM/AA"
                  />
                </FormControl>
              </SimpleGrid>
            </Stack>
            <Box>
              <FormControl id="parcelas" isRequired>
                <FormLabel>Número de parcelas</FormLabel>
                <Select
                  placeholder="Escolha o número de parcelas"
                  variant="filled"
                >
                  {[...Array(12).keys()].map(v => (
                    <option key={v} value={Number(total / (v + 1)).toFixed(2)}>
                      {`${v + 1}x ${new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(Number(total / (v + 1)))}`}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </SimpleGrid>
        </Box>

        <Box textAlign="right">
          <Button
            rightIcon={<FiArrowRight />}
            type="submit"
            colorScheme="blackAlpha"
            backgroundColor="#3D3D3D"
          >
            Finalizar
          </Button>
        </Box>
      </Flex>
    </form>
  );
}
