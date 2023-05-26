import React from 'react';
import { Typography, Grid, Container, Link } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section } from '../../components/Section/Section';
import { useAuth } from '../../hooks/useAuth';
import { Explanation } from '../../components/Explanation/Explanation';
import { members, explList } from './const';

export function WelcomePage() {
  const { t } = useTranslation();
  const { email, checked } = useAuth();

  const link =
    email && checked
      ? { href: 'main', name: t(`hello.button-to-main.to-main`) }
      : { href: 'sign-in', name: t(`hello.button-to-main.log-in`) };

  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
        <Link
          component={NavLink}
          to={link.href}
          sx={{
            textDecoration: 'none',
            color: 'white',
            backgroundColor: 'rgb(25, 118, 210)',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          {link.name}
        </Link>
      </Container>
      <Section name='GraphQL'>
        <Typography sx={{ padding: '30px 0 60px' }}>{t('hello.info.content')}</Typography>
      </Section>
      <Section name={t(`hello.advantages.title`)}>
        {explList.map(({ name, content }) => (
          <Explanation
            name={t(`hello.advantages.${name}.title`)}
            description={t(`hello.advantages.${name}.description`)}
            example={content}
            key={name}
          />
        ))}
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
