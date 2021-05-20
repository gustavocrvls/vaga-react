import { Flex, Heading, Img, Text } from '@chakra-ui/react';
import { FiShoppingBag } from 'react-icons/fi';
import iconImg from '../../assets/icon.svg';

export function Header(): JSX.Element {
  return (
    <Flex
      as="header"
      padding="3rem"
      backgroundColor="#EBCD62"
      align="center"
      justifyContent="space-between"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <Flex align="center">
        <Img src={iconImg} alt="Aviaras" />
        <Heading as="h1">Aviaras</Heading>
      </Flex>
      <FiShoppingBag size="48" />
    </Flex>
  );
}
