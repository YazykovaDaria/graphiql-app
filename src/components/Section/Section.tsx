import React from 'react';
import { Container, Typography } from '@mui/material';

type ISectionProps = {
  name: string;
  children?: React.ReactNode;
};

export function Section({ children = '', name }: ISectionProps) {
  return (
    <Container component='section' sx={{ flexGrow: 1, textAlign: 'center', padding: '20px 0' }}>
      <Typography component='h3' variant='h3'>
        {name}
      </Typography>
      <Container maxWidth='md'> {children}</Container>
    </Container>
  );
}
