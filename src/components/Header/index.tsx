import { Box, Flex, Heading, Img } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import iconImg from '../../assets/icon.svg';
import { Bag } from './components/Bag';

export function Header(): JSX.Element {
  return (
    <Box backgroundColor="#EBCD62" marginBottom="3">
      <Flex
        as="header"
        padding={[2, 5]}
        align="center"
        justifyContent="space-between"
        position="sticky"
        top="0"
        zIndex="100"
        maxWidth="1100px"
        margin="0 auto"
      >
        <Link to="/products">
          <Flex align="center">
            <Img
              src={iconImg}
              alt="Aviaras"
              width={[10, '40px']}
              marginRight="3"
            />
            <Heading as="h1">Aviaras</Heading>
          </Flex>
        </Link>
        <Bag />
      </Flex>
    </Box>
  );
}
