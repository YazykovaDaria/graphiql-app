import { Backdrop, CircularProgress } from '@mui/material';

export function Preloader() {
  return (
    <Backdrop open>
      <CircularProgress sx={{ color: 'white' }} />
    </Backdrop>
  );
}
