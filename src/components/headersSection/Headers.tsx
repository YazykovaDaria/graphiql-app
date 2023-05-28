import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
import { updateHeaders } from 'src/store/slices/editorSlice';
import { useState } from 'react';
import { useAutoComplete } from 'src/hooks/useAutoComplete';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Headers() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { headers } = useAppSelector((state) => state.editor);
  const [value, setValue] = useState(headers);
  const [handleChange, inputRef] = useAutoComplete(setValue, 1);

  const handleBlur = () => {
    dispatch(updateHeaders(value.trim()));
  };

  return (
    <Accordion data-testid='headers'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel2a-content'
        id='panel2a-header'
      >
        <Typography>{t('main.headers')}</Typography>
      </AccordionSummary>

      <TextField
        sx={{ width: '100%', height: '40%', '& fieldset': { border: 'none' } }}
        onBlur={handleBlur}
        multiline
        fullWidth
        maxRows={100}
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
        autoFocus
      />

      <AccordionDetails />
    </Accordion>
  );
}
