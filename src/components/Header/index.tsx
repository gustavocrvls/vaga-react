import { Flex, Heading, Img } from '@chakra-ui/react';
import { useContext } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import iconImg from '../../assets/icon.svg';
import { CartContext } from '../../contexts/CartContext';

export function Header(): JSX.Element {
  const { items } = useContext(CartContext);

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
      {items.reduce((pv, cv) => pv + cv.quantity, 0)}
      <FiShoppingBag size="34" />
    </Flex>
  );
}
