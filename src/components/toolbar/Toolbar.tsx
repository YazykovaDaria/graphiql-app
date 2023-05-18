import { Box } from '@mui/material';
import { QueryButton } from '../queryButton/QueryButton';
import { DocsButton } from '../docsButton/DocsButton';
import { PrettyButton } from '../prettyButton/PrettyButton';

export function Toolbar() {
  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <DocsButton />
      <QueryButton />
      <PrettyButton />
    </Box>
  );
}
