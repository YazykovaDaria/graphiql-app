// it's just start template, please change routing if you need it
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as pages from '../pages';
import Layout from '../layouts/Layout';

const { MainPage, NotFoundPage, WelcomePage, AuthPage } = pages;

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path='main' element={<MainPage />} />
          <Route path='auth' element={<AuthPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
