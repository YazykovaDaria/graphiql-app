import { Typography } from '@mui/material';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  mainColor?: string;
  hoverColor?: string;
};

export function FakeLink({ children, onClick, mainColor = 'blue', hoverColor = 'green' }: Props) {
  return (
    <Typography
      onClick={onClick}
      sx={{
        color: mainColor,
        '&:hover': { color: hoverColor, cursor: 'pointer', transition: '0.3s' },
      }}
    >
      {children}
    </Typography>
  );
}
