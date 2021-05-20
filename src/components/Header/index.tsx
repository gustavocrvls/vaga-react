import { Flex, Heading, Img } from '@chakra-ui/react';
import { FiShoppingBag } from 'react-icons/fi';
import iconImg from '../../assets/icon.svg';

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      padding={[1, 3]}
      backgroundColor="#EBCD62"
      align="center"
      justifyContent="space-between"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Flex align="center">
        <Img src={iconImg} alt="Aviaras" width={[10, '100%']} />
        <Heading as="h1">Aviaras</Heading>
      </Flex>
      <FiShoppingBag size="34" />
    </Flex>
  );
}
