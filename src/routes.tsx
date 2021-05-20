import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Products } from './pages/Products';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Products} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
