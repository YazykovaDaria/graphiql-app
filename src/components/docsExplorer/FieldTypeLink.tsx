import { useAppDispatch } from 'src/hooks/reduxHooks';
import { addRout } from 'src/store/slices/docsSlice';
import { Box } from '@mui/material';
import { IGraphQlTypeDescription } from 'src/types/scheema';
import { FakeLink } from '../FakeLink/FakeLink';

type Props = {
  types: IGraphQlTypeDescription;
  name?: string;
};

// eslint-disable-next-line react/require-default-props
export function FieldTypeLink({ types, name }: Props) {
  const dispatch = useAppDispatch();
  const clickHandler = (typeName: string) => dispatch(addRout(typeName));

  let fieldTypeName: string | undefined = types.name;
  if (!fieldTypeName) {
    const nextName = types.ofType;
    fieldTypeName = nextName?.name ? nextName.name : nextName?.ofType?.name;
    return (
      <Box sx={{ display: 'flex' }}>
        <span>[</span>
        <FakeLink
          onClick={() => {
            if (name === 'ids') {
              return clickHandler('ID');
            }
            return clickHandler(`${fieldTypeName}`);
          }}
        >
          {name === 'ids' ? 'ID' : fieldTypeName}
        </FakeLink>
        <span> !]</span>
      </Box>
    );
  }

  return <FakeLink onClick={() => clickHandler(`${fieldTypeName}`)}>{fieldTypeName}</FakeLink>;
}
