import { Container } from '@mui/material';

export interface IPresentationProps {
  code: string;
  aside: string;
}

export function Presentation({ code, aside }: IPresentationProps) {
  return (
    <Container
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-around',
        fontSize: '0.7rem',
        margin: '60px 0',
      }}
    >
      <code>
        <pre style={{ textAlign: 'left' }}>{code}</pre>
      </code>
      <code>
        <pre style={{ textAlign: 'left' }}>{aside}</pre>
      </code>
    </Container>
  );
}
