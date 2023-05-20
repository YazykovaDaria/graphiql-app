import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { AuthProvider } from '../hocs/AuthProvider';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}
