import { useGetGraphQueryMutation } from 'src/store/api/graphQueryApi';
import { useEffect } from 'react';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { addScheema } from 'src/store/slices/docsSlice';

import { Toolbar } from 'src/components/toolbar/Toolbar';
import { Editor } from 'src/components/editor/Editor';
import { ResponseSection } from 'src/components/responseSection/ResponseSection';
import { Grid } from '@mui/material';
import { DocsExplorer } from 'src/components/docsExplorer/DocsExplorer';
import { queryForScheema } from './const';

export function MainPage() {
  const dispatch = useAppDispatch();
  const [getDocs] = useGetGraphQueryMutation();

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getDocs({ newQuery: queryForScheema });
        if ('data' in res) {
          dispatch(addScheema(res.data));
        }
      } catch (error) {
        console.log(error);
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
        height: '100vh',
        borderRadius: '10px',
        background: '#F0F0F0',
        m: 0,
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        component='section'
        sx={{ background: 'white', borderRadius: '10px', pr: 1 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={10} sx={{ px: '10px' }}>
            <Editor />
          </Grid>

          <Grid item xs={2} component='aside'>
            <Toolbar />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6} component='section'>
        <ResponseSection />
      </Grid>

      <DocsExplorer />
    </Grid>
  );
}
