import React from 'react';
import { Typography, Grid, Link } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { Section } from '../../components/Section/Section';

export function WelcomePage() {
  const members = [
    {
      name: 'Yazykova Daria',
      image: 'https://avatars.githubusercontent.com/u/93446641?v=4',
      gitHub: 'https://github.com/YazykovaDaria',
    },
    {
      name: 'Kostya Yurkevich',
      image: 'https://avatars.githubusercontent.com/u/58595156?v=4',
      gitHub: 'https://github.com/Doooodie',
    },
    {
      name: 'Ivan Bobrik',
      image:
        'https://cdn.palobby.com/ui/main/shared/img/commanders/thumbs/img_raptor_nemicus_thumb.png',
      gitHub: 'https://github.com/ivan52945',
    },
  ];

  const { t } = useTranslation();

  return (
    <>
      <Section name='GraphQL'>
        <Typography sx={{ padding: '30px 0 60px' }}>{t('hello.info.content')}</Typography>
      </Section>
      <Section name='RS School'>
        <Typography sx={{ padding: '30px 0 60px' }}>{t('hello.course.about')}</Typography>
        <Typography sx={{ padding: '0 0 10px' }}>{t('hello.course.info')}</Typography>
      </Section>
      <Section name={t('hello.members.title')}>
        <Grid container columns={3} wrap='wrap'>
          {members.map(({ name, image, gitHub }) => (
            <React.Fragment key={name}>
              <Grid item xs={1} sx={{ alignSelf: 'center', justifySelf: 'center' }}>
                <Link href={gitHub}>
                  <Typography sx={{ textAlign: 'center' }}> {name}</Typography>
                </Link>
              </Grid>
              <Grid item xs={2}>
                <img src={image} style={{ height: '60px', objectFit: 'contain' }} alt='avatar' />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Section>
    </>
  );
}
