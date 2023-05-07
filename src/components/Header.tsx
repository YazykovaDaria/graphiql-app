import { AppBar, Typography, Toolbar, IconButton, Box } from '@mui/material';
import { WbSunny } from '@mui/icons-material';

// import { useTranslation } from 'react-i18next';
import { LangSwitcher } from './langSwitcher/LangSwitcher';

export function Header() {
  // const { t } = useTranslation();

  return (
    <AppBar position='sticky'>
      <Toolbar sx={{ color: 'white' }}>
        <Typography component='h1'>RS React GraphQL</Typography>
        <Box flexGrow={1} />
        <LangSwitcher />
        <IconButton sx={{ borderRadius: 2, color: 'inherit' }}>
          <Typography sx={{ display: { xs: 'none', md: 'block' } }}>Theme mod:</Typography>
          <WbSunny />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
