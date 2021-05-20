import { Box } from '@chakra-ui/react';
import { ContainerProps } from './dtos';

export function Container({ children }: ContainerProps): JSX.Element {
  return (
    <Box maxWidth="1024px" margin="0 auto">
      <Box margin="0 10px">{children}</Box>
    </Box>
  );
}
