import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
