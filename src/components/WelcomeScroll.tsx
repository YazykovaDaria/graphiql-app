import { useTranslation } from 'react-i18next';
import { Element as ScrollElement, Link as ScrollLink } from 'react-scroll';
import { Grid, Stack, Divider, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function WelcomeScroll() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid item xs={12} order={3}>
      <ScrollElement name='scroll-anchor' />
      <Stack alignItems='stretch' spacing={4}>
        <Divider />
        <ScrollLink
          to='scroll-anchor'
          smooth
          style={{
            alignSelf: 'center',
            textAlign: 'center',
            display: 'inline-grid',
            color: `${theme.palette.text.secondary}`,
            cursor: 'pointer',
          }}
        >
          {t('hello.learn-more')}
          <ExpandMoreIcon fontSize='large' sx={{ mx: 'auto' }} />
        </ScrollLink>
      </Stack>
    </Grid>
  );
}
