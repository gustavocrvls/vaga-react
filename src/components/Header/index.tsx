import { Box, Flex, Heading, Img } from '@chakra-ui/react';
import iconImg from '../../assets/icon.svg';
import { Bag } from './components/Bag';

export function Header(): JSX.Element {
  return (
    <Box backgroundColor="#EBCD62">
      <Flex
        as="header"
        padding={[1, 3]}
        align="center"
        justifyContent="space-between"
        position="sticky"
        top="0"
        zIndex="100"
        maxWidth="1100px"
        margin="0 auto"
      >
        <Flex align="center">
          <Img src={iconImg} alt="Aviaras" width={[10, '100%']} />
          <Heading as="h1">Aviaras</Heading>
        </Flex>
        <Bag />
      </Flex>
    </Box>
  );
}
