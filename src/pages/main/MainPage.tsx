import { Toolbar } from 'src/components/toolbar/Toolbar';
import { Editor } from 'src/components/editor/Editor';
import { ResponseSection } from 'src/components/responseSection/ResponseSection';
import { Grid } from '@mui/material';

export function MainPage() {
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
    </Grid>
  );
}
