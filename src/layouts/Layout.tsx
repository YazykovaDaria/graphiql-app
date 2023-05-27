import useScrollTrigger from '@mui/material/useScrollTrigger';
import { CssBaseline, Fade, Box, Fab } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

interface ScrollElementProps {
  children?: React.ReactElement;
}

function ScrollTop({ children = undefined }: ScrollElementProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    anchor?.scrollIntoView({
      block: 'center',
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 60, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function Layout() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <ScrollTop>
        <Fab size='small' aria-label='scroll back to top' sx={{ zIndex: 3 }}>
          <ArrowUpward />
        </Fab>
      </ScrollTop>
      <Footer />
    </>
  );
}

export default Layout;
