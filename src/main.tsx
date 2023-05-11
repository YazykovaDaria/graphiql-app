import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { App } from './app/App';
import './index.css';
import './utils/firebase/firebase';
import './i18next/i18n';
import { Preloader } from './components/preloader/Preloader';

// перенести провайдер в апп после мёржа изменений кости

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<Preloader />}>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </Suspense>
  </StrictMode>
);
