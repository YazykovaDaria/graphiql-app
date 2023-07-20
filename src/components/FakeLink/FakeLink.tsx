import { Typography } from '@mui/material';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  mainColor?: string;
  hoverColor?: string;
};

export function FakeLink({
  children,
  onClick,
  mainColor = '#1976d2',
  hoverColor = '#00c853',
}: Props) {
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
