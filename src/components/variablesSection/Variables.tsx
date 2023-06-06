import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from 'src/hooks/reduxHooks';
import { updateVariables } from 'src/store/slices/editorSlice';
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

export function Variables() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { variables } = useAppSelector((state) => state.editor);
  const [value, setValue] = useState(variables);
  const [handleChange, inputRef] = useAutoComplete(setValue, 1);

  const handleBlur = () => {
    dispatch(updateVariables(value.trim()));
  };

  return (
    <Accordion data-testid='variables'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>{t('main.variables')}</Typography>
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
