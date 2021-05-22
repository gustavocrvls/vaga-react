import { ChakraProvider } from '@chakra-ui/react';
import { BagProvider } from './contexts/BagContext';
import { Routes } from './routes';

import theme from './styles/theme';

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <BagProvider>
        <Routes />
      </BagProvider>
    </ChakraProvider>
  );
}

export default App;
