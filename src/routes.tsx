import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Products } from './pages/Products';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}
