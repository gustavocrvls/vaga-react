import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Karla, system-ui, sans-serif',
    heading: 'Karla, system-ui, sans-serif',
    mono: 'Karla, system-ui, sans-serif',
  },
  styles: {
    global: {
      '*::-webkit-scrollbar-track': {
        borderRadius: '10px',
        backgroundColor: 'gray',
      },
      '*::-webkit-scrollbar': {
        width: '8px',
        backgroundColor: 'black',
      },
      '*::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: 'black',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: 'Karla, system-ui, sans-serif',
      },
    },
    Badge: {
      baseStyle: {
        fontFamily: 'Karla, system-ui, sans-serif',
      },
    },
  },
});

export default theme;
