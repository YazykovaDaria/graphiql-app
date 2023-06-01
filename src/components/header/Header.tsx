import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Link, useScrollTrigger, Container, Divider, Grid } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import { LangSwitcher } from './langSwitcher/LangSwitcher';
import { LinkBtnWithAuth } from './linkBtn/LinkBtnWithAuth';
import ThemeButton from '../ThemeButton';

export function Header() {
  const { t } = useTranslation();
  const { email, checked } = useAuth();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return (
    <AppBar position='sticky' color='inherit' elevation={trigger ? 4 : 0} sx={{ flexWrap: 'wrap' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems='center'
            justifyContent='center'
          >
            <Grid item>
              <Link variant='h6' component={RouterLink} to='/' color='inherit' underline='hover'>
                GraphiQL
              </Link>
            </Grid>
            <Grid item flexGrow={{ sx: 0, sm: 1 }} />
            <Grid item>
              <LangSwitcher />
              <ThemeButton />
            </Grid>
            <Grid item>
              {email && checked && <LinkBtnWithAuth link='main' title={t('hello.to-main')} />}
              <LinkBtnWithAuth
                title={email && checked ? t('auth.logout') : t('auth.sign-in')}
                isLogout={!!email}
                link='sign-in'
              />

              {checked && !email && <LinkBtnWithAuth title={t('auth.sign-up')} link='sign-up' />}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
      <Divider />
    </AppBar>
  );
}
