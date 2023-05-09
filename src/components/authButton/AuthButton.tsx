import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { LoadingButton } from '@mui/lab';
import { auth } from 'src/utils/firebase/firebase';

type AuthButtonProps = {
  title: string;
  link: 'sign-in' | 'sign-up';
  isLogout: boolean;
};

export function AuthButton({ title, link, isLogout }: AuthButtonProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    if (isLogout) {
      await signOut(auth);
      navigate(`/`);
    } else {
      navigate(`/${link}`);
    }
    setIsLoading(false);
  };

  return (
    <LoadingButton loading={isLoading} onClick={handleClick}>
      {title}
    </LoadingButton>
  );
}
