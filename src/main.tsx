import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import './index.css';
import './utils/firebase/firebase';
import './i18next/i18n';
import { Preloader } from './components/langSwitcher/preloader/Preloader';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </StrictMode>
);
