import { Box, ButtonGroup, Flex, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { FiGrid, FiList } from 'react-icons/fi';
import { ProductsCards } from './components/ProductsCards';
import { ProductsList } from './components/ProductsList';

export function Products(): JSX.Element {
  const [view, setView] = useState('grid');

  return (
    <Box marginTop="2">
      <Flex justifyContent="flex-end" margin="10px 0">
        <ButtonGroup size="md" isAttached variant="outline">
          <IconButton
            mr="-px"
            icon={<FiList />}
            aria-label="Grid"
            variant={view === 'list' ? 'solid' : 'outline'}
            colorScheme={view === 'list' ? 'blackAlpha' : 'gray'}
            onClick={() => setView('list')}
          />
          <IconButton
            mr="-px"
            icon={<FiGrid />}
            aria-label="Grid"
            variant={view === 'grid' ? 'solid' : 'outline'}
            colorScheme={view === 'grid' ? 'blackAlpha' : 'gray'}
            onClick={() => setView('grid')}
          />
        </ButtonGroup>
      </Flex>
      {view === 'list' ? <ProductsList /> : <ProductsCards />}
    </Box>
  );
}
