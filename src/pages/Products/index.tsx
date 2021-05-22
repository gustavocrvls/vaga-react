import { Box, ButtonGroup, Flex, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiGrid, FiList } from 'react-icons/fi';
import { notifyError } from '../../components/Notifications';
import { api } from '../../services/api';
import { ProductsCards } from './components/ProductsCards';
import { ProductsList } from './components/ProductsList';
import { Product } from './dtos';

export function Products(): JSX.Element {
  const [view, setView] = useState('grid');
  const [products, setProducts] = useState<Product[]>([]);

  async function loadData() {
    try {
      const response = await api.get('products');
      setProducts(response.data);
    } catch (err) {
      notifyError('Não foi possível carregar os dados...');
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box>
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
      {view === 'list' ? (
        <ProductsList products={products} />
      ) : (
        <ProductsCards products={products} />
      )}
    </Box>
  );
}
