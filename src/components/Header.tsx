import { AppBar, Typography, Toolbar, IconButton, Box, Slide } from '@mui/material';
import { WbSunny } from '@mui/icons-material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { LangSwitcher } from './langSwitcher/LangSwitcher';
import { AuthButton } from './authButton/AuthButton';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export function Header() {
  const { t } = useTranslation();

  const { email, checked } = useAuth();

  return (
    <HideOnScroll>
      <AppBar position='sticky'>
        <Toolbar sx={{ color: 'white' }} id='back-to-top-anchor'>
          <Typography component='h1'>RS React GraphQL</Typography>
          <Box flexGrow={1} />
          <LangSwitcher />
          <AuthButton
            title={`${
              email && checked
                ? t('header.authorization-button.log-out')
                : t('header.authorization-button.log-in')
            }`}
            isLogout={!!email}
            link='sign-in'
          />
          <IconButton sx={{ borderRadius: 2, color: 'inherit', columnGap: '5px' }}>
            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
              {t('header.theme-button')}
            </Typography>
            <WbSunny />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
