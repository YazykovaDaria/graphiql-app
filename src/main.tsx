import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import './index.css';
import './i18next/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense fallback='...loading'>
      <App />
    </Suspense>
  </StrictMode>
);
