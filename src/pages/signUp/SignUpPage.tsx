import { Container } from '@mui/material';
import { AuthForm } from 'src/components/authForm/AuthForm';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { authSubmit } from 'src/utils/authSubmit';
import { setCredentials } from 'src/store/slices/authSlice';
import { AuthFormInputs } from 'src/types/AuthFormInputs';

export function SignUpPage() {
  const dispatch = useAppDispatch();

  const onSubmit = async ({ email, password }: AuthFormInputs) => {
    const userData = await authSubmit({ isSignIn: false, email, password });
    dispatch(setCredentials(userData.refreshToken));
  };

  return (
    <Container>
      <AuthForm title='Sign Up' link='sign-up' authSubmit={onSubmit} />
    </Container>
  );
}
