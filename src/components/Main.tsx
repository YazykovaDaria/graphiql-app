import { Container, Toolbar } from '@mui/material';

interface IMainProps {
  children: React.ReactNode;
}

export function Main({ children }: IMainProps) {
  return (
    <Container
      component='main'
      sx={{ minHeight: 'calc(100vh - 9rem)', maxWidth: '100vw', overflow: 'hidden' }}
    >
      <Toolbar />
      {children}
    </Container>
  );
}
