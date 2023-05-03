import { Container, Toolbar, Box, Link } from '@mui/material';

export function Footer() {
  return (
    <Container component='footer'>
      <Toolbar>
        <Link href='https://github.com/YazykovaDaria/graphiql-app.git'>GitHub</Link>
        <Box flexGrow={1} />
        <Link href='https://rs.school/'>
          <img
            src='https://rs.school/images/partners/logo-rs.svg'
            alt='RS'
            style={{ height: '50px' }}
          />
        </Link>
      </Toolbar>
    </Container>
  );
}
