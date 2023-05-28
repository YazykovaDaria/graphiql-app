import { Toolbar } from 'src/components/toolbar/Toolbar';
import { Editor } from 'src/components/editor/Editor';
import { ResponseSection } from 'src/components/responseSection/ResponseSection';
import { Grid, useTheme } from '@mui/material';

export function MainPage() {
  const {
    palette: { mode },
  } = useTheme();

  const light = mode === 'light';

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

      <Grid item xs={12} sm={6} component='section'>
        <ResponseSection />
      </Grid>
    </Grid>
  );
}
