import { ChakraProvider } from '@chakra-ui/react';
import { CartProvider } from './contexts/CartContext';
import { Routes } from './routes';

import theme from './styles/theme';

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Routes />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
