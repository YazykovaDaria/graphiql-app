// import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
// import { addRout } from 'src/store/slices/docsSlice';
import { Box } from '@mui/material';
// import { Typography } from '@mui/material/styles/createTypography';
// import { BoxForArgs } from './BoxForArgs';
// import { PrevButton } from './PrevButton';

export function DocsRouter() {
  // const dispatch = useAppDispatch();
  // const { scheema, rout } = useAppSelector((state) => state.docs);
  // const lastRout = rout[rout.length - 1];

  // const allTypes = scheema.data.__schema.types;
  // const [item] = allTypes.filter((t) => t.name === lastRout.name);

  // console.log(allTypes);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {/* <PrevButton />

      <Typography variant='h5' component='h2'>
        {item.name}
      </Typography>

      {item.fields ? (
        item.fields.map((field) => {
          let fieldTypeName = field.type.name;
          if (field.type.name === null) {
            // в некоторых случаях надо глубже проваливаться в ofType
            fieldTypeName = field.type.ofType.name;
          }

          return (
            <>
              <Typography variant='h6'>{field.name}</Typography>

              <Box sx={{ display: 'flex', gap: '5px' }}>
                {field.args && (
                  <>
                    <span>(</span>
                    <BoxForArgs args={field.args} />
                    <span>) :</span>
                  </>
                )}

                <Typography
                  onClick={() => dispatch(addRout({ name: fieldTypeName, type: 'types' }))}
                >
                  {fieldTypeName}
                </Typography>
              </Box>

              <Typography sx={{ color: 'green' }}>{field.description}</Typography>
            </>
          );
        })
      ) : (
        <Typography>{item.description}</Typography>
      )} */}
    </Box>
  );
}
