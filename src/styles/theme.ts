import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Noto Sans, system-ui, sans-serif',
    heading: 'Noto Sans, system-ui, sans-serif',
    mono: 'Noto Sans, system-ui, sans-serif',
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
});

export default theme;
