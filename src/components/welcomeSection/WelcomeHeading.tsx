import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'src/hooks/useAuth';
import { ReactComponent as GraphQlLogo } from 'src/assets/icons/graphql-logo-stacked.svg';

export function WelcomeHeading() {
  const { t } = useTranslation();
  const theme = useTheme();
  const { email, checked } = useAuth();
  const screenUpMedium = useMediaQuery(theme.breakpoints.up('md'));
  const link = email && checked ? 'main' : 'sign-in';

  return (
    <>
      <Grid item component='section' xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <Stack spacing={4}>
          <Typography variant='h3' textAlign={{ xs: 'center', md: 'left' }}>
            {t('hello.heading.describe')}.
          </Typography>
          <Typography variant='h3' textAlign={{ xs: 'center', md: 'left' }}>
            {t('hello.heading.ask')}.
          </Typography>
          <Typography variant='h3' textAlign={{ xs: 'center', md: 'left' }}>
            {t('hello.heading.get')}.
          </Typography>
          <Button
            component={RouterLink}
            to={link}
            variant='outlined'
            size='large'
            fullWidth={screenUpMedium}
            sx={{ minWidth: 300, alignSelf: 'center' }}
          >
            {t('hello.get-started')}
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
        <Stack alignItems='center'>
          <GraphQlLogo style={{ maxWidth: 250 }} />
        </Stack>
      </Grid>
    </>
  );
}
