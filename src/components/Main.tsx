import { Container } from '@mui/material';

interface IMainProps {
  children: React.ReactNode;
}

export function Main({ children }: IMainProps) {
  return (
    <Container component='main' sx={{ flexGrow: 1 }}>
      {children}
    </Container>
  );
}
