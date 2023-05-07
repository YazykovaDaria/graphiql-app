import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { removeCredentials } from 'src/store/slices/authSlice';

type AuthButtonProps = {
  title: string;
  link: 'sign-in' | 'sign-up';
  isLogout: boolean;
};

export function AuthButton({ title, link, isLogout }: AuthButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLogout) {
      dispatch(removeCredentials());
      navigate(`/`);
    } else {
      navigate(`/${link}`);
    }
  };

  return <Button onClick={handleClick}>{title}</Button>;
}
