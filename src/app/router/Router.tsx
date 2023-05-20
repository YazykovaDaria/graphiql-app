import { Routes, Route } from 'react-router-dom';
// import { AuthProvider } from '../../hocs/AuthProvider';
import Layout from '../../layouts/Layout';
import { RequireAuth } from '../../hocs/RequireAuth';

import * as pages from '../../pages';

const { MainPage, NotFoundPage, WelcomePage, SignUpPage, SignInPage } = pages;

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route
          path='main'
          element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>
          }
        />
        <Route path='sign-up' element={<SignUpPage />} />
        <Route path='sign-in' element={<SignInPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
