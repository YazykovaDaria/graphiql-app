import { AppBar, Typography, Toolbar, IconButton, Box, Button } from '@mui/material';
import { WbSunny } from '@mui/icons-material';

export function Header() {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ color: 'white' }}>
        <Typography component='h1'>RS React GraphQL</Typography>
        <Box flexGrow={1} />
        <Button sx={{ color: 'inherit' }}>Lang: EN</Button>
        <IconButton sx={{ borderRadius: 2, color: 'inherit' }}>
          <Typography>Theme mod:</Typography>
          <WbSunny />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
