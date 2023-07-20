import { useAppSelector } from 'src/hooks/reduxHooks';
import { Box, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { IGraphQlSchema, IGraphQlField } from 'src/types/scheema';
import { PrevButton } from './PrevButton';
import { BoxForField } from './BoxForField';

export function DocsRouter() {
  const { scheema, rout } = useAppSelector((state) => state.docs);
  const lastRout = rout[rout.length - 1];
  const data = scheema as unknown as IGraphQlSchema;

  // eslint-disable-next-line no-underscore-dangle
  const allTypes = data.data.data.__schema.types;

  const [item] = allTypes.filter((t) => t.name === lastRout);
  const fields = item.fields ? item.fields : item.inputFields;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <PrevButton />

      <Typography variant='h5' component='h2'>
        {item.name}
      </Typography>

      {fields ? (
        fields.map((field: IGraphQlField) => (
          <BoxForField rout={lastRout} field={field} key={uuidv4()} />
        ))
      ) : (
        <Typography>{item.description}</Typography>
      )}
    </Box>
  );
}
