import { FormControl, FormLabel } from '@chakra-ui/form-control';
import {
  Input,
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Select,
} from '@chakra-ui/react';

import InputMask from 'react-input-mask';

export function Payment(): JSX.Element {
  return (
    <Box>
      <Heading as="h1" size="xl" marginBottom="4">
        Pagamento
      </Heading>

      <SimpleGrid columns={[1, 2]} gap="5">
        <Stack spacing="3">
          <FormControl id="card-number">
            <FormLabel>Número do cartão</FormLabel>
            <Input
              mask="9999-9999-9999-9999"
              as={InputMask}
              type="text"
              variant="filled"
              placeholder="0000-0000-0000-0000"
            />
          </FormControl>
          <FormControl id="titular">
            <FormLabel>Nome do títular</FormLabel>
            <Input type="text" variant="filled" placeholder="Nome" />
          </FormControl>
          <SimpleGrid columns={[1, 2]} gap="3">
            <FormControl id="digitos">
              <FormLabel>Dígitos de segurança</FormLabel>
              <Input
                mask="999"
                as={InputMask}
                type="text"
                variant="filled"
                placeholder="000"
              />
            </FormControl>
            <FormControl id="validade">
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
          <FormControl id="parcelas">
            <FormLabel>Parcelas</FormLabel>
            <Select placeholder="Select country" variant="filled">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
