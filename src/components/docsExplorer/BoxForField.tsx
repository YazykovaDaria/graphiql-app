import { mainRout } from 'src/store/slices/docsSlice';
import { Box, Typography } from '@mui/material';
import { IGraphQlField } from 'src/types/scheema';
import { BoxForArgs } from './BoxForArgs';
import { FieldTypeLink } from './FieldTypeLink';

type Props = {
  field: IGraphQlField;
  rout: string;
};

export function BoxForField({ field, rout }: Props) {
  if (rout === mainRout) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Typography variant='h6'>{field.name}</Typography>

        <Box sx={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
          {field.args && (
            <>
              <span>(</span>
              <BoxForArgs args={field.args} />
              <span>) :</span>
            </>
          )}

          {field.type && <FieldTypeLink types={field.type} />}
        </Box>

        <Typography>{field.description}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
      <Typography variant='h6'>{field.name}</Typography>
      <span>:</span>
      {field.type && <FieldTypeLink types={field.type} />}
    </Box>
  );
}
