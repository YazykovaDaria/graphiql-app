import { FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
import { updateQuery } from 'src/store/slices/editorSlice';
import { TextField } from '@mui/material';

export function Editor() {
  const { query } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = (e.currentTarget[0] as HTMLTextAreaElement).value;
    // console.log(inputValue);
    dispatch(updateQuery(inputValue));
    console.log(query);
  };

  // console.log(query);

  return (
    <form onSubmit={handleSubmit}>
      <TextField sx={{ width: '100%', height: '100%', border: 'none' }} />
    </form>
  );
}
