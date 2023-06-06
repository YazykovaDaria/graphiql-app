import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { IconButton } from '@mui/material';

export function PrettyButton() {
  return (
    <IconButton aria-label='query' size='large' color='secondary'>
      <CleaningServicesIcon fontSize='inherit' />
    </IconButton>
  );
}
