import { Typography, useTheme } from '@mui/material';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  mainColor?: string;
  hoverColor?: string;
};

export function FakeLink({ children, onClick, mainColor = 'blue', hoverColor = 'green' }: Props) {
  const {
    palette: { mode },
  } = useTheme();

  const light = mode === 'light';

  return (
    <Typography
      onClick={onClick}
      sx={{
        color: light ? mainColor : '#9191BB',
        '&:hover': { color: light ? hoverColor : '#7B9F7B', cursor: 'pointer', transition: '0.3s' },
      }}
    >
      {children}
    </Typography>
  );
}
