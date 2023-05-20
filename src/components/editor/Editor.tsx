import { useState } from 'react';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
import { updateQuery } from 'src/store/slices/editorSlice';
import { TextField, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAutoComplete } from 'src/hooks/useAutoComplete';
import { Variables } from '../variablesSection/Variables';

export function Editor() {
  const { t } = useTranslation();
  const { query } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(query);
  const [handleChange, inputRef] = useAutoComplete(setValue);

  const handleBlur = () => {
    dispatch(updateQuery(value.trim()));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
      }}
      component='form'
      name='editor'
    >
      <TextField
        sx={{ width: '100%', '& fieldset': { border: 'none' } }}
        onBlur={handleBlur}
        placeholder={t('main.editorPlaceholder') as string}
        multiline
        fullWidth
        maxRows={1000}
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
        name='query'
      />
      <Variables />
    </Box>
  );
}
