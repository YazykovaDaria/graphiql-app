import { useGetGraphQueryMutation } from 'src/store/api/graphQueryApi';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { addScheema } from 'src/store/slices/docsSlice';

import { Toolbar } from 'src/components/toolbar/Toolbar';
import { Editor } from 'src/components/editor/Editor';
import { ResponseSection } from 'src/components/responseSection/ResponseSection';
import { Grid, useTheme } from '@mui/material';
import { DocsExplorer } from 'src/components/docsExplorer/DocsExplorer';
import { queryForScheema } from './const';

export function MainPage() {
  const {
    palette: { mode },
  } = useTheme();

  const light = mode === 'light';

  const dispatch = useAppDispatch();
  const [getDocs] = useGetGraphQueryMutation();

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getDocs({ newQuery: queryForScheema });
        if ('data' in res) {
          dispatch(addScheema(res));
        }
      } catch (error) {
        throw new Error((error as Error).message);
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: 1,
        width: '100%',
        borderRadius: '10px',
        background: light ? '#F0F0F0' : '#1D1D1D',
        m: 0,
        flexGrow: 1,
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        component='section'
        sx={{
          background: light ? 'white' : '#000000',
          borderRadius: '10px',
          pr: 1,
        }}
      >
        <Grid container spacing={2} sx={{ minHeight: '100%' }}>
          <Grid item xs={10} sx={{ px: '10px' }}>
            <Editor />
          </Grid>

          <Grid item xs={2} component='aside'>
            <Toolbar />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        component='section'
        sx={{ position: 'relative', minHeight: '100%' }}
      >
        <ResponseSection />
        <DocsExplorer />
      </Grid>
    </Grid>
  );
}
