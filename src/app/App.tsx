import { Provider } from 'react-redux';
import { setupStore } from 'src/store/store';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

export function App() {
  return (
    <Provider store={setupStore()}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}
