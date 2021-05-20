import { Box } from '@chakra-ui/react';
import { HeaderProps } from './dtos';

export function Header(): JSX.Element {
  return (
    <Box as="header" padding="4rem" backgroundColor="#EBCD62">
      Aviaras
    </Box>
  );
}
