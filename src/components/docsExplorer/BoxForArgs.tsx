import { Typography, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { IGraphQlArg } from 'src/types/scheema';
import { FieldTypeLink } from './FieldTypeLink';

type Props = {
  args: IGraphQlArg[];
};

export function BoxForArgs({ args }: Props) {
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      {args.map((arg) => {
        return (
          <Box sx={{ display: 'flex' }} key={uuidv4()}>
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <Typography>{`${arg.name}:`}</Typography>
              {arg.type && <FieldTypeLink types={arg.type} name={arg.name} />}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
