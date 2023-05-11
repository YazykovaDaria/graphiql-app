import { Routes, Route } from 'react-router-dom';
import * as pages from '../../pages';

const { MainPage, NotFoundPage, WelcomePage, SignUpPage, SignInPage } = pages;

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
