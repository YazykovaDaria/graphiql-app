import { Box, Stack, Typography, Container } from '@mui/material';

import { Section } from '../../components/Section/Section';

export function WelcomePage() {
  return (
    <>
      <Section name='GraphQL'>
        <Container maxWidth='sm'>
          <Typography sx={{ padding: '30px 0 60px' }}>
            GraphQL is a query language for APIs and a runtime for fulfilling those queries with
            your existing data. GraphQL provides a complete and understandable description of the
            data in your API, gives clients the power to ask for exactly what they need and nothing
            more, makes it easier to evolve APIs over time, and enables powerful developer tools.
          </Typography>
        </Container>
      </Section>
      <Section name='RS School'>
        <Container maxWidth='sm'>
          <Typography sx={{ padding: '30px 0 60px' }}>
            RS School is free-of-charge and community-based education program conducted by The
            Rolling Scopes developer community since 2013.
          </Typography>
          <Typography sx={{ padding: '0 0 10px' }}>
            Everyone can study at RS School, regardless of age, professional employment, or place of
            residence. The mentors and trainers of our school are front-end and javascript
            developers from different companies and countries.
          </Typography>
        </Container>
        <Stack direction='row' sx={{ height: '100%' }}>
          <Box flexGrow={1}>11</Box>
          <Box flexGrow={1}>11</Box>
        </Stack>
      </Section>
    </>
  );
}
