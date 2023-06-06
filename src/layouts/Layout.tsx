import { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  useMediaQuery,
} from '@mui/material';
import ScrollTop from 'src/components/ScrollTop';
import { ColorModeContext } from 'src/context/colorModeContext';
import { Footer } from 'src/components/Footer';
import { Header } from '../components/header/Header';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function Layout() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  if (!localStorage.theme) {
    if (prefersDarkMode) localStorage.theme = 'dark';
    else localStorage.theme = 'light';
  }

  const [mode, setMode] = useState<'dark' | 'light'>(
    localStorage.theme === 'dark' ? 'dark' : 'light'
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <SnackbarProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <Box display='flex' flexDirection='column' minHeight='100vh'>
            <CssBaseline enableColorScheme />
            <Header />
            <Outlet />
            <Footer />
            <ScrollTop />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </SnackbarProvider>
  );
}

export default Layout;
