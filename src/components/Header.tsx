import { AppBar, Typography, Toolbar, Box, Slide, Container } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTranslation } from 'react-i18next';
import { createContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LangSwitcher } from './langSwitcher/LangSwitcher';
import { AuthButton } from './authButton/AuthButton';

export function Header() {
  const { t } = useTranslation();

  const { email, checked } = useAuth();

  const trigger = useScrollTrigger();

  return (
    <AppBar sx={{ height: !trigger ? '4rem' : '3rem', transition: '0.6s' }}>
      <Toolbar
        sx={{ color: 'white' }}
        id='back-to-top-anchor'
        style={{ minHeight: '3rem', height: '100%' }}
      >
        <Link to='/' style={{ fontSize: 'inherit', color: 'inherit', textDecoration: 'none' }}>
          <Typography component='h1'>RS React GraphQL</Typography>
        </Link>
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
      </Toolbar>
    </AppBar>
  );
}

/*
          <IconButton sx={{ borderRadius: 2, color: 'inherit', columnGap: '5px' }}>
            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
              {t('header.theme-button')}
            </Typography>
            <WbSunny />
          </IconButton>

          26.052023 дожидается редакса или потом удалим
*/
