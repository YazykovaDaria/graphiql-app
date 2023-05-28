import { useAppSelector } from 'src/hooks/reduxHooks';
import { Container } from '@mui/material';
import { DocsRouter } from './DocsRouter';

export function DocsExplorer() {
  const { scheema, isOpen } = useAppSelector((state) => state.docs);
  const { data } = scheema;

  return (
    <Container
      sx={{
        position: 'absolute',
        top: '0',
        right: '0%',
        transition: '0.4s',
        transform: isOpen ? 'translateX(200%)' : 'translateX(0)',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 2,
        background: '#FCFCFC',
        borderRadius: '10px',
      }}
    >
      {data ? <DocsRouter /> : <p>data not found</p>}
    </Container>
  );
}
