import { FocusEvent } from 'react';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
import { updateQuery } from 'src/store/slices/editorSlice';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function Editor() {
  const { t } = useTranslation();
  const { query } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    dispatch(updateQuery(inputValue));
  };

  console.log(query);
  return (
    <form>
      <TextField
        sx={{ width: '100%', height: '100%', '& fieldset': { border: 'none' } }}
        onBlur={handleBlur}
        placeholder={t('main.editorPlaceholder') as string}
        multiline
        fullWidth
        maxRows={100}
      />
    </form>
  );
}
