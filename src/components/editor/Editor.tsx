import { useState, ChangeEvent, useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
import { updateQuery } from 'src/store/slices/editorSlice';
import { TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { autoBracketComplete } from 'src/utils/autoComplete/bracketsAutoComplete';

// ошибки mui из-за слишком длинного placeholder
export function Editor() {
  const { t } = useTranslation();
  const { query } = useAppSelector((state) => state.editor);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(query);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.selectionStart = caretPosition;
      inputRef.current.selectionEnd = caretPosition;
    }
  }, [caretPosition]);

  const handleBlur = () => {
    dispatch(updateQuery(value));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [newValue, caretPos] = autoBracketComplete(e);
    setValue(newValue);
    if (caretPos) {
      setCaretPosition(caretPos);
    }
  };

  return (
    <form>
      <TextField
        sx={{ width: '100%', height: '100%', '& fieldset': { border: 'none' } }}
        onBlur={handleBlur}
        placeholder={t('main.editorPlaceholder') as string}
        multiline
        fullWidth
        maxRows={1000}
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
      />
    </form>
  );
}
