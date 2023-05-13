import { Stack } from '@mui/material';
import { QueryButton } from '../queryButton/QueryButton';
import { DocsButton } from '../docsButton/DocsButton';
import { PrettyButton } from '../prettyButton/PrettyButton';

export function Toolbar() {
  return (
    <Stack>
      <DocsButton />
      <QueryButton />
      <PrettyButton />
    </Stack>
  );
}
