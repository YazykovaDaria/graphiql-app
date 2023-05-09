import React from 'react';
import { Typography, Grid, Link } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { Section } from '../../components/Section/Section';

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

const advantages = [
  {
    name: `Ask for what you need,get exactly that`,
    description: `Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphQL are fast and stable because they control the data they get, not the server.`,
  },
  {
    name: `Get many resources in a single request`,
    description: `GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.`,
  },
  {
    name: `Describe what’s possible with a type system`,
    description: `GraphQL APIs are organized in terms of types and fields, not endpoints. Access the full capabilities of your data from a single endpoint. GraphQL uses types to ensure Apps only ask for what’s possible and provide clear and helpful errors. Apps can use types to avoid writing manual parsing code.`,
  },
];

export function WelcomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Section name='GraphQL'>
        <Typography sx={{ padding: '30px 0 60px' }}>{t('hello.info.content')}</Typography>
      </Section>
      <Section name='For what'>
        <Grid container columns={3}>
          {advantages.map(({ name }) => (
            <Grid item xs={1} key={name}>
              <Typography variant='h5' padding='5px'>
                {name}
              </Typography>
            </Grid>
          ))}
          {advantages.map(({ name, description }) => (
            <Grid item xs={1} key={`${name}`}>
              <Typography padding='5px'>{description}</Typography>
            </Grid>
          ))}
        </Grid>
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
/*
          <Box flexGrow={1}>
            <Typography variant='h5'>Ask for what you need, get exactly that</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error exercitationem
              earum nesciunt, sunt, illo id sit aut dicta eveniet tempora enim laboriosam voluptates
              repudiandae voluptatum tenetur est impedit consequuntur?
            </Typography>
          </Box>
*/
