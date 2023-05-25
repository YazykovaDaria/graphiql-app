import { Box } from '@mui/material';
import { QueryButton } from '../queryButton/QueryButton';
import { DocsButton } from '../docsButton/DocsButton';

export function Toolbar() {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <div>
        <DocsButton />
      </div>
      <div>
        <QueryButton />
      </div>
    </Box>
  );
}
