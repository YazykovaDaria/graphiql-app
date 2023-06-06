import { Box, Link, Container, Typography, Paper, Grid } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { ReactComponent as RSSchoolLogo } from 'src/assets/icons/rsschool-logo.svg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
  padding: theme.spacing(1),
}));

export function Footer() {
  const appTheme = useTheme();
  const invertAmount = appTheme.palette.mode === 'light' ? 0 : 100;

  return (
    <Box
      component='footer'
      py={3}
      mt='auto'
      bgcolor={(theme) =>
        theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]
      }
    >
      <Container maxWidth='xl'>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Item>
              <Link href='https://rs.school/' target='_blank' color='inherit' underline='none'>
                <RSSchoolLogo
                  height={30}
                  style={{ filter: `invert(${invertAmount})`, fill: 'initial' }}
                />
              </Link>
            </Item>
          </Grid>
          <Grid item flexGrow={{ sx: 0, sm: 1 }} />
          <Grid item>
            <Item>
              <Link
                href='https://github.com/YazykovaDaria'
                target='_blank'
                color='inherit'
                underline='hover'
              >
                Daria
              </Link>
              <Typography component='span'>, </Typography>
              <Link
                href='https://github.com/Doooodie'
                target='_blank'
                color='inherit'
                underline='hover'
              >
                Doodie
              </Link>

              <Typography component='span'> & </Typography>
              <Link
                href='https://github.com/ivan52945'
                target='_blank'
                color='inherit'
                underline='hover'
              >
                Nemicus
              </Link>
              <Typography component='span'>, 2023</Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
