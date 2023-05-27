import { AppBar, Typography, Toolbar, Box, Link } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTranslation } from 'react-i18next';

import { Link as NavLink } from 'react-router-dom';
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
        <NavLink to='/' style={{ fontSize: 'inherit', color: 'inherit', textDecoration: 'none' }}>
          <Typography component='h1'>RS React GraphQL</Typography>
        </NavLink>

        <Box flexGrow={1} />
        <LangSwitcher />
        {checked && !email ? (
          <Link
            component={NavLink}
            to='/sign-up'
            sx={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'rgb(25, 118, 210)',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            {t('header.register-button').toUpperCase()}
          </Link>
        ) : (
          ''
        )}
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
