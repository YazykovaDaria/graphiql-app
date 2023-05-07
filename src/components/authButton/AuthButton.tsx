import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

type AuthButtonProps = {
  title: string;
  link: 'sign-in' | 'sign-up';
  isLogout: boolean;
};

export function AuthButton({ title, link, isLogout }: AuthButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLogout) {
      navigate(`/`);
    } else {
      navigate(`/${link}`);
    }
  };

  return <Button onClick={handleClick}>{title}</Button>;
}
