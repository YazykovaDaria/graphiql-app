import React from 'react';
import { Typography, Grid, Container, Link } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section } from '../../components/Section/Section';
import { useAuth } from '../../hooks/useAuth';
import { IPresentationProps } from '../../components/Explanation/Presentation';
import { Explanation } from '../../components/Explanation/Explanation';

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

type IExplanationInput = {
  name: string;
  content: IPresentationProps;
};

const explList: IExplanationInput[] = [
  {
    name: 'needed',
    content: {
      code: `{\n  hero {\n    name\n    height\n    mass\n  }\n}`,
      aside: `{\n  "hero": {\n   "name": "Luke",\n   "height": 1.72,\n   "mass": 77 \n }\n}`,
    },
  },
  {
    name: 'single',
    content: {
      code: `{\n  hero {\n    name\n    friend {\n      name\n    }\n  }\n}`,
      aside: `{\n  "hero" {\n    "name": "Luke"\n    "friends": [\n      "name": "Obivan Kenobi",\n      "name": "R2 D2",\n      "name": "Han Solo",\n      "name": "Leia Organa",\n    ]\n  }\n}`,
    },
  },
  {
    name: 'types',
    content: {
      code: `{\n  hero {\n    name\n    friends {\n      name\n      homeWorld {\n        name\n        climate\n      }\n      species {\n        name\n        lifespan\n        origin {\n          name\n        }\n      }\n    }\n  }\n}`,
      aside: `type Query {\n  hero: Character\n}\n\ntype Character {\n  name: String\n  friends: [Character]\n  homeWorld: Planet\n  species: Species\n}\n\ntype Planet {\n  name: String\n  climate: String\n}\n\ntype Species {\n  name: String\n  lifespan: Int\n  origin: Planet\n}`,
    },
  },
];

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

//
