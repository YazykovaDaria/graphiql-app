import { useTranslation } from 'react-i18next';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import { Prism } from '@mantine/prism';

const neededCode = `{
  "hero": {
    "name": "Luke Skywalker",
    "height": 1.72,
    "mass": 77
  }
}`;

const singleCode = `{
  "hero": {
    "name": "Luke",
    "friends": [
      { "name": "Obivan Kenobi" },
      { "name": "R2 D2" },
      { "name": "Han Solo" },
      { "name": "Leia Organa" }
    ],
  },
}`;

const typesCode = `type Query {
  hero: Character
}

type Character {
  name: String
  friends: [Character]
  homeWorld: Planet
  species: Species
}

type Planet {
  name: String
  climate: String
}

type Species {
  name: String
  lifespan: Int
  origin: Planet
}`;

export function WelcomePapers() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Grid item component='section' xs={12} md={6} order={{ xs: 5, md: 6 }}>
        <Typography variant='h4' mb={4}>
          {t('hello.advantages.needed.title')}
        </Typography>
        <Typography variant='subtitle1' component='h4' color='text.secondary'>
          {t('hello.advantages.needed.description')}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 6, md: 5 }}>
        <Stack alignItems='center'>
          <Prism noCopy colorScheme={theme.palette.mode} language='graphql'>
            {neededCode}
          </Prism>
        </Stack>
      </Grid>

      <Grid item component='section' xs={12} md={6} order={{ xs: 8, md: 7 }}>
        <Typography variant='h4' mb={4}>
          {t('hello.advantages.single.title')}
        </Typography>
        <Typography variant='subtitle1' component='h4' color='text.secondary'>
          {t('hello.advantages.single.description')}
        </Typography>
      </Grid>
      <Grid item component='section' xs={12} md={6} order={{ xs: 7, md: 8 }}>
        <Stack alignItems='center'>
          <Prism noCopy colorScheme={theme.palette.mode} language='graphql'>
            {singleCode}
          </Prism>
        </Stack>
      </Grid>

      <Grid item component='section' xs={12} md={6} order={{ xs: 9, md: 10 }}>
        <Typography variant='h4' mb={4}>
          {t('hello.advantages.types.title')}
        </Typography>
        <Typography variant='subtitle1' component='h4' color='text.secondary'>
          {t('hello.advantages.types.description')}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 10, md: 9 }}>
        <Stack alignItems='center'>
          <Prism noCopy colorScheme={theme.palette.mode} language='graphql'>
            {typesCode}
          </Prism>
        </Stack>
      </Grid>
    </>
  );
}
