import { useAppSelector } from 'src/hooks/reduxHooks';
import { Container, useMediaQuery } from '@mui/material';
import { DocsRouter } from './DocsRouter';

export function DocsExplorer() {
  const { scheema, isOpen } = useAppSelector((state) => state.docs);
  const { data } = scheema;

  const query = useMediaQuery('(min-width:600px)');

  const translateDir = query ? 'X' : 'Y';

  return (
    <Container
      sx={{
        position: 'absolute',
        top: '0',
        right: '0%',
        transition: '0.4s',
        transform: isOpen ? `translate${translateDir}(200%)` : `translate${translateDir}(5px)`,
        height: '100%',
        backgroundColor: 'white',
        zIndex: 2,
        background: '#ECFFE2',
        borderRadius: '10px',
      }}
    >
      {data ? <DocsRouter /> : <p>data not found</p>}
    </Container>
  );
}
