import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Products } from './pages/Products';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}
