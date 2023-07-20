import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { LoadingButton } from '@mui/lab';
import { auth } from 'src/utils/firebase/firebase';

type LinkBtnWithAuthProps = {
  title: string;
  link: string;
  isLogout?: boolean;
};

export function LinkBtnWithAuth({ title, link, isLogout = false }: LinkBtnWithAuthProps) {
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
    <LoadingButton loading={isLoading} onClick={handleClick} color='inherit'>
      <span>{title}</span>
    </LoadingButton>
  );
}
