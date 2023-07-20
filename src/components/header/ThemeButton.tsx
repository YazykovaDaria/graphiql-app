import { useContext } from 'react';
import { ColorModeContext } from 'src/context/colorModeContext';
import { IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function ThemeButton() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  const toggleMode = () => {
    toggleColorMode();
  };

  return (
    <IconButton onClick={toggleMode}>
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}

export default ThemeButton;
export { ColorModeContext };
