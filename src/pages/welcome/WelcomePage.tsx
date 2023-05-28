import { useTranslation } from 'react-i18next';
import { Typography, Grid, Container, Stack } from '@mui/material';
import { WelcomePapers } from 'src/components/WelcomePapers';
import { WelcomeHeading } from 'src/components/WelcomeHeading';
import { WelcomeScroll } from 'src/components/WelcomeScroll';
import { WelcomeAvatars } from 'src/components/WelcomeAvatars';

export function WelcomePage() {
  const { t } = useTranslation();

  return (
    <Container component='main' maxWidth='xl' sx={{ my: 10 }}>
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        rowSpacing={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={{ xs: 4, sm: 8, md: 12 }}
      >
        <WelcomeHeading />
        <WelcomeScroll />

        <Grid item xs={12} md={7} order={4} textAlign='center'>
          <Stack spacing={4}>
            <Typography variant='h3'>{t('hello.info.title')}</Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {t('hello.info.content')}
            </Typography>
          </Stack>
        </Grid>

        <WelcomePapers />

        <Grid item xs={12} md={7} order={11} textAlign='center'>
          <Stack spacing={4}>
            <Typography variant='h3'>RS School</Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {t('hello.course.about')}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {t('hello.course.info')}
            </Typography>
          </Stack>
        </Grid>

        <WelcomeAvatars />
      </Grid>
    </Container>
  );
}
