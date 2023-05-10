import { FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
import { updateQuery } from 'src/store/slices/editorSlice';

export function Editor() {
  const { query } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = (e.currentTarget[0] as HTMLTextAreaElement).value;
    // console.log(inputValue);
    dispatch(updateQuery(inputValue));
  };

  console.log(query);

  return (
    <form onSubmit={handleSubmit}>
      <textarea />
      <button type='submit'>Submit</button>
    </form>
  );
}
