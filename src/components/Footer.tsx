import { Container, Toolbar, Box, Link, Stack, Typography } from '@mui/material';

export function Footer() {
  return (
    <Container component='footer'>
      <Toolbar>
        <Stack>
          <Link href='https://github.com/YazykovaDaria'>YazykovaDaria</Link>
          <Link href='https://github.com/Doooodie'>Doooodie</Link>
          <Link href='https://github.com/ivan52945'>Nemicus</Link>
        </Stack>
        <Box flexGrow={1} />
        <Typography>2023</Typography>
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
