import { useAppSelector } from 'src/hooks/reduxHooks';
import { Container, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DocsRouter } from './DocsRouter';

export function DocsExplorer() {
  const { scheema, isOpen } = useAppSelector((state) => state.docs);
  const { data } = scheema;
  const { t } = useTranslation();

  const { mode } = useTheme().palette;
  const background = mode === 'dark' ? '#263238' : '#eceff1';

  const query = useMediaQuery('(min-width:600px)');

  const translateDir = query ? 'X' : 'Y';

  return (
    <Container
      sx={{
        position: 'absolute',
        top: '0',
        right: '0%',
        transition: '0.4s',
        transform: isOpen ? `translate${translateDir}(5px)` : `translate${translateDir}(200%)`,
        height: '100%',
        backgroundColor: background,
        zIndex: 2,
        borderRadius: '10px',
        overflowY: 'scroll',
        pb: '10px',
      }}
    >
      {data ? <DocsRouter /> : <p>{t('main.notDocs')}</p>}
    </Container>
  );
}
