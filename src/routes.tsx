import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Bag } from './pages/Bag';
import { Product } from './pages/Product';
import { Products } from './pages/Products';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={Product} />
          <Route path="/bag" component={Bag} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
