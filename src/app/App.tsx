import { Provider } from 'react-redux';
import { setupStore } from 'src/store/store';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { WithAuthProvider } from '../hocs/WithAuthProvider';

export function App() {
  return (
    <Provider store={setupStore()}>
      <WithAuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </WithAuthProvider>
    </Provider>
  );
}
