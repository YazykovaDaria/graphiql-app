import { Routes, Route } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import { WithRequireAuth } from '../../hocs/WithRequireAuth';

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
            <WithRequireAuth>
              <MainPage />
            </WithRequireAuth>
          }
        />
        <Route path='sign-up' element={<SignUpPage />} />
        <Route path='sign-in' element={<SignInPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
