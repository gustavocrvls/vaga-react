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
import { FormEvent, useContext, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import InputMask from 'react-input-mask';
import { useHistory } from 'react-router';
import { notifySuccess } from '../../components/Notifications';
import { BagContext } from '../../contexts/BagContext';

export function Payment(): JSX.Element {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [secutiryDigits, setSecutiryDigits] = useState('');
  const [validity, setValidity] = useState('');
  const [plots, setPlots] = useState('');

  const { total, setPayment } = useContext(BagContext);

  const history = useHistory();

  function submit(e: FormEvent) {
    e.preventDefault();

    setPayment({
      cardNumber,
      cardHolder,
      secutiryDigits: Number(secutiryDigits),
      validity: new Date(validity),
      plots: Number(plots),
    });

    notifySuccess('Cartão cadastrado com sucesso!');

    history.push('/completion');
  }

  return (
    <form onSubmit={submit}>
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
                  value={cardNumber}
                  onChange={e => setCardNumber(e.target.value)}
                />
              </FormControl>
              <FormControl id="titular" isRequired>
                <FormLabel>Nome do títular</FormLabel>
                <Input
                  type="text"
                  variant="filled"
                  placeholder="Nome"
                  value={cardHolder}
                  onChange={e => setCardHolder(e.target.value)}
                />
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
                    value={secutiryDigits}
                    onChange={e => setSecutiryDigits(e.target.value)}
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
                    value={validity}
                    onChange={e => setValidity(e.target.value)}
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
                  value={plots}
                  onChange={e => setPlots(e.target.value)}
                >
                  {[...Array(12).keys()].map(v => (
                    <option key={v} value={v + 1}>
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
