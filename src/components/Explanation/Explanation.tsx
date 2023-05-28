import { Grid, Typography } from '@mui/material';
import { Presentation, IPresentationProps } from './Presentation';

export interface IExplanationProps {
  name: string;
  description: string;
  example: IPresentationProps;
}

export function Explanation({ name, description, example }: IExplanationProps) {
  return (
    <Grid container columns={2}>
      <Grid item columns={2} display='flex' width='100%'>
        <Typography variant='h5' padding='5px' textAlign='center' margin='auto'>
          {name}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography padding='5px' margin='40px'>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Presentation code={example.code} aside={example.aside} />
      </Grid>
    </Grid>
  );
}
