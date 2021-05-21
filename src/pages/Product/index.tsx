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
import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Rating } from '../../components/Rating';

export function Product(): JSX.Element {
  const [value, setValue] = useState('0');

  return (
    <Box marginTop="3">
      <Flex>
        <Img
          src="https://m.media-amazon.com/images/I/51Y+hQTWOsL.jpg"
          alt="Book"
          height="500px"
          objectFit="cover"
          borderRadius="md"
          marginRight="3"
        />
        <Box>
          <Heading marginBottom="2" as="h1">
            Ordem Vermelha
          </Heading>
          <Rating value={2} />
          <Text marginTop="2" fontSize="xl">
            R$ 40,00
          </Text>
          <Text marginTop="2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquet lorem eu finibus posuere. Mauris consectetur felis eros, vel
            ullamcorper leo ultricies vel. Etiam vel aliquet ex. In mattis ante
            nec lorem fermentum, quis fringilla nisi scelerisque. Integer sit
            amet tincidunt dolor. Maecenas egestas at tortor ac pulvinar.
            Praesent quis metus iaculis, tempus diam id, pulvinar velit.
            Pellentesque pulvinar laoreet tellus lobortis porttitor. Etiam nunc
            sapien, tempor sit amet odio a, convallis molestie ipsum. Quisque in
            tincidunt mi. Curabitur viverra accumsan orci ac finibus. Ut arcu
            felis, tristique nec dolor pharetra, fringilla pretium diam. Sed
            feugiat ultricies ligula, non condimentum mauris aliquam in. Aliquam
            porttitor, neque eu egestas dictum, purus mauris semper dui, id
            fringilla erat dui nec nisl. Nullam sed hendrerit velit
          </Text>

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
