import { useTranslation } from 'react-i18next';
import { Grid, Stack, Typography, Avatar, Link } from '@mui/material';
import DariaAvatar from 'src/assets/avatars/daria.png';
import NemicusAvatar from 'src/assets/avatars/nemicus.jpg';
import DoodieAvatar from 'src/assets/avatars/doodie.png';

export function WelcomeAvatars() {
  const { t } = useTranslation();

  return (
    <Grid item component='section' xs={12} md={7} order={11} textAlign='center'>
      <Stack spacing={4} alignItems='center'>
        <Typography variant='h3'>{t('hello.members.title')}</Typography>
        <Stack direction='row' spacing={2}>
          <Avatar
            component={Link}
            href='https://github.com/Doooodie'
            target='_blank'
            alt='Kostya Yurkevich'
            src={DoodieAvatar}
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            component={Link}
            href='https://github.com/YazykovaDaria'
            target='_blank'
            alt='Yazykova Daria'
            src={DariaAvatar}
            sx={{ width: 56, height: 56 }}
          />
          <Avatar
            component={Link}
            href='https://github.com/ivan52945'
            target='_blank'
            alt='Ivan Bobrik'
            src={NemicusAvatar}
            sx={{ width: 56, height: 56 }}
          />
        </Stack>
      </Stack>
    </Grid>
  );
}
