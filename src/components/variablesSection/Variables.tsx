import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
import { updateVariables } from 'src/store/slices/editorSlice';
import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { autoBracketComplete } from 'src/utils/autoComplete/bracketsAutoComplete';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Variables() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { variables } = useAppSelector((state) => state.editor);
  const [value, setValue] = useState(variables);
  const [caretPosition, setCaretPosition] = useState(1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.selectionStart = caretPosition;
      inputRef.current.selectionEnd = caretPosition;
    }
  }, [caretPosition]);

  const handleBlur = () => {
    dispatch(updateVariables(value.trim()));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [newValue, caretPos] = autoBracketComplete(e);
    setValue(newValue);
    if (caretPos) {
      setCaretPosition(caretPos);
    }
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>{t('main.variables')}</Typography>
      </AccordionSummary>

      <TextField
        sx={{ width: '100%', '& fieldset': { border: 'none' } }}
        onBlur={handleBlur}
        multiline
        fullWidth
        maxRows={100}
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
      />

      <AccordionDetails />
    </Accordion>
  );
}
