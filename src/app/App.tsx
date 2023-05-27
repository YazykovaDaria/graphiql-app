import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { WithAuthProvider } from '../hocs/WithAuthProvider';

export function App() {
  return (
    <WithAuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </WithAuthProvider>
  );
}
